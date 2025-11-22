import dtrtValidate from 'dtrt-type-validate';

QUnit.config.fixture = '<div id="test1"></div>';

QUnit.module('isHTMLElement');

// this type

QUnit.test('div', (assert) => {
  const fixtureTest1 = document.querySelector('div#test1');

  assert.equal(
    dtrtValidate.isHTMLElement(fixtureTest1),
    true,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement(true),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLElement(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLElement(0),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLElement(1),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLElement(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLElement('foo'),
    false,
  );
});
