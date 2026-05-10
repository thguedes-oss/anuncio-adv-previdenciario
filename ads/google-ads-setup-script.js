const OLD_CAMPAIGN_NAME = "[S] - Leads - Previdenciario";
const OLD_CAMPAIGN_NAME_ACCENTED = "[S] - Leads - Previdenci\u00e1rio";
const CAMPAIGN_NAME = "INSS Planejamento Jacarei SJC";
const FINAL_URL = "https://thguedes-oss.github.io/anuncio-adv-previdenciario/";
const DAILY_BUDGET = 25;

const TARGET_LOCATION_IDS = [
  1031741, // Jacarei, State of Sao Paulo, Brazil
  1001772  // Sao Jose dos Campos, State of Sao Paulo, Brazil
];

const HEADLINES = [
  "Planejamento Previdenci\u00e1rio",
  "Contagem de Tempo INSS",
  "Consulta Previdenci\u00e1ria",
  "Aposentadoria pelo INSS",
  "An\u00e1lise de CNIS",
  "Advogado Previdenci\u00e1rio",
  "Atendimento em Jacare\u00ed",
  "S\u00e3o Jos\u00e9 dos Campos",
  "Consulta Com Agendamento",
  "Tempo Para Aposentar",
  "Regras de Transi\u00e7\u00e3o INSS",
  "Orienta\u00e7\u00e3o Previdenci\u00e1ria",
  "Hist\u00f3rico de Contribui\u00e7\u00e3o",
  "Documentos Para Aposentar",
  "Direito Previdenci\u00e1rio"
];

const DESCRIPTIONS = [
  "An\u00e1lise do CNIS, v\u00ednculos e contribui\u00e7\u00f5es para planejamento de aposentadoria pelo INSS.",
  "Atendimento previdenci\u00e1rio mediante agendamento para organizar o pedido ao INSS.",
  "Triagem pelo WhatsApp para orientar os documentos necess\u00e1rios antes da consulta.",
  "Planejamento de aposentadoria com foco em contagem de tempo e hist\u00f3rico contributivo."
];

const AD_GROUPS = [
  {
    name: "Planejamento previdenci\u00e1rio",
    keywords: [
      '"planejamento previdenciario"',
      '[planejamento previdenciario]',
      '"planejamento previdenci\u00e1rio"',
      '"planejamento aposentadoria inss"',
      '"consulta planejamento previdenciario"'
    ]
  },
  {
    name: "Contagem de tempo INSS",
    keywords: [
      '"contagem de tempo inss"',
      '[contagem de tempo inss]',
      '"calcular tempo de contribui\u00e7\u00e3o inss"',
      '"calcular tempo de contribuicao inss"',
      '"an\u00e1lise de cnis"',
      '"analise de cnis"'
    ]
  },
  {
    name: "Prazo para aposentadoria",
    keywords: [
      '"quanto falta para aposentar"',
      '[quanto falta para aposentar]',
      '"quanto tempo falta para aposentar"',
      '"quando posso me aposentar pelo inss"'
    ]
  },
  {
    name: "Advogado previdenci\u00e1rio Jacare\u00ed SJC",
    keywords: [
      '"advogado previdenciario jacarei"',
      '[advogado previdenciario jacarei]',
      '"advogado previdenci\u00e1rio jacare\u00ed"',
      '"consulta previdenciaria jacarei"',
      '"advogado previdenciario sao jose dos campos"',
      '"advogado previdenci\u00e1rio s\u00e3o jos\u00e9 dos campos"',
      '"consulta previdenciaria sao jose dos campos"',
      '"advogado previdenciario sjc"'
    ]
  }
];

const NEGATIVE_KEYWORDS = [
  "gr\u00e1tis",
  "gratis",
  "gratuito",
  "gratuita",
  "modelo",
  "pdf",
  "curso",
  "concurso",
  "vagas",
  "sal\u00e1rio",
  "salario",
  '"telefone do inss"',
  '"telefone inss"',
  '"meu inss"',
  '"ag\u00eancia inss"',
  '"agencia inss"',
  "gov.br",
  '"simulador gr\u00e1tis"',
  '"simulador gratis"',
  '"simulador gratuito"',
  '"calculadora gr\u00e1tis"',
  '"calculadora gratis"',
  '"calculadora gratuita"',
  "apostila",
  "faculdade",
  "est\u00e1gio",
  "estagio",
  "emprego",
  '"per\u00edcia m\u00e9dica inss"',
  '"pericia medica inss"',
  '"entrar no meu inss"',
  '"login meu inss"'
];

function main() {
  const campaign = findCampaign();
  campaign.setName(CAMPAIGN_NAME);
  campaign.pause();
  campaign.getBudget().setAmount(DAILY_BUDGET);

  setLocations(campaign);
  setAdScheduleIfEmpty(campaign);
  pauseLegacyAdGroups(campaign);
  upsertAdGroups(campaign);
  upsertCampaignNegatives(campaign);

  campaign.pause();
  Logger.log("Campanha preparada e mantida pausada: " + campaign.getName());
}

