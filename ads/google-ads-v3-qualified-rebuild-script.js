const CAMPAIGN_CANDIDATE_NAMES = [
  "INSS Diagnostico Aposentadoria Jacarei SJC v3",
  "INSS Planejamento Jacarei SJC",
  "INSS Planejamento Aposentadoria 55+ v2",
  "Advogado Previdenci\u00e1rio (INSS)",
  "[S] - Leads - Previdenciario",
  "[S] - Leads - Previdenci\u00e1rio"
];

const CAMPAIGN_NAME = "INSS Diagnostico Aposentadoria Jacarei SJC v3";
const FINAL_URL =
  "https://thguedes-oss.github.io/anuncio-adv-previdenciario/" +
  "?utm_source=google&utm_medium=cpc&utm_campaign=inss_diagnostico_aposentadoria_jacarei_sjc_v3" +
  "&utm_adgroup={adgroupid}&utm_keyword={keyword}&utm_matchtype={matchtype}";
const DAILY_BUDGET = 20;
const API_VERSION = "v24";

const TARGET_LOCATION_IDS = [
  1031741, // Jacarei, State of Sao Paulo, Brazil
  1001772  // Sao Jose dos Campos, State of Sao Paulo, Brazil
];

const EXCLUDED_AGE_RANGES = [
  "AGE_RANGE_18_24",
  "AGE_RANGE_25_34",
  "AGE_RANGE_35_44",
  "AGE_RANGE_45_54"
];

const AGE_RANGES_TO_KEEP_OPEN = [
  "AGE_RANGE_55_64",
  "AGE_RANGE_65_UP",
  "AGE_RANGE_UNDETERMINED"
];

const AD_GROUPS = [
  {
    name: "Quando posso me aposentar",
    cpcMicros: 6500000,
    keywords: [
      { text: "quando posso me aposentar", matchType: "PHRASE" },
      { text: "quando posso me aposentar", matchType: "EXACT" },
      { text: "quando vou me aposentar", matchType: "PHRASE" },
      { text: "saber quando vou me aposentar", matchType: "PHRASE" },
      { text: "saber se posso me aposentar", matchType: "PHRASE" },
      { text: "saber se posso aposentar", matchType: "PHRASE" },
      { text: "quando pedir aposentadoria", matchType: "PHRASE" },
      { text: "quanto tempo falta para aposentar", matchType: "PHRASE" },
      { text: "quanto tempo falta para aposentar", matchType: "EXACT" },
      { text: "quanto tempo falta para me aposentar", matchType: "PHRASE" },
      { text: "planejamento aposentadoria inss", matchType: "PHRASE" }
    ]
  },
  {
    name: "Valor da aposentadoria",
    cpcMicros: 6500000,
    keywords: [
      { text: "quanto vou receber de aposentadoria", matchType: "PHRASE" },
      { text: "quanto vou receber de aposentadoria", matchType: "EXACT" },
      { text: "qual valor da minha aposentadoria", matchType: "PHRASE" },
      { text: "valor aproximado aposentadoria", matchType: "PHRASE" },
      { text: "calcular valor aposentadoria", matchType: "PHRASE" },
      { text: "quanto vou ganhar aposentadoria", matchType: "PHRASE" },
      { text: "valor beneficio aposentadoria", matchType: "PHRASE" },
      { text: "beneficio aposentadoria valor", matchType: "PHRASE" }
    ]
  },
  {
    name: "Melhor beneficio",
    cpcMicros: 6500000,
    keywords: [
      { text: "qual melhor aposentadoria", matchType: "PHRASE" },
      { text: "qual melhor aposentadoria", matchType: "EXACT" },
      { text: "melhor beneficio aposentadoria", matchType: "PHRASE" },
      { text: "qual melhor beneficio inss", matchType: "PHRASE" },
      { text: "melhor regra aposentadoria", matchType: "PHRASE" },
      { text: "melhor momento para se aposentar", matchType: "PHRASE" },
      { text: "planejamento de aposentadoria", matchType: "PHRASE" },
      { text: "planejamento de aposentadoria", matchType: "EXACT" },
      { text: "consulta planejamento aposentadoria", matchType: "PHRASE" }
    ]
  },
  {
    name: "Advogado aposentadoria local",
    cpcMicros: 7500000,
    keywords: [
      { text: "advogado aposentadoria jacarei", matchType: "PHRASE" },
      { text: "advogado aposentadoria jacare\u00ed", matchType: "PHRASE" },
      { text: "advogado aposentadoria jacarei", matchType: "EXACT" },
      { text: "advogado previdenci\u00e1rio jacare\u00ed", matchType: "PHRASE" },
      { text: "advogado previdenciario jacarei", matchType: "PHRASE" },
      { text: "advogado inss jacare\u00ed", matchType: "PHRASE" },
      { text: "advogado inss jacarei", matchType: "PHRASE" },
      { text: "advogado aposentadoria s\u00e3o jos\u00e9 dos campos", matchType: "PHRASE" },
      { text: "advogado aposentadoria sao jose dos campos", matchType: "PHRASE" },
      { text: "advogado previdenci\u00e1rio s\u00e3o jos\u00e9 dos campos", matchType: "PHRASE" },
      { text: "advogado previdenciario sao jose dos campos", matchType: "PHRASE" },
      { text: "advogado inss s\u00e3o jos\u00e9 dos campos", matchType: "PHRASE" },
      { text: "advogado inss sao jose dos campos", matchType: "PHRASE" }
    ]
  }
];

