# Indique API

## Overview
A função dessa API é criar os cupons de indicação e relacionar os indicados a fim de aplicar os descontos cabíveis

### Cupons
`[POST] /create`

```json
{
  "nome": "Fulano Ciclano Beltrano da Silva",
  "doc": "55245626225",
  "tel": "34999999999"
}
```
---

`[GET] /get/:id`

O id é o uuid que identifica o cupom

---

### Referal
`[POST] /create`

```json
{
  "fields": {
    "coupon": {
      "value": "CD89EB69-3025-ED11-810A-00155DA2A8E8"
    },
    "nomei": {
      "value": "Fulano Ciclano Beltrano da Silva"
    },
    "tel1i": {
      "value": "34999999999"
    },
    "tel2i": {
      "value": "34555555555"
    }
  }
}
```