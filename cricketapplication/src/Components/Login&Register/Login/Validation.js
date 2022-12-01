export const validate = (element) => {
  if (element["required"]) {
    if (element["type"] === "text" || element["type"] === "password" || element["type"] === "number") {
      return element["value"].length < element.pattern.min || element["value"].length > element.pattern.max;
    } else if (element["type"] === "email") {
      return !element.pattern.regEx.test(element["value"]);
    } else if (element["type"] === "select") {
      return element["value"].toString().length <= 0;
    }
  } else {
    return false;
  }
};
