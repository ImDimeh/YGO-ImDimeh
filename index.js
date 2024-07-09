import GetSimpleCardDataByName from "./src/GetACard.js";
import GetBanCarbByRegion from "./src/GetBanCarbByRegion.js";
import IsMyCardBan from "./src/isMyCardBan.js";
import GetAllCardByArchetype from "./src/GetAllCardByArchetype.js"
import searchCard from './src/GetCardByData.js'

// searchCard({
//   type: "Monster",
//   level: 8,

//   archetype: "Blue-Eyes",
//   race: "dragon",
//   num : 5
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


GetSimpleCardDataByName("Raidraptor - Rising Rebellion Falcon")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


// GetBanCarbByRegion("azeaze")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// IsMyCardBan("Borrelend Dragon", "ocg")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// GetAllCardByArchetype("rokket")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
