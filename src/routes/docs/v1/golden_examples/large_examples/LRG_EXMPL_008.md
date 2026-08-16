---
{
  "@context": "https://nxdlang.org/schema",
  "doc_id": "LE008",
  "title": "",
  "description": "",
  "layer": "Examples",
  "category": "Large Examples",
  "keywords": [],
  "doc_version": "1.0",
  "status": "active"
}
---

# LE008: JOB SCHEDULER (TASKS + CHANNELS + TIMERS + RESULT)

### NXD
```nxd
MODULE sched.core

TYPE JOB { NAME: string, DELAY: int }
TYPE RESULT UNION { OK(any), ERR(string) }
TYPE CHANNEL<JOB> { }

FUNC RUN_JOB(J):
    PRINTLN("running: " ADD J.NAME)
    RETURN OK("done")

FUNC SCHEDULER(CH):
    LOOP:
        LET J SET RECV CH
        SLEEP(J.DELAY)
        LET T SET TASK(fn() => RUN_JOB(J))
        LET OUT SET AWAIT T
        PRINTLN(OUT)


MODULE app.main
IMPORT sched.core

FUNC MAIN():
    LET CH SET CHANNEL<JOB>()

    SPAWN SCHEDULER(CH)

    SEND JOB { NAME: "backup", DELAY: 1 } TO CH
    SEND JOB { NAME: "cleanup", DELAY: 2 } TO CH

    RETURN NONE
```