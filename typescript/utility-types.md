# Utility types

**Partial**

```ts
type User {
	id: string;
	name: string;
}

type PartialUser = Partial<User>;
// PartialUser = { id?: string; name?: string }
```

**Required**

```ts
type User {
	id: string;
	name?: string;
}

type RequiredUser = Required<User>;
// RequiredUser = { id: string; name: string }
```

**Omit**

```ts
type User {
	id: string;
	name: string;
}

type SimpleUser = Omit<User, "id">; // or use tuplt to omit more properties
// SimpleUser = { name: string; }
```

**Pick**

```ts
type User {
	id: string;
	name: string;
}

type SimpleUser = Pick<User, "name">; // or use tuple to pick more properties
// SimpleUser = { name: string; }
```

**Readonly**

```ts
type StaticUser = Readonly<User>; // makes all fields readonly
```

**Exclude**

```ts
type Role = "admin" | "user" | "guest";

type AuthRole = Exclude<Role, "quest">;
// AuthRole = "admin" | "user";
```

**ReturnType**

```ts
type Func = () => number;

type FuncType = ReturnType<Func>; // number
```

**Parameters**

```ts
type Func = (list: string[], index: number) => string;

type Params = Parameters<Func>;
// Params = [list: string[], index: number]
```

**NonNullable**

```ts
type Mixed = string | null | undefined;

type Valid = NonNullable<Mixed>;
// Valud = string;
```

**Awaited**

```ts
type FastPromise = Promise<string>;

type Result = Awaited<FastPromise>; // string
```

**Capitalize**

```ts
type Uppercased = Capitalize<string>;
```
![[Multimedia/typescript-capitalize.png]]