function findCampaign() {
  const names = [CAMPAIGN_NAME, OLD_CAMPAIGN_NAME_ACCENTED, OLD_CAMPAIGN_NAME];
  for (let i = 0; i < names.length; i++) {
    const escapedName = names[i].replace(/"/g, '\\"');
    const iterator = AdsApp.campaigns()
      .withCondition('campaign.name = "' + escapedName + '"')
      .get();
    if (iterator.hasNext()) {
      return iterator.next();
    }
  }
  throw new Error("Campanha de pesquisa pausada n\u00e3o encontrada.");
}

function setLocations(campaign) {
  const desired = {};
  TARGET_LOCATION_IDS.forEach(function(id) {
    desired[String(id)] = true;
  });

  const locations = campaign.targeting().targetedLocations().get();
  const existing = {};
  while (locations.hasNext()) {
    const location = locations.next();
    const id = String(location.getId());
    existing[id] = true;
    if (!desired[id]) {
      location.remove();
      Logger.log("Local removido: " + id);
    }
  }

  TARGET_LOCATION_IDS.forEach(function(id) {
    if (!existing[String(id)]) {
      campaign.addLocation(id);
      Logger.log("Local adicionado: " + id);
    }
  });
}

function setAdScheduleIfEmpty(campaign) {
  if (campaign.targeting().adSchedules().get().hasNext()) {
    return;
  }
  ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"].forEach(function(day) {
    campaign.addAdSchedule(day, 8, 0, 19, 0);
  });
  campaign.addAdSchedule("SATURDAY", 8, 0, 12, 0);
}

function pauseLegacyAdGroups(campaign) {
  const allowed = {};
  AD_GROUPS.forEach(function(group) {
    allowed[group.name] = true;
  });

  const iterator = campaign.adGroups().get();
  while (iterator.hasNext()) {
    const adGroup = iterator.next();
    if (!allowed[adGroup.getName()]) {
      adGroup.pause();
      Logger.log("Grupo antigo pausado: " + adGroup.getName());
    }
  }
}

function upsertAdGroups(campaign) {
  AD_GROUPS.forEach(function(group) {
    const adGroup = getOrCreateAdGroup(campaign, group.name);
    addKeywords(adGroup, group.keywords);
    addResponsiveSearchAdIfMissing(adGroup);
  });
}

function getOrCreateAdGroup(campaign, name) {
  const escapedName = name.replace(/"/g, '\\"');
  const iterator = campaign.adGroups()
    .withCondition('ad_group.name = "' + escapedName + '"')
    .get();
  if (iterator.hasNext()) {
    return iterator.next();
  }

  const operation = campaign.newAdGroupBuilder()
    .withName(name)
    .withCpc(2.50)
    .withStatus("ENABLED")
    .build();
  Logger.log("Grupo criado: " + name);
  return operation.getResult();
}

function addKeywords(adGroup, keywordTexts) {
  const existing = {};
  const keywordIterator = adGroup.keywords().get();
  while (keywordIterator.hasNext()) {
    const keyword = keywordIterator.next();
    existing[keyword.getText()] = true;
  }

  keywordTexts.forEach(function(text) {
    if (existing[text]) {
      return;
    }
    try {
      adGroup.newKeywordBuilder()
        .withText(text)
        .withFinalUrl(FINAL_URL)
        .build();
      Logger.log("Palavra-chave adicionada em " + adGroup.getName() + ": " + text);
    } catch (error) {
      Logger.log("Falha ao adicionar palavra-chave " + text + ": " + error);
    }
  });
}

function addResponsiveSearchAdIfMissing(adGroup) {
  const ads = adGroup.ads()
    .withCondition('ad_group_ad.ad.type = RESPONSIVE_SEARCH_AD')
    .get();
  if (ads.hasNext()) {
    return;
  }

  adGroup.newAd().responsiveSearchAdBuilder()
    .withFinalUrl(FINAL_URL)
    .withPath1("aposentadoria")
    .withPath2("inss")
    .withHeadlines(HEADLINES)
    .withDescriptions(DESCRIPTIONS)
    .build();
  Logger.log("An\u00fancio responsivo criado em: " + adGroup.getName());
}

function upsertCampaignNegatives(campaign) {
  const existing = {};
  const iterator = campaign.negativeKeywords().get();
  while (iterator.hasNext()) {
    const negative = iterator.next();
    existing[negative.getText()] = true;
  }

  NEGATIVE_KEYWORDS.forEach(function(text) {
    if (existing[text]) {
      return;
    }
    try {
      campaign.createNegativeKeyword(text);
      Logger.log("Negativa adicionada: " + text);
    } catch (error) {
      Logger.log("Falha ao adicionar negativa " + text + ": " + error);
    }
  });
}
