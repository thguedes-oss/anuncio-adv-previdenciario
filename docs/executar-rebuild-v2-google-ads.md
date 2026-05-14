# Executar Rebuild V2 No Google Ads

## Script principal

1. Abra Google Ads.
2. Vá em `Ferramentas > Ações em massa > Scripts`.
3. Crie um novo script chamado `REBUILD INSS APOSENTADORIA V2`.
4. Cole o conteúdo de `ads/google-ads-v2-rebuild-script.js`.
5. Clique primeiro em `Visualizar`.
6. Revise se a prévia mostra:
   - campanha antiga pausada;
   - campanha `INSS Planejamento Aposentadoria 55+ v2` criada pausada;
   - orçamento de `R$ 10/dia`;
   - Rede de Pesquisa;
   - locais Jacareí e São José dos Campos;
   - palavras e anúncios sem preço, promessa, gratuidade ou comparação.
7. Execute apenas se a prévia estiver coerente.

## Depois da execução

- A v2 deve ficar pausada para revisão final.
- Ative manualmente somente após conferir anúncios, palavras, orçamento, localização, idade e conversões.
- O teste deve rodar por 7 dias ou até cerca de `R$ 70`.

## Fallback de 48h

Se a v2 tiver entrega muito baixa após 48h:

1. Crie ou edite um script chamado `FALLBACK IDADE DESCONHECIDA V2`.
2. Cole o conteúdo de `ads/google-ads-v2-activate-unknown-age-script.js`.
3. Rode primeiro em `Visualizar`.
4. Execute somente se a prévia remover a exclusão de `Idade Desconhecida` da campanha v2.
