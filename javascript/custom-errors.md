# Create custom error

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid email address");
} catch (error) {
    console.log({
        error,
        name: error.name,
        message: error.message,
        is: error instanceof ValidationError
    });
}
```
