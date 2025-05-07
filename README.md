# TypeScript Blog

## Difference between `any`, `unknown`, and `never` types in TypeScript

## any

### What it means:

It disables all type checking and let us assign any type of value value in a variable. Whether is makes sense or not.

It's turn off the type system for a variable and behave like JavaScript. So in that case we are telling TypeScript that, "I don't care what type is this. I know what I'm doing."

### Example:

```ts
let value: any = "I am a value";
value = 12;
value = true;
value = {"value1", "value2"}
value = ["value1", "value2"]
```

### When to use:

We can use it when need the output quickly and at the time of prototyping. But it should be remember the refactor of code.

## unknown

### What it means:

`unknown` is a type-safe version of any. We can assign anything to it, but we can't use it directly without checking the type.

### Example:

```ts
let text: unknown = "Hello";

if (typeof text === "string") {
  console.log(text.toUpperCase());
}
```

### When to use:

It can be used when we are receiving dynamic data and enforce validation or type checking before using it. unknown encourages us safer programming by narrowing the type before using it.

## never

### What it means

`never` represents a value that should never happen or exist. This is used where a function never return any value.

### Example:

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

### When to use

We can use `never` in function that never return (like infinite loop or errors).

## Understanding the `keyof` Keyword in TypeScript

`keyof` keyword allows us to extract the `keys` of an object type as a union of string literals.

The keyof keyword takes an object type and returns a union of its keys.

### Example:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User; // "name" | "age" | "email"
```

Now `UserKeys` can only be one of `"name"`, `"age"`, or `"email"`. This becomes especially useful when building reusable functions that operate on object keys.

### Conclusion

The keyof keyword is a simple but powerful feature in TypeScript. It ensures to use valid keys of an object, makes code more reliable and maintainable.
