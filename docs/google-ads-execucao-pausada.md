# Execução Google Ads - Revisão E Ativação V3

## Ordem Recomendada

1. Concluir o faturamento da conta Google Ads.
2. Criar as conversões de site para atendimento enviado, WhatsApp e telefone.
3. Copiar o ID da tag (`AW-XXXXXXXXXX`) e os rótulos das conversões.
4. Preencher `assets/google-ads-config.js` com os dados reais.
5. Publicar a atualização da landing.
6. Revisar a campanha v3 de Pesquisa.
7. Confirmar localização, orçamento, anúncios, palavras-chave, idade e negativas.
8. Ativar somente a v3 com `R$ 20/dia`.

## Conversões

- `Atendimento enviado - Planejamento de Aposentadoria`: conversão principal da landing.
- `Clique WhatsApp - Landing Page`: conversão secundária para saída ao WhatsApp.
- `Clique Telefone - Landing Page`: conversão secundária para o link `tel:+5512981042299`.
- `Chamada do anúncio`: conversão de chamada com duração mínima relevante.
- `Lead qualificado - Importação manual`: usar depois que houver controle semanal de contatos e qualidade.

## Configuração Da Campanha

- Nome: `INSS Diagnostico Aposentadoria Jacarei SJC v3`
- Tipo: Pesquisa
- Status: ativa no teste
- Orçamento: `R$ 20/dia`
- Redes: somente Pesquisa Google
- Display: desativado
- Performance Max: não usar no primeiro teste
- Localização: presença em Jacareí e São José dos Campos
- Idade: excluir abaixo de 55; manter 55-64, 65+ e Desconhecida
- URL final: landing publicada com UTMs

## Revisão Após Ativar

- Conferir se a campanha v3 está ativa e as antigas pausadas.
- Conferir se a URL abre corretamente.
- Conferir se o formulário abre o WhatsApp com mensagem estruturada.
- Conferir se a localização está por presença na região.
- Conferir se negativas foram aplicadas e se não existe `salário/salario` como negativa ampla.
- Conferir se os anúncios não usam promessa, gratuidade, comparação, preço ou urgência artificial.
- Conferir se o Perfil da Empresa está vinculado quando possível.