const HEADLINES = [
  "Saiba Quando Se Aposentar",
  "Planejamento de Aposentadoria",
  "Valor Aproximado do Benef\u00edcio",
  "Qual o Melhor Benef\u00edcio",
  "Advogado Previdenci\u00e1rio",
  "Atendimento em Jacare\u00ed",
  "Consulta Com Agendamento",
  "Pr\u00f3ximo da Aposentadoria",
  "Aposentadoria Pelo INSS",
  "Hist\u00f3rico de Trabalho",
  "Tempo de Contribui\u00e7\u00e3o",
  "Antes de Pedir ao INSS",
  "Escrit\u00f3rio em Jacare\u00ed",
  "Jacare\u00ed e SJC",
  "Atendimento Online"
];

const DESCRIPTIONS = [
  "Consulta para avaliar tempo de contribui\u00e7\u00e3o e orientar o pedido ao INSS.",
  "Saiba quando pedir aposentadoria e qual caminho pode fazer sentido no seu caso.",
  "Planejamento com an\u00e1lise do hist\u00f3rico de trabalho e contagem de tempo.",
  "Atendimento em Jacare\u00ed, S\u00e3o Jos\u00e9 dos Campos e online, mediante agendamento."
];

const NEGATIVE_KEYWORDS = [
  { text: "gr\u00e1tis", matchType: "BROAD" },
  { text: "gratis", matchType: "BROAD" },
  { text: "gratuito", matchType: "BROAD" },
  { text: "gratuita", matchType: "BROAD" },
  { text: "modelo", matchType: "BROAD" },
  { text: "pdf", matchType: "BROAD" },
  { text: "curso", matchType: "BROAD" },
  { text: "concurso", matchType: "BROAD" },
  { text: "vagas", matchType: "BROAD" },
  { text: "telefone do inss", matchType: "PHRASE" },
  { text: "telefone inss", matchType: "PHRASE" },
  { text: "ag\u00eancia inss", matchType: "PHRASE" },
  { text: "agencia inss", matchType: "PHRASE" },
  { text: "endere\u00e7o inss", matchType: "PHRASE" },
  { text: "endereco inss", matchType: "PHRASE" },
  { text: "agendamento inss", matchType: "PHRASE" },
  { text: "gov.br", matchType: "BROAD" },
  { text: "gov", matchType: "BROAD" },
  { text: "inss.gov", matchType: "BROAD" },
  { text: "meu inss", matchType: "PHRASE" },
  { text: "app meu inss", matchType: "PHRASE" },
  { text: "simulador gr\u00e1tis", matchType: "PHRASE" },
  { text: "simulador gratis", matchType: "PHRASE" },
  { text: "simulador gratuito", matchType: "PHRASE" },
  { text: "calculadora gr\u00e1tis", matchType: "PHRASE" },
  { text: "calculadora gratis", matchType: "PHRASE" },
  { text: "calculadora gratuita", matchType: "PHRASE" },
  { text: "passo a passo", matchType: "PHRASE" },
  { text: "tutorial", matchType: "BROAD" },
  { text: "apostila", matchType: "BROAD" },
  { text: "faculdade", matchType: "BROAD" },
  { text: "est\u00e1gio", matchType: "BROAD" },
  { text: "estagio", matchType: "BROAD" },
  { text: "emprego", matchType: "BROAD" },
  { text: "bpc", matchType: "BROAD" },
  { text: "loas", matchType: "BROAD" },
  { text: "aux\u00edlio doen\u00e7a", matchType: "PHRASE" },
  { text: "auxilio doenca", matchType: "PHRASE" },
  { text: "per\u00edcia", matchType: "BROAD" },
  { text: "pericia", matchType: "BROAD" },
  { text: "sal\u00e1rio maternidade", matchType: "PHRASE" },
  { text: "salario maternidade", matchType: "PHRASE" },
  { text: "pens\u00e3o por morte", matchType: "PHRASE" },
  { text: "pensao por morte", matchType: "PHRASE" },
  { text: "empr\u00e9stimo", matchType: "BROAD" },
  { text: "emprestimo", matchType: "BROAD" },
  { text: "consignado", matchType: "BROAD" },
  { text: "calend\u00e1rio pagamento", matchType: "PHRASE" },
  { text: "calendario pagamento", matchType: "PHRASE" },
  { text: "prova de vida", matchType: "PHRASE" },
  { text: "segunda via", matchType: "PHRASE" },
  { text: "senha", matchType: "BROAD" },
  { text: "login", matchType: "BROAD" },
  { text: "carta de concess\u00e3o", matchType: "PHRASE" },
  { text: "carta de concessao", matchType: "PHRASE" },
  { text: "extrato de pagamento", matchType: "PHRASE" }
];

