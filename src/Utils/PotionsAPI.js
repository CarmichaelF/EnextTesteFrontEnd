const getAll = () =>
  fetch(
    "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json"
  )
    .then(elements => elements.json())
    .catch(error => console.error(error));
export default getAll;
