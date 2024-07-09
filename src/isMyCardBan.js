/**
 * Get All Ban Card
 * @param {string} cardName - Le nom de la carte.
 * @param {('tcg'|'ocg'|'goat')} region - La région de la liste de bannissement.
 * @returns {('Semi-Limited'|'Limited'|'Banned'|'Normal')} - Le statut de la carte dans la liste de bannissement.
 */
const IsMyCardBan = async (Name , region) => {
  try {
    const lien = `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=${region}&name=${Name}`;
    const response = await fetch(lien);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data[0].banlist_info[`ban_${region}`] ;
  } catch (error) {
    if (error == " HTTP error! status: 400 ") {
      return `${Name} n'est pas banni en ${region}`
    }
    
    return "Normal"; // Retourner null ou une valeur par défaut en cas d'erreur
  }
};

export default IsMyCardBan;
