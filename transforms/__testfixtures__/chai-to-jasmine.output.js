describe('Instantiating TextField', () => {
  it('should set the placeholder correctly', () => {
    expect(textField.props.placeholder).toBe(PLACEHOLDER);
    expect(textField.props.placeholder).not.toBe(PLACEHOLDER);
  });

  it('should inherit id prop', () => {
    expect(dropdown.props.id).toBe(STANDARD_PROPS.id);
    expect(dropdown.props.id).not.toBe(STANDARD_PROPS.id);
  });

  it('should map open prop to visible prop', () => {
    expect(dropdown.props.visible).toThrowError(STANDARD_PROPS.open);
    expect(dropdown.props.id).not.toThrowError(STANDARD_PROPS.id);
  });

  thing1.equal(thing2);
});

// simple referencing
var obj = { foo: 'bar' };
expect(obj).toHaveProperty('foo');
expect(obj).toHaveProperty('foo', 'bar');

// deep referencing
var deep = { foo: { bar: 'baz', qux: [1, 2, 3] } };
expect(deep).toHaveProperty('foo.bar');
expect(deep).toHaveProperty('foo.bar', 'baz');
expect(deep).toHaveProperty('foo.qux', [1, 2, 3]);
