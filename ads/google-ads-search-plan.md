# Plano Google Ads - Rebuild V2

## Configuração

- Campanha nova: `INSS Planejamento Aposentadoria 55+ v2`
- Campanha antiga: pausar e preservar histórico, sem renomear
- Tipo: Rede de Pesquisa
- Redes: somente Pesquisa Google; sem Display e sem Performance Max
- Orçamento: `R$ 10/dia` por 7 dias ou até cerca de `R$ 70`
- Localização: presença em Jacareí e São José dos Campos
- Idade inicial: 55-64 e 65+, excluindo abaixo de 55 e Desconhecida
- Fallback: se houver entrega muito baixa em 48h, liberar idade Desconhecida
- Lance inicial: CPC manual conservador com ECPC, revisando avisos de lance/primeira página
- URL final: `https://thguedes-oss.github.io/anuncio-adv-previdenciario/`

## Estrutura

1. `Planejar aposentadoria`
2. `Quando aposentar`
3. `Advogado aposentadoria local`

## Perfil buscado

- Pessoa próxima da aposentadoria, em regra 55+.
- Quer saber quando se aposentar, quanto tempo falta ou como preparar o pedido.
- Aceita consulta particular mediante agendamento e organização documental.
- Não está procurando simulador, telefone do INSS, serviço gratuito, curso ou PDF.

## Anúncios

- Linguagem leiga e seletiva: `planejar aposentadoria`, `quando se aposentar`, `tempo de contribuição`, `documentos do INSS`, `consulta particular`.
- Não mencionar preço, gratuidade, desconto, promessa de concessão ou comparação profissional.
- Caminhos sugeridos: `aposentadoria` e `inss`.

## Rotina de leitura

- 24h: verificar impressões, status das palavras-chave, orçamento, cliques e avisos de lance.
- 48h: se quase não houver entrega, executar o script de fallback para liberar idade Desconhecida.
- Diariamente: revisar termos pesquisados e adicionar negativas óbvias.
- 7 dias: decidir por pausar, manter, ajustar ou reconstruir com base em termos reais, contatos e leads qualificados.

## Scripts

- `ads/google-ads-v2-rebuild-script.js`: cria a campanha v2 pausada e pausa a campanha antiga.
- `ads/google-ads-v2-activate-unknown-age-script.js`: remove a exclusão da idade Desconhecida se a v2 não entregar.