const BROAD_NEGATIVES_TO_REMOVE = ["simulador", "sal\u00e1rio", "salario"];

function main() {
  const campaign = findCampaignForV3();
  refreshExistingCampaign(campaign);
}

function refreshExistingCampaign(campaign) {
  campaign.pause();
  pauseOtherCandidateCampaigns(campaign);
  if (campaign.getName() !== CAMPAIGN_NAME) {
    Logger.log("Campanha existente usada como base da v3: " + campaign.getName());
    campaign.setName(CAMPAIGN_NAME);
  }
  campaign.getBudget().setAmount(DAILY_BUDGET);
  setPresenceLocationOption(campaign);
  setLocations(campaign);
  removeUndesiredBroadNegatives(campaign);
  upsertCampaignNegatives(campaign);
  upsertAdGroups(campaign);
  pauseDisallowedAdGroups(campaign);
  applyAgeFilter(campaign);
  campaign.enable();
  Logger.log("Campanha v3 revisada e ATIVADA: " + campaign.getName());
  Logger.log("Or\u00e7amento: R$ " + DAILY_BUDGET + "/dia por 10 dias.");
  Logger.log("Idade Desconhecida permanece aberta; apenas faixas abaixo de 55 foram exclu\u00eddas.");
}

function pauseOtherCandidateCampaigns(activeCampaign) {
  const activeId = String(activeCampaign.getId());
  const candidateNames = {};
  CAMPAIGN_CANDIDATE_NAMES.forEach(function(name) {
    candidateNames[name] = true;
  });

  const iterator = AdsApp.campaigns().get();
  while (iterator.hasNext()) {
    const campaign = iterator.next();
    if (String(campaign.getId()) === activeId) {
      continue;
    }
    if (candidateNames[campaign.getName()]) {
      campaign.pause();
      Logger.log("Campanha antiga mantida pausada: " + campaign.getName());
    }
  }
}

function findCampaignForV3() {
  for (let i = 0; i < CAMPAIGN_CANDIDATE_NAMES.length; i++) {
    const campaign = findCampaignByName(CAMPAIGN_CANDIDATE_NAMES[i]);
    if (campaign) {
      return campaign;
    }
  }
  throw new Error("Nenhuma campanha de pesquisa encontrada para preparar a v3.");
}

