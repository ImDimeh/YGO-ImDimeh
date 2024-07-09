import GetBanCarbByRegion from "../src/GetBanCarbByRegion";
describe("GetBanCardByRegion", () => {
  it("should return the correct ban cards for region tcg", async () => {
    const result = await GetBanCarbByRegion("tcg");
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0); // Vérifie qu'il y a au moins une carte
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("name");
    // Ajoutez d'autres vérifications nécessaires pour les propriétés spécifiques
  });

  it("should return the correct ban cards for region ocg", async () => {
    const result = await GetBanCarbByRegion("ocg");
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0); // Vérifie qu'il y a au moins une carte
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("name");
    // Ajoutez d'autres vérifications nécessaires pour les propriétés spécifiques
  });

  it("should return the correct ban cards for region goat", async () => {
    const result = await GetBanCarbByRegion("goat");
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0); // Vérifie qu'il y a au moins une carte
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("name");
    // Ajoutez d'autres vérifications nécessaires pour les propriétés spécifiques
  });

 it("should return a specific error object for a fictional region", async () => {
   try {
     const result = await GetBanCarbByRegion("Atlantis");
     // If the function does not throw, this line will make the test fail
     expect(result).toBeUndefined();
   } catch (error) {
     console.log(error)
     expect(error)
   }
 });

});
