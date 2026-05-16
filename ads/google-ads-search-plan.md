# Plano Google Ads - V3 Revisada

## Configuração

- Campanha: `INSS Diagnostico Aposentadoria Jacarei SJC v3`
- Tipo: Rede de Pesquisa
- Redes: somente Pesquisa Google; sem Display, sem parceiros e sem Performance Max
- Orçamento: `R$ 20/dia` por 10 dias ou até cerca de `R$ 200`
- Localização: presença em Jacareí e São José dos Campos
- Idade: excluir abaixo de 55; manter `55-64`, `65+` e `Desconhecida`
- Lance inicial: maximizar cliques com controle conservador e revisão em 24-48h
- URL final: landing publicada com UTMs e ValueTrack

## Estrutura

1. `Quando posso me aposentar`
2. `Valor da aposentadoria`
3. `Melhor beneficio`
4. `Advogado aposentadoria local`

## Perfil buscado

- Pessoa 55+ ou idade desconhecida pelo Google, próxima da aposentadoria.
- Quer saber quando se aposentar, valor aproximado ou melhor benefício possível.
- Aceita atendimento por WhatsApp para agendar consulta.
- Não está procurando atendimento gratuito, telefone do INSS, curso, PDF ou benefício fora do foco.

## Anúncios

- Linguagem leiga e seletiva: `quando posso me aposentar`, `valor aproximado`, `melhor benefício`, `tempo de contribuição` e `planejamento de aposentadoria`.
- Não mencionar preço, gratuidade, desconto, promessa de concessão, aumento de benefício ou comparação profissional.
- Caminhos sugeridos: `aposentadoria` e `planejamento`.

## Rotina de leitura

- 24h: verificar impressões, status das palavras-chave, orçamento, cliques e avisos de lance.
- 48h: se quase não houver entrega, corrigir status/lance/aprovação antes de mexer em público ou região.
- Diariamente: revisar termos pesquisados e adicionar negativas óbvias.
- 10 dias: decidir por pausar, manter, ajustar ou escalar com base em atendimentos, consultas marcadas e consultas pagas.

## Script

- `ads/google-ads-v3-qualified-rebuild-script.js`: revisa a v3, pausa campanhas candidatas antigas, aplica grupos/palavras/negativas, mantém idade `Desconhecida` aberta e ativa somente a v3 com `R$ 20/dia`.
