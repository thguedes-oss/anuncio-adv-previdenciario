# Executar Revisão E Ativação V3 No Google Ads

## Script principal

1. Abra Google Ads.
2. Vá em `Ferramentas > Ações em massa > Scripts`.
3. Use o script `REBUILD INSS DIAGNOSTICO APOSENTADORIA V3`.
4. Cole o conteúdo de `ads/google-ads-v3-qualified-rebuild-script.js`.
5. Clique primeiro em `Visualizar`.
6. Revise se a prévia mostra:
   - campanha `INSS Diagnostico Aposentadoria Jacarei SJC v3`;
   - campanhas candidatas antigas pausadas;
   - orçamento de `R$ 20/dia`;
   - locais Jacareí e São José dos Campos;
   - idade abaixo de 55 excluída, mantendo `55-64`, `65+` e `Desconhecida`;
   - grupos focados em quando aposentar, valor aproximado, melhor benefício e advogado local;
   - negativas contra buscas gratuitas, oficiais, cursos, PDFs, benefícios fora do foco e consignado;
   - anúncios sem preço, promessa, gratuidade ou comparação.
7. Execute apenas se a prévia estiver coerente.

## Depois da execução

- A v3 deve ficar ativa com `R$ 20/dia`.
- As campanhas antigas devem permanecer pausadas.
- O teste deve rodar por 10 dias ou até cerca de `R$ 200`.
- Em 24h, conferir impressões, cliques, reprovações, status das palavras e aviso de lance.

## Conversão principal

Crie ou confirme a conversão `Atendimento enviado - Planejamento de Aposentadoria`.
Depois, copie o rótulo dela para `assets/google-ads-config.js` no campo `triage`.

Enquanto o rótulo estiver vazio, o formulário abre o WhatsApp normalmente e ainda dispara a conversão secundária de WhatsApp.
