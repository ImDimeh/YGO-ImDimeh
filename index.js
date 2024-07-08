import GetSimpleCardDataByName from "./src/GetACard.js";

GetSimpleCardDataByName("Dark Magician")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));