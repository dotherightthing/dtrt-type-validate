# dtrt-type-validate

Validate that a variable is of a certain data type.

## Dependencies

* [dotherightthing/dtrt-string-utils](https://github.com/dotherightthing/dtrt-string-utils)

## Usage

```sh
npm install dotherightthing/dtrt-type-validate
```

### CommonJS (via Conditional Export)

```js
// script.cjs

const dtrtValidate = require('dtrt-type-validate');
```

### ESM (via Conditional Export)

```js
// script.mjs

import dtrtValidate from 'dtrt-type-validate';
```

### ESM + Browser

```html
<!-- page.html -->

<!-- use import-maps to aid module resolution of bare import specifiers -->
<script type="importmap">
  {
    "imports": {
      "dtrt-string-utils": "./node_modules/dtrt-string-utils/dist/dtrt-string-utils.mjs",
      "dtrt-type-validate": "./node_modules/dtrt-type-validate/dist/dtrt-type-validate.mjs"
    }
  }
</script>
<script src="/script.mjs" type="module"></script>
```

### Methods

```js
// script.cjs/.mjs

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

## Tests

```sh
npm run lint
```

```sh
npm run test
```

## References

* [Conditional exports](https://nodejs.org/api/packages.html#conditional-exports)
* [import-maps](https://blog.logrocket.com/es-modules-in-browsers-with-import-maps/)
