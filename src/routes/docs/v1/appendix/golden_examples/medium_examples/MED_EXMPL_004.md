---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME004",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME004: SECURE LOGGING WITH CAPABILITIES + CHANNELS

## NXD
```nxd
MODULE security.logging

TYPE LOG_CAP { TOKEN: string }
TYPE CHANNEL<string> { }

FUNC LOGGER(CH, CAP):
    LOOP:
        LET MSG SET RECV CH
        IF CAP IS NONE:
            RAISE E4001
        IF CAP.TOKEN NEQ "log":
            RAISE E4002
        PRINTLN("LOG: " ADD MSG)

FUNC MAIN():
    LET CH SET CHANNEL<string>()
    LET CAP SET LOG_CAP { TOKEN: "log" }

    SPAWN LOGGER(CH, CAP)

    SEND "system started" TO CH
    SEND "user login" TO CH

    LET CAP SET NONE
    SEND "this should fail" TO CH

    RETURN NONE
```