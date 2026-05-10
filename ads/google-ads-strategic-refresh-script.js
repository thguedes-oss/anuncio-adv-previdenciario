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
  "Planejamento de Aposentadoria",
  "Contagem de Tempo INSS",
  "Consulta Previdenci\u00e1ria",
  "Aposentadoria pelo INSS",
  "An\u00e1lise de CNIS",
  "Consulta Para Aposentadoria",
  "Atendimento em Jacare\u00ed",
  "S\u00e3o Jos\u00e9 dos Campos",
  "Consulta Com Agendamento",
  "Quando Pedir Aposentadoria",
  "Planeje Antes De Pedir",
  "Organize Seu CNIS",
  "Hist\u00f3rico Contributivo",
  "Documentos Para Consulta",
  "Direito Previdenci\u00e1rio"
];

const DESCRIPTIONS = [
  "Consulta para analisar CNIS, v\u00ednculos e tempo de contribui\u00e7\u00e3o antes do pedido ao INSS.",
  "Planejamento para quem quer estimar o momento adequado de solicitar aposentadoria.",
  "Atendimento mediante agendamento para organizar documentos e pr\u00f3ximos passos.",
  "Foco em contagem de tempo, hist\u00f3rico contributivo e consulta previdenci\u00e1ria."
];

const AD_GROUPS = [
  {
    name: "Planejamento previdenci\u00e1rio",
    keywords: [
      '"planejamento previdenciario"',
      '[planejamento previdenciario]',
      '"planejamento previdenci\u00e1rio"',
      '[planejamento previdenci\u00e1rio]',
      '"planejamento aposentadoria inss"',
      '[planejamento aposentadoria inss]',
      '"consulta planejamento aposentadoria"',
      '[consulta planejamento aposentadoria]',
      '"consulta de planejamento previdenciario"',
      '[consulta de planejamento previdenciario]',
      '"planejamento aposentadoria advogado"',
      '[planejamento aposentadoria advogado]'
    ]
  },
  {
    name: "Contagem de tempo INSS",
    keywords: [
      '"contagem de tempo inss"',
      '[contagem de tempo inss]',
      '"tempo de contribui\u00e7\u00e3o para aposentadoria"',
      '"tempo de contribuicao para aposentadoria"',
      '"an\u00e1lise de cnis"',
      '[an\u00e1lise de cnis]',
      '"analise de cnis"',
      '[analise de cnis]',
      '"consulta cnis aposentadoria"',
      '[consulta cnis aposentadoria]'
    ]
  },
  {
    name: "Prazo para aposentadoria",
    keywords: [
      '"quanto falta para aposentar"',
      '[quanto falta para aposentar]',
      '"quanto tempo falta para aposentar"',
      '[quanto tempo falta para aposentar]',
      '"quando posso me aposentar pelo inss"',
      '[quando posso me aposentar pelo inss]',
      '"melhor momento para aposentar"',
      '[melhor momento para aposentar]',
      '"quando pedir aposentadoria inss"',
      '[quando pedir aposentadoria inss]'
    ]
  },
  {
    name: "Advogado previdenci\u00e1rio Jacare\u00ed SJC",
    keywords: [
      '"advogado previdenciario jacarei"',
      '[advogado previdenciario jacarei]',
      '"advogado previdenci\u00e1rio jacare\u00ed"',
      '[advogado previdenci\u00e1rio jacare\u00ed]',
      '"advogado aposentadoria jacarei"',
      '[advogado aposentadoria jacarei]',
      '"consulta previdenciaria jacarei"',
      '[consulta previdenciaria jacarei]',
      '"advogado previdenciario sao jose dos campos"',
      '[advogado previdenciario sao jose dos campos]',
      '"advogado previdenci\u00e1rio s\u00e3o jos\u00e9 dos campos"',
      '"advogado aposentadoria sao jose dos campos"',
      '[advogado aposentadoria sao jose dos campos]',
      '"consulta previdenciaria sao jose dos campos"',
      '[consulta previdenciaria sao jose dos campos]',
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
  "tabela",
  '"telefone do inss"',
  '"telefone inss"',
  '"telefone inss jacarei"',
  '"meu inss"',
  '"ag\u00eancia inss"',
  '"agencia inss"',
  '"endere\u00e7o inss"',
  '"endereco inss"',
  '"agendamento inss"',
  "gov.br",
  "gov",
  "inss.gov",
  '"app meu inss"',
  '"simulador gr\u00e1tis"',
  '"simulador gratis"',
  '"simulador gratuito"',
  '"calculadora gr\u00e1tis"',
  '"calculadora gratis"',
  '"calculadora gratuita"',
  '"como fazer"',
  '"como pedir"',
  '"passo a passo"',
  "tutorial",
  "d\u00favida",
  "duvida",
  "d\u00favidas",
  "duvidas",
  '"extrato cnis"',
  '"baixar cnis"',
  '"emiss\u00e3o cnis"',
  '"emissao cnis"',
  "apostila",
  "faculdade",
  "est\u00e1gio",
  "estagio",
  "emprego",
  '"per\u00edcia m\u00e9dica inss"',
  '"pericia medica inss"',
  '"n\u00famero do inss"',
  '"numero do inss"',
  '"benef\u00edcio bloqueado telefone"',
  '"beneficio bloqueado telefone"',
  '"entrar no meu inss"',
  '"login meu inss"',
  "bpc",
  "loas",
  '"aux\u00edlio doen\u00e7a"',
  '"auxilio doenca"',
  '"pens\u00e3o por morte"',
  '"pensao por morte"',
  '"benef\u00edcio negado"',
  '"beneficio negado"',
  '"recurso inss"',
  '"revis\u00e3o da vida toda"',
  '"revisao da vida toda"'
];

function main() {
  const campaign = findCampaign();
  campaign.setName(CAMPAIGN_NAME);
  campaign.pause();
  campaign.getBudget().setAmount(DAILY_BUDGET);

  setLocations(campaign);
  resetAdSchedule(campaign);
  pauseLegacyAdGroups(campaign);
  upsertAdGroups(campaign);
  upsertCampaignNegatives(campaign);

  campaign.pause();
  Logger.log("Revis\u00e3o estrat\u00e9gica aplicada. Campanha mantida pausada: " + campaign.getName());
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
      try {
        location.remove();
        Logger.log("Local removido: " + id);
      } catch (error) {
        Logger.log("Falha ao remover local " + id + ": " + error);
      }
    }
  }

  TARGET_LOCATION_IDS.forEach(function(id) {
    if (!existing[String(id)]) {
      campaign.addLocation(id);
      Logger.log("Local adicionado: " + id);
    }
  });
}

