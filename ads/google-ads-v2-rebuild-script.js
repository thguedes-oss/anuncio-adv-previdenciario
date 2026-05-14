const OLD_CAMPAIGN_NAMES = [
  "INSS Planejamento Jacarei SJC",
  "[S] - Leads - Previdenciario",
  "[S] - Leads - Previdenci\u00e1rio"
];

const CAMPAIGN_NAME = "INSS Planejamento Aposentadoria 55+ v2";
const FINAL_URL = "https://thguedes-oss.github.io/anuncio-adv-previdenciario/";
const DAILY_BUDGET = 10;
const API_VERSION = "v24";

const TARGET_LOCATION_IDS = [
  1031741, // Jacarei, State of Sao Paulo, Brazil
  1001772  // Sao Jose dos Campos, State of Sao Paulo, Brazil
];

const EXCLUDED_AGE_RANGES = [
  "AGE_RANGE_18_24",
  "AGE_RANGE_25_34",
  "AGE_RANGE_35_44",
  "AGE_RANGE_45_54",
  "AGE_RANGE_UNDETERMINED"
];

const AD_GROUPS = [
  {
    name: "Planejar aposentadoria",
    cpcMicros: 3500000,
    keywords: [
      { text: "planejar aposentadoria", matchType: "BROAD" },
      { text: "planejar aposentadoria", matchType: "PHRASE" },
      { text: "planejar aposentadoria", matchType: "EXACT" },
      { text: "planejamento aposentadoria", matchType: "PHRASE" },
      { text: "planejamento aposentadoria", matchType: "EXACT" },
      { text: "planejamento de aposentadoria", matchType: "PHRASE" },
      { text: "consulta para aposentadoria", matchType: "BROAD" },
      { text: "consulta para aposentadoria", matchType: "PHRASE" },
      { text: "consulta para aposentadoria", matchType: "EXACT" },
      { text: "consulta aposentadoria", matchType: "PHRASE" }
    ]
  },
  {
    name: "Quando aposentar",
    cpcMicros: 3500000,
    keywords: [
      { text: "quando posso me aposentar", matchType: "PHRASE" },
      { text: "quando posso me aposentar", matchType: "EXACT" },
      { text: "quanto tempo falta para me aposentar", matchType: "PHRASE" },
      { text: "quanto tempo falta para me aposentar", matchType: "EXACT" },
      { text: "quanto falta para aposentar", matchType: "PHRASE" },
      { text: "tempo de contribui\u00e7\u00e3o para aposentadoria", matchType: "BROAD" },
      { text: "tempo de contribui\u00e7\u00e3o para aposentadoria", matchType: "PHRASE" },
      { text: "tempo de contribuicao para aposentadoria", matchType: "PHRASE" },
      { text: "calcular tempo de contribui\u00e7\u00e3o para aposentadoria", matchType: "PHRASE" }
    ]
  },
  {
    name: "Advogado aposentadoria local",
    cpcMicros: 4000000,
    keywords: [
      { text: "advogado aposentadoria", matchType: "BROAD" },
      { text: "advogado aposentadoria jacarei", matchType: "PHRASE" },
      { text: "advogado aposentadoria jacare\u00ed", matchType: "PHRASE" },
      { text: "advogado aposentadoria jacarei", matchType: "EXACT" },
      { text: "advogado inss jacarei", matchType: "PHRASE" },
      { text: "advogado inss jacare\u00ed", matchType: "PHRASE" },
      { text: "advogado inss s\u00e3o jos\u00e9 dos campos", matchType: "PHRASE" },
      { text: "advogado inss sao jose dos campos", matchType: "PHRASE" },
      { text: "advogado aposentadoria sao jose dos campos", matchType: "PHRASE" },
      { text: "advogado aposentadoria s\u00e3o jos\u00e9 dos campos", matchType: "PHRASE" }
    ]
  }
];

const HEADLINES = [
  "Planeje Sua Aposentadoria",
  "Consulta Para Aposentadoria",
  "Tempo de Contribui\u00e7\u00e3o",
  "Advogado Previdenci\u00e1rio",
  "Aposentadoria Pelo INSS",
  "Consulta Particular INSS",
  "Quando Se Aposentar",
  "Planejamento Previdenci\u00e1rio",
  "Atendimento em Jacare\u00ed",
  "S\u00e3o Jos\u00e9 dos Campos",
  "Hist\u00f3rico de Trabalho",
  "Documentos do INSS",
  "Agendamento Profissional",
  "Pr\u00f3ximo da Aposentadoria",
  "Direito Previdenci\u00e1rio"
];

