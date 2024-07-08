import GetSimpleCardDataByName from "./src/GetACard.js";

GetSimpleCardDataByName("Raidraptor - Rising Rebellion Falcon")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));