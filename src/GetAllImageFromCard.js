/**
 * Get all image URLs for a given card name.
 *
 * @param {string} cardName - The name of the card.
 * @returns {Promise<Array>} - A promise that resolves to a list of image URLs.
 * @throws {Error} - An error if the fetch fails.
 */
const getImageUrlsByCardName = async (cardName) => {
  const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  const url = `${baseUrl}?name=${encodeURIComponent(cardName)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const cardImages = data.data.flatMap((card) => card.card_images);

    const imageUrls = cardImages.map((image) => image.image_url);
    return imageUrls;
  } catch (error) {
    console.log("Failed to fetch card data:", error);
    throw error; // Propagate the error
  }
};

export default getImageUrlsByCardName;
