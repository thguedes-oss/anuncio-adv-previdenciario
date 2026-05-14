const OFFICE = {
  whatsappNumber: "5512981042299",
  phoneDisplay: "(12) 98104-2299",
  lawyerName: "Dr. Thiago Tomizawa"
};

const defaultWhatsappMessage = [
  "Olá, gostaria de fazer uma triagem para consulta de planejamento de aposentadoria."
].join("\n");

const TRIAGE_FIELDS = {
  name: "Nome",
  age: "Idade aproximada",
  objective: "Quero saber",
  documents: "Documentos que tenho",
  contactTime: "Melhor horário para retorno"
};

function getGoogleAdsConfig() {
  return window.GOOGLE_ADS_CONFIG || {};
}

function getGoogleAdsConversion(conversionName) {
  const config = getGoogleAdsConfig();
  const conversionId = (config.conversionId || "").trim();
  const label = (config.conversionLabels?.[conversionName] || "").trim();

  if (!conversionId || !label) {
    return null;
  }

  return `${conversionId}/${label}`;
}

function loadGoogleAdsTag() {
  const config = getGoogleAdsConfig();
  const conversionId = (config.conversionId || "").trim();

  if (!conversionId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.querySelector(`[data-google-ads-tag="${conversionId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(conversionId)}`;
    script.setAttribute("data-google-ads-tag", conversionId);
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", conversionId);
}

function reportGoogleAdsConversion(conversionName) {
  const sendTo = getGoogleAdsConversion(conversionName);

  if (!sendTo || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    event_category: "lead",
    event_label: conversionName
  });
}

function buildWhatsAppUrl(message = defaultWhatsappMessage) {
  return `https://wa.me/${OFFICE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function trackEvent(eventName) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    page_location: window.location.href
  });
}

function buildTriageMessage(form) {
  const data = new FormData(form);
  const lines = [
    "Olá, gostaria de fazer uma triagem para consulta de planejamento de aposentadoria.",
    "",
    "Dados que consegui informar:"
  ];

  Object.entries(TRIAGE_FIELDS).forEach(([field, label]) => {
    const value = String(data.get(field) || "").trim();
    if (value) {
      lines.push(`${label}: ${value}`);
    }
  });

  lines.push("");
  lines.push("Gostaria de saber os próximos passos para preparar a consulta.");

  return lines.join("\n");
}

function wireTriageForm() {
  const form = document.querySelector("#triagem, #triage-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    trackEvent("triage_submit");
    trackEvent("whatsapp_triage_submit");
    reportGoogleAdsConversion("triage");
    reportGoogleAdsConversion("whatsapp");

    const url = buildWhatsAppUrl(buildTriageMessage(form));
    const opened = window.open(url, "_blank", "noopener");
    if (!opened) {
      window.location.href = url;
    }
  });
}

function wireTracking() {
  document.querySelectorAll("[data-whatsapp]").forEach((element) => {
    element.setAttribute("href", buildWhatsAppUrl());
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-event]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent(element.dataset.event);

      if (element.dataset.conversion) {
        reportGoogleAdsConversion(element.dataset.conversion);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadGoogleAdsTag();
  wireTracking();
  wireTriageForm();
});
