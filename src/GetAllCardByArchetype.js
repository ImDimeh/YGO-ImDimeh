//https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes


/**
 * Get a card by name
 * 
 * @param {string} Archetype - The Archetype you are looking for 
 * @returns {Array} - list of card of that archetype with theire name and type 
 * @throws {error} - An error if the fetch fails
 */

const GetAllCardByArchetype = async (archetype) => {
  try {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&sort=new`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Supposons que data.data[0] contient les informations de la carte
    const cards = data.data;

      const simplifiedCards = cards.map((card) => ({
        name: card.name,
        type: card.type,
        archetype : card.archetype,
      }));

      return simplifiedCards;
   
    return card;
  } catch (error) {
    console.log("Failed to fetch card data:", error);
    return null; // Retourner null ou une valeur par défaut en cas d'erreur
  }
};

export default GetAllCardByArchetype;
