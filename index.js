import GetSimpleCardDataByName from "./src/GetACard.js";
import GetBanCarbByRegion from "./src/GetBanCarbByRegion.js";
import IsMyCardBan from "./src/isMyCardBan.js";
// GetSimpleCardDataByName("Raidraptor - Rising Rebellion Falcon")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


// GetBanCarbByRegion("azeaze")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

IsMyCardBan("Borrelend Dragon", "ocg")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));