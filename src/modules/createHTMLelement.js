export default (newElement, className, id, innHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${innHTML}`;
  parent.appendChild(element);
  return element;
};