function findCampaignByName(name) {
  const escaped = name.replace(/"/g, '\\"');
  const iterator = AdsApp.campaigns()
    .withCondition('campaign.name = "' + escaped + '"')
    .get();
  return iterator.hasNext() ? iterator.next() : null;
}

function setLocations(campaign) {
  const desired = {};
  TARGET_LOCATION_IDS.forEach(function(id) {
    desired[String(id)] = true;
  });

  const existing = {};
  const locations = campaign.targeting().targetedLocations().get();
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

function setPresenceLocationOption(campaign) {
  try {
    AdsApp.mutateAll([{
      campaignOperation: {
        update: {
          resourceName: "customers/" + getCustomerId() + "/campaigns/" + campaign.getId(),
          geoTargetTypeSetting: {
            positiveGeoTargetType: "PRESENCE",
            negativeGeoTargetType: "PRESENCE"
          }
        },
        updateMask: "geo_target_type_setting.positive_geo_target_type,geo_target_type_setting.negative_geo_target_type"
      }
    }], {
      apiVersion: API_VERSION,
      partialFailure: false
    });
    Logger.log("Op\u00e7\u00e3o de localiza\u00e7\u00e3o ajustada para presen\u00e7a na regi\u00e3o.");
  } catch (error) {
    Logger.log("N\u00e3o foi poss\u00edvel ajustar op\u00e7\u00e3o de localiza\u00e7\u00e3o por script; conferir manualmente: " + error);
  }
}

function upsertAdGroups(campaign) {
  const allowed = {};
  AD_GROUPS.forEach(function(group) {
    allowed[group.name] = true;
    const adGroup = getOrCreateAdGroup(campaign, group.name, group.cpcMicros);
    addKeywords(adGroup, group.keywords);
    addResponsiveSearchAdIfMissing(adGroup);
  });
}

function pauseDisallowedAdGroups(campaign) {
  const allowed = {};
  AD_GROUPS.forEach(function(group) {
    allowed[group.name] = true;
  });
  const iterator = campaign.adGroups().get();
  while (iterator.hasNext()) {
    const adGroup = iterator.next();
    if (!allowed[adGroup.getName()]) {
      adGroup.pause();
      Logger.log("Grupo fora da v3 pausado: " + adGroup.getName());
    }
  }
}

function getOrCreateAdGroup(campaign, name, cpcMicros) {
  const escapedName = name.replace(/"/g, '\\"');
  const iterator = campaign.adGroups()
    .withCondition('ad_group.name = "' + escapedName + '"')
    .get();
  if (iterator.hasNext()) {
    const adGroup = iterator.next();
    adGroup.bidding().setCpc(cpcMicros / 1000000);
    adGroup.enable();
    return adGroup;
  }

  const operation = campaign.newAdGroupBuilder()
    .withName(name)
    .withCpc(cpcMicros / 1000000)
    .withStatus("ENABLED")
    .build();
  Logger.log("Grupo criado: " + name);
  return operation.getResult();
}

function addKeywords(adGroup, keywordObjects) {
  const existing = {};
  const keywordIterator = adGroup.keywords().get();
  while (keywordIterator.hasNext()) {
    const keyword = keywordIterator.next();
    existing[normalizeKeywordKey(keyword.getText())] = true;
  }

  keywordObjects.forEach(function(keyword) {
    const formatted = formatKeyword(keyword);
    if (existing[normalizeKeywordKey(formatted)]) {
      return;
    }
    try {
      adGroup.newKeywordBuilder()
        .withText(formatted)
        .withFinalUrl(FINAL_URL)
        .build();
      Logger.log("Palavra-chave adicionada em " + adGroup.getName() + ": " + formatted);
    } catch (error) {
      Logger.log("Falha ao adicionar palavra-chave " + formatted + ": " + error);
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
    .withPath2("diagnostico")
    .withHeadlines(HEADLINES)
    .withDescriptions(DESCRIPTIONS)
    .build();
  Logger.log("An\u00fancio responsivo criado em: " + adGroup.getName());
}

function removeUndesiredBroadNegatives(campaign) {
  const iterator = campaign.negativeKeywords().get();
  while (iterator.hasNext()) {
    const negative = iterator.next();
    const text = normalizeKeywordKey(negative.getText()).replace(/^\[|\]$/g, "").replace(/^"|"$/g, "");
    if (BROAD_NEGATIVES_TO_REMOVE.indexOf(text) !== -1) {
      negative.remove();
      Logger.log("Negativa ampla removida por cortar volume \u00fatil: " + text);
    }
  }
}

function upsertCampaignNegatives(campaign) {
  const existing = {};
  const iterator = campaign.negativeKeywords().get();
  while (iterator.hasNext()) {
    const negative = iterator.next();
    existing[normalizeKeywordKey(negative.getText())] = true;
  }

  NEGATIVE_KEYWORDS.forEach(function(keyword) {
    const formatted = formatKeyword(keyword);
    if (existing[normalizeKeywordKey(formatted)]) {
      return;
    }
    try {
      campaign.createNegativeKeyword(formatted);
      Logger.log("Negativa adicionada: " + formatted);
    } catch (error) {
      Logger.log("Falha ao adicionar negativa " + formatted + ": " + error);
    }
  });
}

function applyAgeFilter(campaign) {
  const existing = getExistingAgeCriteria(campaign.getId());
  const operations = [];
  const customerId = getCustomerId();
  const adGroupIterator = campaign.adGroups().get();

  while (adGroupIterator.hasNext()) {
    const adGroup = adGroupIterator.next();
    const adGroupId = String(adGroup.getId());
    const criteria = existing[adGroupId] || {};

    AGE_RANGES_TO_KEEP_OPEN.forEach(function(ageRange) {
      (criteria[ageRange] || []).forEach(function(criterion) {
        if (criterion.negative && criterion.status !== "REMOVED") {
          operations.push({
            adGroupCriterionOperation: {
              remove: criterion.resourceName
            }
          });
        }
      });
    });

    EXCLUDED_AGE_RANGES.forEach(function(ageRange) {
      if (hasNegativeAge(criteria, ageRange)) {
        return;
      }
      operations.push({
        adGroupCriterionOperation: {
          create: {
            adGroup: "customers/" + customerId + "/adGroups/" + adGroupId,
            negative: true,
            ageRange: {
              type: ageRange
            }
          }
        }
      });
    });
  }

  mutateAllSafely(operations, "ajustes de idade: excluir abaixo de 55 e manter Desconhecida");
}

function getExistingAgeCriteria(campaignId) {
  const criteria = {};
  const query =
    "SELECT ad_group.id, ad_group_criterion.resource_name, " +
    "ad_group_criterion.age_range.type, ad_group_criterion.negative, ad_group_criterion.status " +
    "FROM ad_group_criterion " +
    "WHERE campaign.id = " + campaignId + " " +
    "AND ad_group_criterion.type = AGE_RANGE";
  const rows = AdsApp.search(query, { apiVersion: API_VERSION });
  while (rows.hasNext()) {
    const row = rows.next();
    const adGroupId = String(row.adGroup.id);
    const ageRange = row.adGroupCriterion.ageRange.type;
    if (!criteria[adGroupId]) {
      criteria[adGroupId] = {};
    }
    if (!criteria[adGroupId][ageRange]) {
      criteria[adGroupId][ageRange] = [];
    }
    criteria[adGroupId][ageRange].push({
      resourceName: row.adGroupCriterion.resourceName,
      negative: Boolean(row.adGroupCriterion.negative),
      status: String(row.adGroupCriterion.status || "")
    });
  }
  return criteria;
}

function hasNegativeAge(criteria, ageRange) {
  return Boolean((criteria[ageRange] || []).some(function(criterion) {
    return criterion.negative && criterion.status !== "REMOVED";
  }));
}

function mutateAllSafely(operations, label) {
  if (!operations.length) {
    Logger.log("Sem " + label + " para aplicar.");
    return;
  }
  AdsApp.mutateAll(operations, {
    apiVersion: API_VERSION,
    partialFailure: false
  });
  Logger.log("Opera\u00e7\u00f5es aplicadas para " + label + ": " + operations.length);
}

function formatKeyword(keyword) {
  if (keyword.matchType === "EXACT") {
    return "[" + keyword.text + "]";
  }
  if (keyword.matchType === "PHRASE") {
    return '"' + keyword.text + '"';
  }
  return keyword.text;
}

function normalizeKeywordKey(text) {
  return String(text || "").trim().toLowerCase();
}

function getCustomerId() {
  return AdsApp.currentAccount().getCustomerId().replace(/-/g, "");
}
