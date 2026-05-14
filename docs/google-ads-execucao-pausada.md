# Execução Google Ads - Campanha Pausada

## Ordem Recomendada

1. Concluir o faturamento da conta Google Ads.
2. Criar as conversões de site para triagem enviada, WhatsApp e telefone.
3. Copiar o ID da tag (`AW-XXXXXXXXXX`) e os rótulos das conversões.
4. Preencher `assets/google-ads-config.js` com os dados reais.
5. Publicar a atualização da landing.
6. Criar a campanha v3 de Pesquisa em modo pausado.
7. Revisar localização, orçamento, anúncios, palavras-chave, idade e negativas.
8. Ativar somente depois da revisão final.

## Conversões

- `Triagem enviada - Planejamento Aposentadoria`: conversão principal da landing.
- `Clique WhatsApp - Landing Page`: conversão secundária para saída ao WhatsApp.
- `Clique Telefone - Landing Page`: conversão secundária para o link `tel:+5512981042299`.
- `Chamada do anúncio`: conversão de chamada com duração mínima relevante.
- `Lead qualificado - Importação manual`: usar depois que houver controle semanal de contatos e qualidade.

## Configuração Da Campanha

- Nome: `INSS Diagnostico Aposentadoria Jacarei SJC v3`
- Tipo: Pesquisa
- Status inicial: pausada
- Orçamento: `R$ 20/dia`
- Redes: somente Pesquisa Google
- Display: desativado
- Performance Max: não usar no primeiro teste
- Localização: presença em Jacareí e São José dos Campos
- Idade: excluir abaixo de 55; manter 55-64, 65+ e Desconhecida
- URL final: landing publicada com UTMs

## Revisão Antes De Ativar

- Conferir se a campanha está pausada.
- Conferir se a URL abre corretamente.
- Conferir se a mini triagem abre o WhatsApp com mensagem estruturada.
- Conferir se a localização está por presença na região.
- Conferir se negativas foram aplicadas e se não existe `simulador` como negativa ampla.
- Conferir se os anúncios não usam promessa, gratuidade, comparação, preço ou urgência artificial.
- Conferir se o Perfil da Empresa está vinculado quando possível.
- Conferir se as campanhas antigas ficaram pausadas e preservadas.
