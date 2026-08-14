---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "ME009",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Medium Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---


# ME009: COMPILER PLUGIN: ENFORCE EXPLICIT AS ON NUMERIC OPS

### NXD
```nxd
MODULE plugin.cast_policy

PLUGIN REQUIRE_EXPLICIT_CAST:
    ON AST(BINARY_OP):
        IF OP.NAME EQ "ADD" OR OP.NAME EQ "SUB":
            IF OP.LEFT.TYPE NEQ OP.RIGHT.TYPE:
                DIAGNOSTIC E7002 "numeric ops require explicit AS cast"
    END

FUNC CALC():
    LET A SET 10
    LET B SET 3.5
    LET C SET A ADD B AS int   # legal with explicit AS
    RETURN C

FUNC MAIN():
    RETURN CALC()
```