import GetCardByName from "./src/GetACard.js";

GetCardByName("Dark Magician")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));