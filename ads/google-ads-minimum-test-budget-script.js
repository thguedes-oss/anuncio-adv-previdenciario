// LEGADO: este ajuste era da campanha v1. Para a v2, use
// `ads/google-ads-v2-rebuild-script.js`.

const CAMPAIGN_NAME = "INSS Planejamento Jacarei SJC";
const TEST_DAILY_BUDGET = 10;

function main() {
  const iterator = AdsApp.campaigns()
    .withCondition('campaign.name = "' + CAMPAIGN_NAME.replace(/"/g, '\\"') + '"')
    .get();

  if (!iterator.hasNext()) {
    throw new Error("Campanha n\u00e3o encontrada: " + CAMPAIGN_NAME);
  }

  const campaign = iterator.next();
  campaign.pause();
  campaign.getBudget().setAmount(TEST_DAILY_BUDGET);
  campaign.pause();

  Logger.log("Or\u00e7amento de teste aplicado: R$ " + TEST_DAILY_BUDGET + "/dia.");
  Logger.log("Campanha mantida pausada: " + campaign.getName());
}
