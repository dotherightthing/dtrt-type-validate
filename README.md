# dtrt-validate

Validation utilities.

## Usage

```sh
npm install dotherightthing/dtrt-validate
```

```js
import { validate } from 'dtrt-validate';

const myFunc = (param) => {
  const validObject = validate(param, 'object', 'myFunc'); // then do something with validObject
}
```
