---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "LE009",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Large Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---

# LE009: MULTI-MODULE E-COMMERCE CART (STRUCTS + MAPS + RESULT + TRAITS)

### NXD
```nxd
MODULE cart.core

TYPE ITEM { ID: int, NAME: string, PRICE: int }
TYPE RESULT UNION { OK(any), ERR(string) }

LET CATALOG SET MAP<int, ITEM> {
    1: ITEM { ID: 1, NAME: "mouse", PRICE: 25 },
    2: ITEM { ID: 2, NAME: "keyboard", PRICE: 45 }
}

TYPE CART { ITEMS: LIST<ITEM> }

FUNC ADD(C: CART, ID: int): RESULT:
    IF NOT (CATALOG HAS ID):
        RETURN ERR("missing item")
    PUSH C.ITEMS, CATALOG[ID]
    RETURN OK("added")

FUNC TOTAL(C: CART): int:
    LET SUM SET 0
    LOOP I IN C.ITEMS:
        SUM SET SUM ADD I.PRICE
    RETURN SUM


MODULE app.main
IMPORT cart.core

FUNC MAIN():
    LET C SET CART { ITEMS: [] }

    PRINTLN(ADD(C, 1))
    PRINTLN(ADD(C, 2))
    PRINTLN("total=" ADD TOTAL(C))

    RETURN NONE
```