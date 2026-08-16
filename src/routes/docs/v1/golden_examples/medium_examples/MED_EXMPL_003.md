---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME003",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME003: OWNERSHIP WITH COLLECTIONS (MOVE, BORROW, CLONE ON LIST)

## NXD
```nxd
MODULE ownership.collections

FUNC MAIN():
    LET L SET [1, 2, 3]

    LET B SET BORROW L
    PRINTLN(B[0])

    LET C SET CLONE L
    C[0] SET 99

    LET D SET MOVE L

    PRINTLN(D[0])
    PRINTLN(D[1])
    PRINTLN(D[2])

    RETURN NONE
```