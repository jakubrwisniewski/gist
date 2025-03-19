# Yup

Sections with 🟠 are not tested/confirmed.

For some snippets I use [jest-extended](https://www.npmjs.com/package/jest-extended) package.


### Boolean validation🟠

```js
const validationSchema = Yup.object({
  agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});
```

***

### Validating two fields to be the same🟠

```js
const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
```

***

### Validate password strength

```js
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[0-9]/, 'Must contain a number')
    .matches(/[@$!%*?&]/, 'Must contain a special character')
    .required('Password is required'),
});
```

***

### Conditional validation🟠

```js
const validationSchema = Yup.object({
  hasDiscount: Yup.boolean(),
  discountCode: Yup.string().when('hasDiscount', {
    is: true,
    then: Yup.string().required('Discount code is required'),
    otherwise: Yup.string().notRequired(),
  }),
});
```

```js
const validationSchema = Yup.object({
  username: Yup.string().when('username', {
    is: (val) => val && val.length > 5,
    then: Yup.string().max(15, 'Max 15 characters allowed'),
  }),
});
```

***

### Upload file validation

```js
const validationSchema = Yup.object({
  file: Yup.mixed()
    .test('fileSize', 'File too large', (value) => !value || (value && value.size <= 2000000)) // 2MB
    .test('fileFormat', 'Unsupported Format', (value) => {
      return !value || (value && ['image/jpeg', 'image/png'].includes(value.type))
    }),
});
```

***

### Validate predefined values

```js
const validationSchema = Yup.object({
  status: Yup.mixed()
    .oneOf(['active', 'inactive', 'pending'], 'Invalid status')
    .required('Status is required'),
});
```

***

### Backend based validation (async)

```js
// api function
const checkUsernameAvailability = async (username) => {
  // Mock API response: assume the API returns `true` if the username is available
  const response = await fetch(`/api/check-username?username=${username}`);
  const data = await response.json();
  return data.isAvailable;
};

// validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .test('username-available', 'Username is taken', async (value) => {
      const isAvailable = await checkUsernameAvailability(value);
      return isAvailable;
    }),
});
```
