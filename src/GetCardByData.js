/**
 * Get card information based on various filters.
 *
 * @param {Object} options - Options for the card search.
 * @param {string} [options.type] - The type of the card (optional).
 * @param {number} [options.level] - The level of the card (optional).
 * @param {string} [options.language] - The language of the card (optional).
 * @param {number} [options.atk] - The attack points of the card (optional).
 * @param {number} [options.def] - The defense points of the card (optional).
 * @param {string} [options.archetype] - The archetype of the card (optional).
 * @param {string} [options.race] - The race of the card (optional).
 * @param {number} [options.num]
 
 * @throws {Error} - An error if the fetch fails.
 */
const searchCard = async (options = {}) => {
  const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0";
  const params = new URLSearchParams();

  if (options.name) params.append("name", options.name);
  if (options.type) params.append("type", options.type);
  if (options.level) params.append("level", options.level);
  if (options.language) params.append("language", options.language);
  else {
    params.append("language", "fr");
  }
  if (options.atk) params.append("atk", options.atk);
  if (options.def) params.append("def", options.def);
  if (options.archetype) params.append("archetype", options.archetype);
  if (options.race) params.append("race", options.race);
  if (options.num) params.append("num", options.num);
  else {
    params.append("num", 10);
  }

  const url = baseUrl + params.toString();
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const cards = data.data;

    const simplifiedCards = cards.map((card) => ({
      name: card.name,
      type: card.type,
      level: card.level,
      language: card.language,
      atk: card.atk,
      def: card.def,
      archetype: card.archetype,
      race: card.race,
    }));

    return simplifiedCards;
  } catch (error) {
    console.error("Failed to fetch card data:", error);
    throw error; // Propagate the error
  }
};

export default searchCard;
