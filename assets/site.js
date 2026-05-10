const OFFICE = {
  whatsappNumber: "5512981042299",
  phoneDisplay: "(12) 98104-2299",
  lawyerName: "Dr. Thiago Tomizawa"
};

const triageMessage = [
  "Olá, gostaria de fazer a triagem para uma consulta de planejamento de aposentadoria."
].join("\n");

function buildWhatsAppUrl() {
  return `https://wa.me/${OFFICE.whatsappNumber}?text=${encodeURIComponent(triageMessage)}`;
}

function trackEvent(eventName) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    page_location: window.location.href
  });
}

function wireTracking() {
  document.querySelectorAll("[data-whatsapp]").forEach((element) => {
    element.setAttribute("href", buildWhatsAppUrl());
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-event]").forEach((element) => {
    element.addEventListener("click", () => trackEvent(element.dataset.event));
  });
}

function wireMobileAction() {
  const mobileAction = document.querySelector(".mobile-action");
  if (!mobileAction) {
    return;
  }

  const toggleMobileAction = () => {
    mobileAction.classList.toggle("is-visible", window.scrollY > 520);
  };

  toggleMobileAction();
  window.addEventListener("scroll", toggleMobileAction, { passive: true });
}

window.addEventListener("DOMContentLoaded", () => {
  wireTracking();
  wireMobileAction();
});
