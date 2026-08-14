---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "LE007",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Large Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---

# LE007: CONFIGURATION LOADER (MODULES + INIT + RESULT + OPTION + PARSING)

### NXD
```nxd
MODULE config.core

TYPE OPTION UNION { SOME(any), NONE }
TYPE RESULT UNION { OK(any), ERR(string) }

LET CFG SET MAP<string, string> {}

INIT:
    CFG["host"] SET "localhost"
    CFG["port"] SET "8080"

FUNC GET(KEY: string): OPTION:
    IF CFG HAS KEY:
        RETURN SOME(CFG[KEY])
    RETURN NONE

FUNC PARSE_INT(S: string): RESULT:
    IF S CONTAINS NON_DIGIT:
        RETURN ERR("not numeric")
    RETURN OK(S AS int)


MODULE config.service
IMPORT config.core

FUNC LOAD_PORT(): RESULT:
    MATCH GET("port"):
        CASE SOME(V): RETURN PARSE_INT(V)
        CASE NONE: RETURN ERR("missing port")


MODULE app.main
IMPORT config.service

FUNC MAIN():
    LET R SET LOAD_PORT()
    PRINTLN(R)
    RETURN NONE
```