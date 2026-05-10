# Configuração Do Google Ads

## Etapa 1 - Faturamento

- Concluir a forma de pagamento na conta Google Ads.
- Não ativar a campanha ainda.
- Manter a primeira campanha em modo pausado até a revisão final.

## Etapa 2 - Conversões

Crie conversões antes da campanha:

- `Clique WhatsApp - Landing Page`
- `Clique Telefone - Landing Page`
- `Chamada do anúncio`
- `Lead qualificado - Importação manual` quando houver controle em planilha ou CRM

No primeiro mês, a principal decisão deve olhar `lead qualificado`, não apenas clique ou conversa iniciada.

Depois de criar as conversões de site, copie o `AW-XXXXXXXXXX` e os rótulos de conversão para `assets/google-ads-config.js`:

```js
window.GOOGLE_ADS_CONFIG = {
  conversionId: "AW-XXXXXXXXXX",
  conversionLabels: {
    whatsapp: "ROTULO_DO_WHATSAPP",
    phone: "ROTULO_DO_TELEFONE"
  }
};
```

Enquanto esses campos estiverem vazios, a landing continua funcionando normalmente, mas sem disparar conversões do Google Ads.

## Etapa 3 - Campanha Pausada

- Criar campanha de Pesquisa.
- Usar somente a Rede de Pesquisa.
- Desativar Display e Performance Max no primeiro teste.
- Definir localização como presença em Jacareí e São José dos Campos.
- Aplicar palavras negativas antes de publicar.
- Criar os quatro grupos de anúncio definidos em `ads/google-ads-search-plan.md`.
- Status inicial: pausada.
- Orçamento inicial para ativação futura: `R$ 25/dia`.

## Etapa 4 - Perfil da Empresa

Vincule o Perfil da Empresa ao Google Ads para usar recursos de local. Isso ajuda a mostrar endereço, mapa e distância quando o anúncio permitir.

## Etapa 5 - Acompanhamento semanal

Toda semana, registrar:

- Gasto
- Cliques
- Termos pesquisados
- Conversas iniciadas
- Leads qualificados
- Leads descartados
- Motivo de descarte
- Ajustes de negativas

## Etapa 6 - Decisão em 30 dias

- Manter: se houver leads qualificados com custo aceitável.
- Ajustar: se houver cliques, mas baixa qualificação.
- Pausar: se os termos estiverem ruins mesmo após negativas.
- Aumentar verba: somente se o custo por lead qualificado justificar.
