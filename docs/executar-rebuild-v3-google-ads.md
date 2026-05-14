# Executar Rebuild V3 No Google Ads

## Script principal

1. Abra Google Ads.
2. Vá em `Ferramentas > Ações em massa > Scripts`.
3. Crie um novo script chamado `REBUILD INSS DIAGNOSTICO APOSENTADORIA V3`.
4. Cole o conteúdo de `ads/google-ads-v3-qualified-rebuild-script.js`.
5. Clique primeiro em `Visualizar`.
6. Revise se a prévia mostra:
   - campanhas antigas pausadas;
   - campanha `INSS Diagnostico Aposentadoria Jacarei SJC v3` criada pausada;
   - orçamento de `R$ 20/dia`;
   - Rede de Pesquisa, sem Display, sem parceiros e sem Performance Max;
   - locais Jacareí e São José dos Campos;
   - idade abaixo de 55 excluída, mantendo `55-64`, `65+` e `Desconhecida`;
   - palavras em correspondência de frase/exata, sem ampla;
   - negativas sem `simulador` amplo;
   - anúncios sem preço, promessa, gratuidade ou comparação.
7. Execute apenas se a prévia estiver coerente.

## Depois da execução

- A v3 deve ficar pausada para revisão final.
- Ative manualmente somente após conferir anúncios, palavras, orçamento, localização, idade e conversões.
- O teste deve rodar por 10 dias ou até cerca de `R$ 200`.

## Conversão principal

Crie ou confirme a conversão `Triagem enviada - Planejamento Aposentadoria`.
Depois, copie o rótulo dela para `assets/google-ads-config.js` no campo `triage`.

Enquanto o rótulo estiver vazio, a mini triagem abre o WhatsApp normalmente, mas não dispara essa conversão específica no Google Ads.
