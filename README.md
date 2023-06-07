# dtrt-type-validate

Validate that a variable is of a certain data type.

## Usage

```sh
npm install dotherightthing/dtrt-type-validate
```

```js
import dtrtValidate from 'dtrt-type-validate'; // ESM
const dtrtValidate = require('dtrt-type-validate'); // CommonJS

const foo = (param) => {
  const validObject = dtrtValidate.validate(param, 'object', 'myFunc');
  
  // do something with validObject
};

const bar = (param) => {
  if (dtrtValidate.isArray(param)) {
    // do something with param which is an array
  }
};
```
