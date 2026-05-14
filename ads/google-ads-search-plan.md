# Plano Google Ads - Rebuild Qualificado V3

## Configuração

- Campanha nova: `INSS Diagnostico Aposentadoria Jacarei SJC v3`
- Campanhas antigas: pausar e preservar histórico, sem renomear
- Tipo: Rede de Pesquisa
- Redes: somente Pesquisa Google; sem Display, sem parceiros e sem Performance Max
- Orçamento: `R$ 20/dia` por 10 dias ou até cerca de `R$ 200`
- Localização: presença em Jacareí e São José dos Campos
- Idade: excluir abaixo de 55; manter `55-64`, `65+` e `Desconhecida`
- Lance inicial: CPC manual com ECPC e lances suficientes para sair do quase zero
- URL final: landing publicada com UTMs e ValueTrack

## Estrutura

1. `Consulta aposentadoria`
2. `Quando se aposentar`
3. `Tempo de contribuicao`
4. `Advogado aposentadoria local`

## Perfil buscado

- Pessoa 55+ ou idade desconhecida pelo Google, próxima da aposentadoria.
- Quer consulta particular para saber quando pedir aposentadoria e organizar documentos.
- Aceita uma mini triagem antes do WhatsApp.
- Não está procurando atendimento gratuito, telefone do INSS, curso, PDF ou benefício fora do foco.

## Anúncios

- Linguagem leiga e seletiva: `diagnóstico de aposentadoria`, `quando se aposentar`, `tempo de contribuição`, `documentos do INSS`, `consulta particular`.
- Não mencionar preço, gratuidade, desconto, promessa de concessão, aumento de benefício ou comparação profissional.
- Caminhos sugeridos: `aposentadoria` e `diagnostico`.

## Rotina de leitura

- 24h: verificar impressões, status das palavras-chave, orçamento, cliques e avisos de lance.
- 48h: se quase não houver entrega, corrigir lance/status antes de ampliar região.
- Diariamente: revisar termos pesquisados e adicionar negativas óbvias.
- 10 dias: decidir por pausar, manter, ajustar ou escalar com base em termos reais, triagens, consultas marcadas e consultas pagas.

## Scripts

- `ads/google-ads-v3-qualified-rebuild-script.js`: cria a campanha v3 pausada, pausa campanhas antigas e mantém idade `Desconhecida` aberta.
- Scripts v2 permanecem no repositório apenas como histórico.
