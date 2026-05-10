# Google Ads Previdenciario - Thiago Tomizawa

Landing page e pacote operacional para a campanha inicial de Google Ads do escritorio, com foco em planejamento previdenciario, contagem de tempo de contribuicao e consulta mediante agendamento.

## O que esta pronto

- `index.html`: landing page estatica pronta para GitHub Pages.
- `assets/styles.css`: visual responsivo para desktop e celular.
- `assets/site.js`: link de WhatsApp com mensagem de triagem e eventos basicos para medicao.
- `ads/`: plano de campanha, anuncios, palavras-chave e negativas.
- `docs/`: roteiro de WhatsApp Business, publicacao no GitHub Pages, compliance e relatorio semanal.
- `.github/workflows/pages.yml`: workflow para publicar pelo GitHub Pages via Actions.

## Antes de anunciar

1. Confirme se o WhatsApp correto esta configurado em `assets/site.js`.
2. Suba o projeto para um repositorio GitHub.
3. Ative GitHub Pages usando GitHub Actions.
4. Configure conversoes no Google Ads para cliques em WhatsApp e telefone.
5. Vincule o Perfil da Empresa ao Google Ads, se a conta tiver acesso ao perfil.

## Teste local

Abra `index.html` no navegador ou rode um servidor local simples na pasta do projeto:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.