const DESCRIPTIONS = [
  "Consulta particular para planejar aposentadoria e avaliar tempo de contribui\u00e7\u00e3o.",
  "An\u00e1lise do hist\u00f3rico de trabalho, v\u00ednculos e documentos do INSS.",
  "Atendimento mediante agendamento para quem est\u00e1 pr\u00f3ximo de se aposentar.",
  "Planejamento previdenci\u00e1rio em Jacare\u00ed, S\u00e3o Jos\u00e9 dos Campos e online."
];

const NEGATIVE_KEYWORDS = [
  { text: "gr\u00e1tis", matchType: "BROAD" },
  { text: "gratis", matchType: "BROAD" },
  { text: "gratuito", matchType: "BROAD" },
  { text: "gratuita", matchType: "BROAD" },
  { text: "simulador", matchType: "BROAD" },
  { text: "calculadora gr\u00e1tis", matchType: "PHRASE" },
  { text: "calculadora gratis", matchType: "PHRASE" },
  { text: "calculadora gratuita", matchType: "PHRASE" },
  { text: "meu inss", matchType: "PHRASE" },
  { text: "telefone do inss", matchType: "PHRASE" },
  { text: "telefone inss", matchType: "PHRASE" },
  { text: "ag\u00eancia inss", matchType: "PHRASE" },
  { text: "agencia inss", matchType: "PHRASE" },
  { text: "gov.br", matchType: "BROAD" },
  { text: "curso", matchType: "BROAD" },
  { text: "concurso", matchType: "BROAD" },
  { text: "pdf", matchType: "BROAD" },
  { text: "modelo", matchType: "BROAD" },
  { text: "vagas", matchType: "BROAD" },
  { text: "sal\u00e1rio", matchType: "BROAD" },
  { text: "salario", matchType: "BROAD" },
  { text: "apostila", matchType: "BROAD" },
  { text: "faculdade", matchType: "BROAD" },
  { text: "est\u00e1gio", matchType: "BROAD" },
  { text: "estagio", matchType: "BROAD" },
  { text: "emprego", matchType: "BROAD" },
  { text: "bpc", matchType: "BROAD" },
  { text: "loas", matchType: "BROAD" },
  { text: "aux\u00edlio doen\u00e7a", matchType: "PHRASE" },
  { text: "auxilio doenca", matchType: "PHRASE" },
  { text: "pens\u00e3o por morte", matchType: "PHRASE" },
  { text: "pensao por morte", matchType: "PHRASE" },
  { text: "per\u00edcia m\u00e9dica inss", matchType: "PHRASE" },
  { text: "pericia medica inss", matchType: "PHRASE" },
  { text: "revis\u00e3o da vida toda", matchType: "PHRASE" },
  { text: "revisao da vida toda", matchType: "PHRASE" }
];

let tempId = -1;

function main() {
  pauseOldCampaigns();

  const existing = findCampaignByName(CAMPAIGN_NAME);
  if (existing) {
    refreshExistingCampaign(existing);
    return;
  }

  createCampaignV2();
}

