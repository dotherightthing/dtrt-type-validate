# dtrt-type-validate

Validation utilities.

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
