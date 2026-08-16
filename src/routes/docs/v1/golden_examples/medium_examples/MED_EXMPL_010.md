---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME010",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME010: MULTI-MODULE SERVICE: AUTH + USER + APP

### NXD
```nxd
MODULE service.auth

TYPE TOKEN { VALUE: string }

FUNC ISSUE(USERNAME: string): TOKEN:
    RETURN TOKEN { VALUE: "tok_" ADD USERNAME }

FUNC VALID(T: TOKEN): bool:
    RETURN T.VALUE CONTAINS "tok_"


MODULE service.user

TYPE USER { NAME: string, TOKEN: TOKEN }

FUNC CREATE(NAME: string): USER:
    LET T SET ISSUE(NAME)
    RETURN USER { NAME: NAME, TOKEN: T }


MODULE app.main
IMPORT service.auth
IMPORT service.user

FUNC MAIN():
    LET U SET CREATE("gabriel")

    IF VALID(U.TOKEN):
        PRINTLN("auth ok for " ADD U.NAME)
    OTHERWISE:
        PRINTLN("auth failed")

    RETURN NONE
```