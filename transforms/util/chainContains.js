module.exports = j => (fnName, node, end) => {
  let curr = node;

  const equalsEnd = (
    typeof end === 'function'
      ? end
      : name => name === end
  );

  while (
    curr.type === j.MemberExpression.name &&
    curr.property.name !== fnName &&
    !equalsEnd(curr.property.name)
  ) {
    curr = curr.object;
  }

  return (
    curr.type === j.MemberExpression.name &&
    curr.property.name === fnName
  );
};
