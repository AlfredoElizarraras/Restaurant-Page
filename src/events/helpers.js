export const showElement = (pageId) => document.getElementById(pageId).classList.remove('d-none');

export const hideElement = (elementId) => document.getElementById(elementId).classList.add('d-none');

export const displayElementsByClass = (elementsClass) => {
  document.querySelectorAll(elementsClass).forEach((item) => {
    showElement(item.id);
  });
};

export const hideElementsByClass = (elementsClass) => {
  document.querySelectorAll(elementsClass).forEach((item) => {
    hideElement(item.id);
  });
};