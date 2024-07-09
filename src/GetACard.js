// Get a card by name function 
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician

/**
 * Get a card by name
 * 
 * @param {string} name - The name of the card
 * @returns {object} - The card object
 * @throws {error} - An error if the fetch fails
 */

const GetSimpleCardDataByName = async (name) => {
  try {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Supposons que data.data[0] contient les informations de la carte
    const card = data.data[0];
    console.log(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);

    // Filtrer et reformater la réponse pour ne renvoyer que les données spécifiées
    const filteredData = {
      id: card.id,
      name: card.name,
      type: card.type,
      frameType: card.frameType,
      desc: card.desc,
      atk: card.atk,
      def: card.def,
      level: card.level,
      race: card.race,
      attribute: card.attribute,
      archetype: card.archetype,
    };
    return filteredData;
  } catch (error) {
    console.log("Failed to fetch card data:", error);
    return null; // Retourner null ou une valeur par défaut en cas d'erreur
  }
};

export default GetSimpleCardDataByName;
