// LEGADO: a v3 atual já mantém idade Desconhecida aberta por padrão.

const CAMPAIGN_NAME = "INSS Planejamento Aposentadoria 55+ v2";
const API_VERSION = "v24";

function main() {
  const campaign = findCampaignByName(CAMPAIGN_NAME);
  if (!campaign) {
    throw new Error("Campanha v2 n\u00e3o encontrada: " + CAMPAIGN_NAME);
  }

  const operations = [];
  const query =
    "SELECT ad_group_criterion.resource_name, ad_group_criterion.age_range.type, " +
    "ad_group_criterion.negative, ad_group_criterion.status " +
    "FROM ad_group_criterion " +
    "WHERE campaign.id = " + campaign.getId() + " " +
    "AND ad_group_criterion.type = AGE_RANGE " +
    "AND ad_group_criterion.age_range.type = AGE_RANGE_UNDETERMINED";

  const rows = AdsApp.search(query, { apiVersion: API_VERSION });
  while (rows.hasNext()) {
    const row = rows.next();
    const criterion = row.adGroupCriterion;
    if (criterion.negative && criterion.status !== "REMOVED") {
      operations.push({
        adGroupCriterionOperation: {
          remove: criterion.resourceName
        }
      });
    }
  }

  if (!operations.length) {
    Logger.log("Sem exclus\u00e3o de idade Desconhecida para remover.");
    return;
  }

  AdsApp.mutateAll(operations, {
    apiVersion: API_VERSION,
    partialFailure: false
  });
  Logger.log("Idade Desconhecida liberada na campanha v2. Opera\u00e7\u00f5es: " + operations.length);
}

function findCampaignByName(name) {
  const escaped = name.replace(/"/g, '\\"');
  const iterator = AdsApp.campaigns()
    .withCondition('campaign.name = "' + escaped + '"')
    .get();
  return iterator.hasNext() ? iterator.next() : null;
}
