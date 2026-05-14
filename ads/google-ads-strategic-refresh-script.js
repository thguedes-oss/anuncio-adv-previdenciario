// LEGADO: use `ads/google-ads-v3-qualified-rebuild-script.js` para a campanha atual.
// Este arquivo fica preservado apenas como histórico da primeira estrutura.

const OLD_CAMPAIGN_NAME = "[S] - Leads - Previdenciario";
const OLD_CAMPAIGN_NAME_ACCENTED = "[S] - Leads - Previdenci\u00e1rio";
const CAMPAIGN_NAME = "INSS Planejamento Jacarei SJC";
const FINAL_URL = "https://thguedes-oss.github.io/anuncio-adv-previdenciario/";
const DAILY_BUDGET = 10;
const API_VERSION = "v24";

const TARGET_LOCATION_IDS = [
  1031741, // Jacarei, State of Sao Paulo, Brazil
  1001772  // Sao Jose dos Campos, State of Sao Paulo, Brazil
];

const HEADLINES = [
  "Planejamento de Aposentadoria",
  "Contagem de Tempo INSS",
  "Consulta Previdenci\u00e1ria",
  "Consulta Particular INSS",
  "Tempo de Contribui\u00e7\u00e3o",
  "Consulta Para Aposentadoria",
  "Atendimento em Jacare\u00ed",
  "S\u00e3o Jos\u00e9 dos Campos",
  "Consulta Com Agendamento",
  "Perto de Se Aposentar",
  "Momento de Aposentar",
  "Organize Documentos",
  "Hist\u00f3rico de Trabalho",
  "Possibilidades De Benef\u00edcio",
  "Direito Previdenci\u00e1rio"
];

const DESCRIPTIONS = [
  "Consulta particular para avaliar v\u00ednculos, documentos e tempo antes do pedido ao INSS.",
  "Planejamento para estimar o momento adequado e possibilidades de benef\u00edcio.",
  "Atendimento mediante agendamento, com documentos organizados para an\u00e1lise.",
  "Foco em trabalhador pr\u00f3ximo da aposentadoria e hist\u00f3rico de trabalho."
];

const EXCLUDED_AGE_RANGES = [
  "AGE_RANGE_18_24",
  "AGE_RANGE_25_34",
  "AGE_RANGE_35_44",
  "AGE_RANGE_45_54",
  "AGE_RANGE_UNDETERMINED"
];

const ALLOWED_AGE_RANGES = [
  "AGE_RANGE_55_64",
  "AGE_RANGE_65_UP"
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
      '"consulta previdenciaria aposentadoria"',
      '[consulta previdenciaria aposentadoria]',
      '"consulta de planejamento previdenciario"',
      '[consulta de planejamento previdenciario]',
      '"consulta particular aposentadoria"',
      '[consulta particular aposentadoria]',
      '"planejamento aposentadoria advogado"',
      '[planejamento aposentadoria advogado]',
      '"consulta para aposentadoria"',
      '[consulta para aposentadoria]',
      '"planejar aposentadoria inss"',
      '[planejar aposentadoria inss]'
    ]
  },
  {
    name: "Contagem de tempo INSS",
    keywords: [
      '"contagem de tempo inss"',
      '[contagem de tempo inss]',
      '"contagem de tempo inss advogado"',
      '[contagem de tempo inss advogado]',
      '"tempo de contribui\u00e7\u00e3o para aposentadoria"',
      '"tempo de contribuicao para aposentadoria"',
      '"aposentadoria tempo de contribui\u00e7\u00e3o"',
      '[aposentadoria tempo de contribui\u00e7\u00e3o]',
      '"aposentadoria tempo de contribuicao"',
      '[aposentadoria tempo de contribuicao]'
    ]
  },
  {
    name: "Prazo para aposentadoria",
    keywords: [
      '"quanto falta para aposentar"',
      '[quanto falta para aposentar]',
      '"quanto tempo falta para aposentar"',
      '[quanto tempo falta para aposentar]',
      '"melhor momento para aposentar"',
      '[melhor momento para aposentar]',
      '"melhor momento para aposentadoria"',
      '[melhor momento para aposentadoria]',
      '"quando pedir aposentadoria inss"',
      '[quando pedir aposentadoria inss]',
      '"planejar pedido de aposentadoria"',
      '[planejar pedido de aposentadoria]',
      '"saber quando aposentar"',
      '[saber quando aposentar]'
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
      '"advogado planejamento aposentadoria jacarei"',
      '[advogado planejamento aposentadoria jacarei]',
      '"consulta previdenciaria jacarei"',
      '[consulta previdenciaria jacarei]',
      '"advogado previdenciario sao jose dos campos"',
      '[advogado previdenciario sao jose dos campos]',
      '"advogado previdenci\u00e1rio s\u00e3o jos\u00e9 dos campos"',
      '"advogado aposentadoria sao jose dos campos"',
      '[advogado aposentadoria sao jose dos campos]',
      '"advogado planejamento aposentadoria sao jose dos campos"',
      '[advogado planejamento aposentadoria sao jose dos campos]',
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
  applyAgeFilter(campaign);
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

function applyAgeFilter(campaign) {
  const adGroups = [];
  const adGroupIterator = campaign.adGroups().get();
  while (adGroupIterator.hasNext()) {
    adGroups.push(adGroupIterator.next());
  }

  const existing = getExistingAgeCriteria(campaign.getId());
  const removeOperations = [];
  const createOperations = [];
  const customerId = AdsApp.currentAccount().getCustomerId().replace(/-/g, "");

  adGroups.forEach(function(adGroup) {
    const adGroupId = String(adGroup.getId());
    const criteria = existing[adGroupId] || {};

    Object.keys(criteria).forEach(function(ageRange) {
      criteria[ageRange].forEach(function(criterion) {
        if (criterion.status === "REMOVED") {
          return;
        }
        if (isExcludedAge(ageRange) && !criterion.negative) {
          removeOperations.push({
            adGroupCriterionOperation: {
              remove: criterion.resourceName
            }
          });
          Logger.log("Faixa et\u00e1ria positiva removida para exclus\u00e3o em " + adGroup.getName() + ": " + ageRange);
        }
        if (isAllowedAge(ageRange) && criterion.negative) {
          removeOperations.push({
            adGroupCriterionOperation: {
              remove: criterion.resourceName
            }
          });
          Logger.log("Exclus\u00e3o removida de faixa 55+ em " + adGroup.getName() + ": " + ageRange);
        }
      });
    });

    EXCLUDED_AGE_RANGES.forEach(function(ageRange) {
      if (hasNegativeAge(criteria, ageRange)) {
        return;
      }
      createOperations.push({
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
      Logger.log("Exclus\u00e3o demogr\u00e1fica 55+ preparada em " + adGroup.getName() + ": " + ageRange);
    });
  });

  mutateAllSafely(removeOperations, "remo\u00e7\u00f5es de idade");
  mutateAllSafely(createOperations, "exclus\u00f5es de idade");
  Logger.log("Filtro demogr\u00e1fico aplicado: manter 55-64 e 65+, excluir faixas abaixo de 55 e desconhecida.");
}

function getExistingAgeCriteria(campaignId) {
  const criteria = {};
  const query =
    "SELECT ad_group.id, ad_group.name, ad_group_criterion.resource_name, " +
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

function isExcludedAge(ageRange) {
  return EXCLUDED_AGE_RANGES.indexOf(ageRange) !== -1;
}

function isAllowedAge(ageRange) {
  return ALLOWED_AGE_RANGES.indexOf(ageRange) !== -1;
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
