---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "LE010",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Large Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---

# LE010: MONITORING SYSTEM (PROCESSES + CHANNELS + ALERTS + MULTI-MODULE)

### NXD
```nxd
MODULE monitor.core

TYPE METRIC { NAME: string, VALUE: int }
TYPE CHANNEL<METRIC> { }

FUNC COLLECT(CH):
    LOOP:
        LET CPU SET METRIC { NAME: "cpu", VALUE: RANDOM(0, 100) }
        LET MEM SET METRIC { NAME: "mem", VALUE: RANDOM(0, 100) }
        SEND CPU TO CH
        SEND MEM TO CH
        SLEEP(1)


MODULE monitor.alerts
IMPORT monitor.core

FUNC ALERT(CH):
    LOOP:
        LET M SET RECV CH
        IF M.VALUE GT 80:
            PRINTLN("ALERT: " ADD M.NAME ADD "=" ADD M.VALUE)


MODULE app.main
IMPORT monitor.core
IMPORT monitor.alerts

FUNC MAIN():
    LET CH SET CHANNEL<METRIC>()

    SPAWN COLLECT(CH)
    SPAWN ALERT(CH)

    LOOP I FROM 1 TO 10:
        SLEEP(1)

    RETURN NONE
```