---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME008",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME008: CHANNELS + TASKS: FAN-OUT / FAN-IN

### NXD
```nxd
MODULE concurrency.fan

TYPE CHANNEL<int> { }

FUNC WORK(ID: int, IN, OUT):
    LOOP:
        LET V SET RECV IN
        LET R SET V MUL ID
        SEND R TO OUT

FUNC MAIN():
    LET IN SET CHANNEL<int>()
    LET OUT SET CHANNEL<int>()

    SPAWN WORK(2, IN, OUT)
    SPAWN WORK(3, IN, OUT)

    LOOP I FROM 1 TO 3:
        SEND I TO IN

    LOOP J FROM 1 TO 6:
        LET V SET RECV OUT
        PRINTLN(V)

    RETURN NONE
```