function createCampaignV2() {
  const customerId = getCustomerId();
  const operations = [];
  const budgetResource = resource("campaignBudgets", nextTempId());
  const campaignResource = resource("campaigns", nextTempId());

  operations.push({
    campaignBudgetOperation: {
      create: {
        resourceName: budgetResource,
        name: CAMPAIGN_NAME + " - budget",
        amountMicros: String(DAILY_BUDGET * 1000000),
        deliveryMethod: "STANDARD",
        explicitlyShared: false
      }
    }
  });

  operations.push({
    campaignOperation: {
      create: {
        resourceName: campaignResource,
        name: CAMPAIGN_NAME,
        status: "PAUSED",
        advertisingChannelType: "SEARCH",
        campaignBudget: budgetResource,
        biddingStrategyType: "MANUAL_CPC",
        manualCpc: {
          enhancedCpcEnabled: true
        },
        networkSettings: {
          targetGoogleSearch: true,
          targetSearchNetwork: false,
          targetContentNetwork: false,
          targetPartnerSearchNetwork: false
        },
        geoTargetTypeSetting: {
          positiveGeoTargetType: "PRESENCE",
          negativeGeoTargetType: "PRESENCE_OR_INTEREST"
        },
        containsEuPoliticalAdvertising: "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING"
      }
    }
  });

  TARGET_LOCATION_IDS.forEach(function(locationId) {
    operations.push({
      campaignCriterionOperation: {
        create: {
          campaign: campaignResource,
          location: {
            geoTargetConstant: "geoTargetConstants/" + locationId
          }
        }
      }
    });
  });

  NEGATIVE_KEYWORDS.forEach(function(keyword) {
    operations.push({
      campaignCriterionOperation: {
        create: {
          campaign: campaignResource,
          negative: true,
          keyword: {
            text: keyword.text,
            matchType: keyword.matchType
          }
        }
      }
    });
  });

  AD_GROUPS.forEach(function(group) {
    const adGroupResource = resource("adGroups", nextTempId());
    operations.push({
      adGroupOperation: {
        create: {
          resourceName: adGroupResource,
          name: group.name,
          campaign: campaignResource,
          status: "ENABLED",
          type: "SEARCH_STANDARD",
          cpcBidMicros: String(group.cpcMicros)
        }
      }
    });

    group.keywords.forEach(function(keyword) {
      operations.push({
        adGroupCriterionOperation: {
          create: {
            adGroup: adGroupResource,
            status: "ENABLED",
            finalUrls: [FINAL_URL],
            keyword: {
              text: keyword.text,
              matchType: keyword.matchType
            }
          }
        }
      });
    });

    EXCLUDED_AGE_RANGES.forEach(function(ageRange) {
      operations.push({
        adGroupCriterionOperation: {
          create: {
            adGroup: adGroupResource,
            negative: true,
            ageRange: {
              type: ageRange
            }
          }
        }
      });
    });

    operations.push({
      adGroupAdOperation: {
        create: {
          adGroup: adGroupResource,
          status: "ENABLED",
          ad: {
            finalUrls: [FINAL_URL],
            responsiveSearchAd: {
              headlines: HEADLINES.map(function(text) {
                return { text: text };
              }),
              descriptions: DESCRIPTIONS.map(function(text) {
                return { text: text };
              }),
              path1: "aposentadoria",
              path2: "inss"
            }
          }
        }
      }
    });
  });

  AdsApp.mutateAll(operations, {
    apiVersion: API_VERSION,
    partialFailure: false
  });
  Logger.log("Campanha v2 criada pausada: " + CAMPAIGN_NAME);
  Logger.log("Or\u00e7amento: R$ " + DAILY_BUDGET + "/dia. Execute revis\u00e3o final antes de ativar.");
}

function refreshExistingCampaign(campaign) {
  campaign.pause();
  campaign.getBudget().setAmount(DAILY_BUDGET);
  setLocations(campaign);
  upsertCampaignNegatives(campaign);
  upsertAdGroups(campaign);
  applyAgeFilter(campaign);
  campaign.pause();
  Logger.log("Campanha v2 existente revisada e mantida pausada: " + campaign.getName());
}

function pauseOldCampaigns() {
  OLD_CAMPAIGN_NAMES.forEach(function(name) {
    const campaign = findCampaignByName(name);
    if (campaign && campaign.getName() !== CAMPAIGN_NAME) {
      campaign.pause();
      Logger.log("Campanha antiga pausada/preservada: " + campaign.getName());
    }
  });
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

function upsertAdGroups(campaign) {
  const allowed = {};
  AD_GROUPS.forEach(function(group) {
    allowed[group.name] = true;
    const adGroup = getOrCreateAdGroup(campaign, group.name, group.cpcMicros);
    addKeywords(adGroup, group.keywords);
    addResponsiveSearchAdIfMissing(adGroup);
  });

  const iterator = campaign.adGroups().get();
  while (iterator.hasNext()) {
    const adGroup = iterator.next();
    if (!allowed[adGroup.getName()]) {
      adGroup.pause();
      Logger.log("Grupo fora da v2 pausado: " + adGroup.getName());
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

  mutateAllSafely(operations, "exclus\u00f5es de idade 55+");
}

function getExistingAgeCriteria(campaignId) {
  const criteria = {};
  const query =
    "SELECT ad_group.id, ad_group_criterion.age_range.type, " +
    "ad_group_criterion.negative, ad_group_criterion.status " +
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

function resource(collection, id) {
  return "customers/" + getCustomerId() + "/" + collection + "/" + id;
}

function getCustomerId() {
  return AdsApp.currentAccount().getCustomerId().replace(/-/g, "");
}

function nextTempId() {
  return tempId--;
}
