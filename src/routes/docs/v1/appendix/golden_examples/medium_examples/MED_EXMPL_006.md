---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME006",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME006: GENERICS + TRAITS: SORTABLE LIST

### NXD
```nxd
MODULE generics.sort

TRAIT ORDERED {
    FUNC COMPARE(A, B): int
}

FUNC SORT<T : ORDERED>(L: LIST<T>): LIST<T>:
    # simple bubble sort for spec purposes
    LET N SET LEN(L)
    LOOP I FROM 0 TO N SUB 1:
        LOOP J FROM 0 TO N SUB 2:
            IF COMPARE(L[J], L[J ADD 1]) GT 0:
                LET TMP SET L[J]
                L[J] SET L[J ADD 1]
                L[J ADD 1] SET TMP
    RETURN L

TYPE NUM IMPLEMENTS ORDERED { V: int }

FUNC COMPARE(A: NUM, B: NUM): int:
    RETURN A.V SUB B.V

FUNC MAIN():
    LET L SET [NUM { V: 3 }, NUM { V: 1 }, NUM { V: 2 }]
    LET S SET SORT(L)
    LOOP X IN S:
        PRINTLN(X.V)
    RETURN NONE
```