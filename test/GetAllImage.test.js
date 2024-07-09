// getImageUrlsByCardName.test.js

import getImageUrlsByCardName from "../src/GetAllImageFromCard";

// Mock de fetch
global.fetch = jest.fn();

// Réponse simulée de l'API
const mockApiResponse = {
  data: [
    {
      card_images: [
        {
          image_url: "https://images.ygoprodeck.com/images/cards/123.jpg",
        },
        {
          image_url: "https://images.ygoprodeck.com/images/cards/456.jpg",
        },
      ],
    },
  ],
};

describe("getImageUrlsByCardName", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("should return all image URLs for a given card name", async () => {
    // Configure le mock pour renvoyer une réponse réussie
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const cardName = "Blue-Eyes White Dragon";
    const expectedUrls = [
      "https://images.ygoprodeck.com/images/cards/123.jpg",
      "https://images.ygoprodeck.com/images/cards/456.jpg",
    ];

    const imageUrls = await getImageUrlsByCardName(cardName);

    expect(imageUrls).toEqual(expectedUrls);
  });

  it("should throw an error if the fetch fails", async () => {
    // Configure le mock pour renvoyer une réponse échouée
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const cardName = "Non-Existent Card";

    await expect(getImageUrlsByCardName(cardName)).rejects.toThrow(
      "HTTP error! status: 404"
    );
  });

  it("should throw an error if the response is not ok", async () => {
    // Configure le mock pour renvoyer une réponse échouée
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const cardName = "Some Card";

    await expect(getImageUrlsByCardName(cardName)).rejects.toThrow(
      "HTTP error! status: 500"
    );
  });

  it("should handle network errors gracefully", async () => {
    // Configure le mock pour renvoyer une erreur de réseau
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const cardName = "Network Error Card";

    await expect(getImageUrlsByCardName(cardName)).rejects.toThrow(
      "Network error"
    );
  });
});
