# Google Ads Previdenciário - Thiago Tomizawa

Landing page e pacote operacional para a campanha de Google Ads do escritório, com foco em planejamento de aposentadoria, tempo de contribuição e consulta mediante agendamento.

URL publicada: https://thguedes-oss.github.io/anuncio-adv-previdenciario/

## O Que Está Pronto

- `index.html`: landing page estática pronta para GitHub Pages.
- `assets/styles.css`: visual responsivo para desktop e celular.
- `assets/site.js`: link de WhatsApp com mensagem de triagem e eventos básicos para medição.
- `assets/google-ads-config.js`: configuração segura para inserir o ID e os rótulos reais de conversão.
- `ads/`: plano de campanha, anúncios, palavras-chave, negativas e scripts de rebuild v2.
- `docs/`: roteiro de WhatsApp Business, execução do rebuild v2, publicação no GitHub Pages, compliance e relatório semanal.
- `.github/workflows/pages.yml`: workflow para publicar pelo GitHub Pages via Actions.

## Antes De Anunciar

1. Conclua o faturamento na conta Google Ads.
2. Crie conversões para cliques em WhatsApp e telefone.
3. Preencha `assets/google-ads-config.js` com o `AW-XXXXXXXXXX` e os rótulos reais.
4. Crie a campanha de Pesquisa em modo pausado.
5. Vincule o Perfil da Empresa ao Google Ads, se a conta tiver acesso ao perfil.

## Teste Local

Abra `index.html` no navegador ou rode um servidor local simples na pasta do projeto:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.
