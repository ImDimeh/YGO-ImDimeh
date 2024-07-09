
/**
 * Get All Ban Card
 * @param {('tcg'|'ocg'|'goat')} region - La région de la liste de bannissement. 
 *  @returns {Array}                                      Doit être 'tcg', 'ocg', ou 'goat'.
 */
const GetBanCarbByRegion = async (region) => {
  try {
    const lien = `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=${region}`;
    const response = await fetch(
      lien
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data
  }catch (error) {
    console.log("Failed to fetch card data:", error);
    return null; // Retourner null ou une valeur par défaut en cas d'erreur
  }
  
}

export default GetBanCarbByRegion;