function resetAdSchedule(campaign) {
  const schedules = campaign.targeting().adSchedules().get();
  while (schedules.hasNext()) {
    schedules.next().remove();
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
    pauseUnlistedKeywords(adGroup, group.keywords);
    refreshResponsiveSearchAd(adGroup);
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
    existing[keywordKey(keyword.getText())] = true;
  }

  keywordTexts.forEach(function(text) {
    if (existing[keywordKey(text)]) {
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

function pauseUnlistedKeywords(adGroup, keywordTexts) {
  const allowed = {};
  keywordTexts.forEach(function(text) {
    allowed[keywordKey(text)] = true;
  });

  const keywordIterator = adGroup.keywords().get();
  while (keywordIterator.hasNext()) {
    const keyword = keywordIterator.next();
    if (!allowed[keywordKey(keyword.getText())]) {
      keyword.pause();
      Logger.log("Palavra-chave antiga pausada em " + adGroup.getName() + ": " + keyword.getText());
    }
  }
}

function keywordKey(text) {
  return String(text).toLowerCase().replace(/\s+/g, " ").trim();
}

function refreshResponsiveSearchAd(adGroup) {
  const ads = adGroup.ads()
    .withCondition('ad_group_ad.ad.type = RESPONSIVE_SEARCH_AD')
    .get();
  let paused = 0;
  while (ads.hasNext()) {
    ads.next().pause();
    paused++;
  }
  if (paused > 0) {
    Logger.log("An\u00fancios responsivos antigos pausados em " + adGroup.getName() + ": " + paused);
  }

  adGroup.newAd().responsiveSearchAdBuilder()
    .withFinalUrl(FINAL_URL)
    .withPath1("aposentadoria")
    .withPath2("inss")
    .withHeadlines(HEADLINES)
    .withDescriptions(DESCRIPTIONS)
    .build();
  Logger.log("Novo an\u00fancio responsivo estrat\u00e9gico criado em: " + adGroup.getName());
}

function upsertCampaignNegatives(campaign) {
  const existing = {};
  const iterator = campaign.negativeKeywords().get();
  while (iterator.hasNext()) {
    const negative = iterator.next();
    existing[keywordKey(negative.getText())] = true;
  }

  NEGATIVE_KEYWORDS.forEach(function(text) {
    if (existing[keywordKey(text)]) {
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
