export function addClassIf(condition, elementClass) {
    return condition ? elementClass : null;
  }
  
  export function concatClass(...args) {
    return args.join(" ").trim();
  }
  export function addClass(
    expression,
    defaultClass,
    ifConditionalIsTrue,
    ifConditionalIsFalse = ""
  ) {
    return expression
      ? concatClass(defaultClass, ifConditionalIsTrue)
      : concatClass(defaultClass, ifConditionalIsFalse);
  }
  
  export function getStyleClass(styles, className) {
    const all_class = className.split(/\s/);
  
    return all_class.reduce((acc, current_class) => {
      if (styles[current_class]) {
        acc = `${acc} ${styles[current_class]}`;
      }
  
      return acc;
    }, "");
  }
  
  export function orClass(expression, isTrueClass, ifFalseClass) {
    return expression ? isTrueClass : ifFalseClass;
  }
  
  export function renderIf(condition, ifComponent, elseComponent) {
    return condition ? ifComponent : elseComponent;
  }
  
  export function getStyleType(styles, type) {
    if (type) {
      const types = type.split(/\s/);
  
      if (types.length) {
        return types
          .reduce((acc, currentType) => {
            if (styles[currentType]) {
              acc.push(styles[currentType]);
            }
            return acc;
          }, [])
          .join(" ");
      }
    }
  
    return null;
  }