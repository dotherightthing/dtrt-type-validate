/**
 * @file dtrt-type-validate.mjs
 */

/**
 * errorMessage
 * @summary Generate a validation error message.
 * @param {*} value - Value to validate
 * @param {Array} types - Expected type(s)
 * @param {string} identifier - Label to use in error message
 */
export const errorMessage = (value, types, identifier) => {
  const actualType = typeof value;
  const actualTypeArticle = getIndefiniteArticle(actualType);
  const typeSeparator = ', or ';
  let typeArticle;
  let typesStr = '';

  types.forEach((type) => {
    typeArticle = getIndefiniteArticle(type);
    typesStr += `${typeArticle} ${type}${typeSeparator}`;
  });

  // remove trailing separator
  typesStr = typesStr.slice(0, (-1 * typeSeparator.length));

  throw new Error(`${identifier} must be ${typesStr}, not ${actualTypeArticle} ${actualType}`);
};

/**
 * isArray
 * @summary Validate that a value is an array
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isArray = (value) => (Array.isArray(value));

/**
 * isBoolean
 * @summary Validate that a value is a boolean
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isBoolean = (value) => (typeof value === 'boolean');

/**
 * isNull
 * @summary Validate that a value is null
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isNull = (value) => (value === null);

/**
 * isNumber
 * @summary Validate that a value is a number
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isNumber = (value) => {
  if (isArray(value) || isBoolean(value) || isNull(value) || isString(value)) { // eslint-disable-line no-use-before-define
    return false;
  }

  return !isNaN(value); // eslint-disable-line no-restricted-globals
};

/**
 * isObject
 * @summary Validate that a value is an object
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isObject = (value) => (Object.prototype.toString.call(value) === '[object Object]');

/**
 * isString
 * @summary Validate that a value is a string (even an empty one)
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isString = (value) => (typeof value === 'string');

/**
 * isString1
 * @summary Validate that a value is a string of at least one character in length
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isString1 = (value) => {
  if (typeof value === 'string') {
    return (value.trim().length > 0);
  }

  return false;
};

/**
 * isStringNumber
 * @summary Validate that a value is a number
 * @param {*} value - Value to validate
 * @returns {boolean} valid
 */
export const isStringNumber = (value) => {
  if (!isString(value) || (value === '')) {
    return false;
  }

  return !isNaN(value); // eslint-disable-line no-restricted-globals
};

/**
 * validate
 * @summary Validate a value against a type.
 * @param {*} value - Value to validate
 * @param {string} type - Expected type
 * @param {string} identifier - Label to use in error message
 * @param {boolean} condition - Validate if condition is true
 * @returns {*} value
 */
export const validate = (value, type, identifier, condition = true) => {
  if (condition) {
    const types = type.split('|');
    let valid = false;

    // type can be singular (e.g. 'number') or multiple (e.g. 'number|string|boolean')
    types.every((t) => {
      const validationMethod = `is${stringToCapitalised(t)}`;

      if (validationMethod === 'isArray') {
        valid = isArray(value);
      } else if (validationMethod === 'isBoolean') {
        valid = isBoolean(value);
      } else if (validationMethod === 'isNull') {
        valid = isNull(value);
      } else if (validationMethod === 'isNumber') {
        valid = isNumber(value);
      } else if (validationMethod === 'isObject') {
        valid = isObject(value);
      } else if (validationMethod === 'isString') {
        valid = isString(value);
      } else if (validationMethod === 'isString1') {
        valid = isString1(value);
      } else if (validationMethod === 'isStringNumber') {
        valid = isStringNumber(value);
      } else {
        throw new Error(`DtrtValidate does not support type ${type}`);
      }

      if (valid) {
        return false; // stop looping
      }

      return true; // continue looping
    });

    if (!valid) {
      throw new Error(errorMessage(value, types, identifier));
    }
  }

  return value;
};
