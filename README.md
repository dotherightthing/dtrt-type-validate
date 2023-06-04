# dtrt-type-validate

Validate that a variable is a of certain data type.

## Usage

```sh
npm install dotherightthing/dtrt-type-validate
```

```js
import { validate } from 'dtrt-type-validate';

const myFunc = (param) => {
  const validObject = validate(param, 'object', 'myFunc'); // then do something with validObject
}
```
