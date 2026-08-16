---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME007",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME007: RUNTIME + INIT + CYCLIC-SAFE IMPORTS

### NXD
```nxd
MODULE runtime.a
IMPORT runtime.b

INIT:
    PRINTLN("init A")

FUNC A():
    PRINTLN("A called")


MODULE runtime.b

INIT:
    PRINTLN("init B")

FUNC B():
    PRINTLN("B called")


MODULE runtime.main
IMPORT runtime.a
IMPORT runtime.b

INIT:
    PRINTLN("init MAIN")

FUNC MAIN():
    A()
    B()
    RETURN NONE
```