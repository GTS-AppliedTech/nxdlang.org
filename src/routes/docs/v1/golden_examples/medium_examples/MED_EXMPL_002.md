---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME002",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME002: CONCURRANCY PIPELINE (PRODUCER -> WORKER -> SINK)

### NXD
```nxd
MODULE pipeline.concurrent

TYPE CHANNEL<int> { }

FUNC PRODUCER(CH):
    LOOP I FROM 1 TO 5:
        SEND I TO CH
    RETURN NONE

FUNC WORKER(IN, OUT):
    LOOP:
        LET V SET RECV IN
        LET R SET V MUL 2
        SEND R TO OUT
    RETURN NONE

FUNC SINK(CH):
    LOOP J FROM 1 TO 5:
        LET V SET RECV CH
        PRINTLN(V)
    RETURN NONE

FUNC MAIN():
    LET C1 SET CHANNEL<int>()
    LET C2 SET CHANNEL<int>()

    SPAWN PRODUCER(C1)
    SPAWN WORKER(C1, C2)
    SPAWN SINK(C2)

    RETURN NONE
```