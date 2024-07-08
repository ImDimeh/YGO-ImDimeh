// Get a card by name function 
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician

/**
 * Get a card by name
 * 
 * @param {string} name - The name of the card
 * @returns {object} - The card object
 * @throws {error} - An error if the fetch fails
 */

const GetCardByName = async (name) => {
  try {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch card data:", error);
    return null; // Retourner null ou une valeur par défaut en cas d'erreur
  }
};

export default GetCardByName;
