# Execução Google Ads - Campanha Pausada

## Ordem Recomendada

1. Concluir o faturamento da conta Google Ads.
2. Criar as conversões de site para WhatsApp e telefone.
3. Copiar o ID da tag (`AW-XXXXXXXXXX`) e os rótulos das conversões.
4. Preencher `assets/google-ads-config.js` com os dados reais.
5. Publicar a atualização da landing.
6. Criar a campanha v2 de Pesquisa em modo pausado.
7. Revisar localização, orçamento, anúncios, palavras-chave e negativas.
8. Ativar somente depois da revisão final.

## Conversões

- `Clique WhatsApp - Landing Page`: conversão principal para cliques em todos os botões de WhatsApp.
- `Clique Telefone - Landing Page`: conversão secundária ou de observação para o link `tel:+5512981042299`.
- `Chamada do anúncio`: conversão de chamada com duração mínima relevante.
- `Lead qualificado - Importação manual`: usar depois que houver controle semanal de contatos e qualidade.

## Configuração Da Campanha

- Nome: `INSS Planejamento Aposentadoria 55+ v2`
- Tipo: Pesquisa
- Status inicial: pausada
- Orçamento: `R$ 10/dia`
- Redes: somente Pesquisa Google
- Display: desativado
- Performance Max: não usar no primeiro teste
- Localização: presença em Jacareí e São José dos Campos
- Idade: 55-64 e 65+ inicialmente; liberar `Desconhecida` após 48h se a entrega for muito baixa
- URL final: `https://thguedes-oss.github.io/anuncio-adv-previdenciario/`

## Revisão Antes De Ativar

- Conferir se a campanha está pausada.
- Conferir se a URL abre corretamente.
- Conferir se a localização está por presença na região.
- Conferir se negativas foram aplicadas.
- Conferir se os anúncios não usam promessa, gratuidade, comparação, preço ou urgência artificial.
- Conferir se o Perfil da Empresa está vinculado quando possível.
- Conferir se a campanha antiga ficou pausada e preservada.
