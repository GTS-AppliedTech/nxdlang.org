NXD-D_MAPPING.md

 # Mapping D

***D is a systems language, so this backend focuses on:***

• performance
• memory control
• templates/generics
• compile‑time execution
• strong typing
• predictable lowering


NXD maps extremely well into D because D supports:

• structs
• unions
• tagged unions
• templates
• functional style
• exceptions
• fibers (for concurrency)
• message passing via channels
• GC + manual memory


Below is the full mapping system, structured for compiler implementation and agent reasoning.


## NXD → D Mapping Rules

These rules operate after IR lowering, meaning you map IR → D, not AST → D.


1. Module Mapping

#### NXD:

```nxd
MODULE MATH
```

#### D:

```d
module math;
```

Rules:

• NXD module name → lowercase D module name
• File name: math.d
• NXD EXPORT → D public
• NXD IMPORT → D import


### Example:

#### NXD:

```nxd
IMPORT UTIL AS U
```

#### D:

```d
import util : U;
```

2. Type Mapping

STRUCT → struct

#### NXD:

```nxd
TYPE PERSON { NAME: string, AGE: int }
```

#### D:

```d
struct Person {
    string name;
    int age;
}
```

ENUM → enum

#### NXD:

```nxd
TYPE COLOR ENUM { RED, GREEN, BLUE }
```

#### D:

```d
enum Color { RED, GREEN, BLUE }
```

UNION → D tagged union

#### NXD:

```nxd
TYPE RESULT UNION { OK(string), ERR(int) }
```

#### D:

```d
union Result {
    struct { string ok; }
    struct { int err; }
}
```

Or better (idiomatic D):

alias Result = Algebraic!(string, int);


TRAIT → D interface

#### NXD:

```nxd
TRAIT SERIALIZABLE { FUNC TO_STRING(X): string }
```

#### D:

```d
interface Serializable {
    string toString();
}
```

IMPL → class or struct method

#### NXD:

```nxd
IMPL SERIALIZABLE FOR PERSON:
    FUNC TO_STRING(P): string:
        RETURN "person"
```

#### D:

```d
string toString(Person p) {
    return "person";
}
```

3. Function Mapping

#### NXD:

```nxd
FUNC ADD(X, Y):
    RETURN X ADD Y
```

#### D:

```nxd
int add(int x, int y) {
    return x + y;
}
```

### Rules:

• FUNC NAME(PARAMS) → returnType name(params)
• NXD capitalized identifiers → lowercase D variables
• NXD operators → D operators
• NXD blocks → D braces { ... }


4. Control Flow Mapping

IF / ELSE

#### NXD:

```nxd
IF X GT 10:
    RETURN X
ELSE:
    RETURN 0
```

#### D:

```d
if (x > 10) {
    return x;
} else {
    return 0;
}
```

MATCH → D `switch` or `static if`

#### NXD:

```nxd
MATCH N:
    CASE 0:
        RETURN 1
    OTHERWISE:
        RETURN N MUL FACTORIAL(N SUB 1)
```

#### D:

```d
switch (n) {
    case 0:
        return 1;
    default:
        return n * factorial(n - 1);
}
```

5. Operator Mapping

#### NXD D	
ADD	+	
SUB	-	
MUL	*	
DIV	/	
MOD	%	
EQ	==	
NEQ	!=	
GT	>	
LT	<	
GTE	>=	
LTE	<=	
AND	&&	
OR	||	
NOT	!	


Ownership operators:

#### NXD	D	
MOVE	assignment (copy or move depending on type)	
CLONE	.dup or custom deep copy	
BORROW	reference (ref)	


Pipeline operators:

#### NXD:

```nxd
X PIPE F
```

#### D:

```d
F(x)
```

6. Literal Mapping

#### NXD	D	
10	10	
3.14	3.14	
“hello”	“hello”	
true	true	
false	false	
none	null	


#### List:

[1,/ 2, 3] → [1, 2, 3]


#### Map:

{ "a": 1 } → ["a": 1]


7. Concurrency Mapping

#### D supports:

• fibers
• message passing
• channels
• tasks
• async I/O


SPAWN

#### NXD:

```nxd
SPAWN WORK()
```

#### D:

```d
import core.thread;

auto t = new Thread(&work);
t.start();
```

Or fiber:

```d
import core.thread;

Fiber f = new Fiber(&work);
f.call();
```

SEND / RECV

#### NXD:

```nxd
SEND MSG TO CH
RECV X
```

#### D:

```d
ch.send(msg);
auto x = ch.receive();
```

AWAIT

#### NXD:

```nxd
AWAIT TASK
```

#### D:

```d
auto result = task.get();
```

8. Error Handling Mapping

#### NXD:

```nxd
TRY:
    ...
CATCH E:
    ...
FINALLY:
    ...
```

#### D:

```d
try {
    ...
} catch (Exception e) {
    ...
} finally {
    ...
}
```

 9. Full Example: NXD → D

#### NXD:

```nxd
MODULE MATH

FUNC FACTORIAL(N):
    MATCH N:
        CASE 0:
            RETURN 1
        OTHERWISE:
            RETURN N MUL FACTORIAL(N SUB 1)
```

#### D:

```d
module math;

int factorial(int n) {
    switch (n) {
        case 0:
            return 1;
        default:
            return n * factorial(n - 1);
    }
}
```

### Why NXD → D mapping is strong

• D supports everything NXD needs
• Nim/Elixir/D triangle becomes fully consistent
• D’s templates map perfectly to NXD generics
• D’s unions map perfectly to NXD unions
• D’s fibers map perfectly to NXD concurrency
• D’s exceptions map perfectly to NXD error handling
• D’s struct/object system maps perfectly to NXD types


