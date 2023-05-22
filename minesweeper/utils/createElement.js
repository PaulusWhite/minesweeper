let createElement = (tagName, classNamesArr) => {
  let element = document.createElement(`${tagName}`);
  element.className = `${classNamesArr.join(" ")}`;

  return element;
};

export default createElement;
