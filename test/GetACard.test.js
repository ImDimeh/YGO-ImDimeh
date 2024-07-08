import GetSimpleCardDataByName from "../src/GetACard.js";

describe("GetACard", () => {
  it("devrait retourner un objet avec les informations de la carte pour un nom de carte valide", async () => {
    const cardName = "Blue-Eyes White Dragon"; // Exemple de nom de carte
    const card = await GetSimpleCardDataByName(cardName);
    expect(card).toBeDefined();
    expect(card.name).toBe(cardName);
    // Ajoutez d'autres assertions ici selon les propriétés attendues de votre objet carte
  });

  it("devrait retourner null pour un nom de carte invalide", async () => {
    const cardName = "CarteInexistante";
    const card = await GetSimpleCardDataByName(cardName);
    expect(card).toBeNull();
  });

  // Vous pouvez ajouter d'autres cas de test selon les comportements attendus de votre fonction
});
