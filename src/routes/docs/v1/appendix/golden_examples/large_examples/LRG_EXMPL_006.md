---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "LE006",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Large Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---

# LE006: MESSAGING MICROSERVICE (AUTH + CHANNELS + PROCESSES + RESULT)

### NXD
```nxd
MODULE msg.auth

TYPE TOKEN { VALUE: string }
TYPE RESULT UNION { OK(any), ERR(string) }

FUNC ISSUE(USER: string): TOKEN:
    RETURN TOKEN { VALUE: "tok_" ADD USER }

FUNC VALID(T: TOKEN): bool:
    RETURN T.VALUE CONTAINS "tok_"


MODULE msg.core
IMPORT msg.auth

TYPE MESSAGE { FROM: string, BODY: string }
TYPE CHANNEL<MESSAGE> { }

FUNC SEND_MSG(CH, FROM, BODY, T):
    IF NOT VALID(T):
        RETURN ERR("invalid token")
    LET M SET MESSAGE { FROM: FROM, BODY: BODY }
    SEND M TO CH
    RETURN OK("sent")

FUNC RECEIVE(CH):
    LET M SET RECV CH
    RETURN OK(M)


MODULE app.main
IMPORT msg.core
IMPORT msg.auth

FUNC MAIN():
    LET CH SET CHANNEL<MESSAGE>()
    LET T SET ISSUE("gabriel")

    PRINTLN(SEND_MSG(CH, "gabriel", "hello world", T))
    PRINTLN(RECEIVE(CH))

    RETURN NONE
```