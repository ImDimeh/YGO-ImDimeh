import searchCard from "../src/GetCardByData";

// Mock the fetch function
global.fetch = jest.fn();

describe("searchCard", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return a list of Rokket cards", async () => {
    const mockResponse = {
      data: [
        {
          name: "Rokket Caliber",
          type: "Tuner Monster",
          level: 4,
          atk: 1700,
          def: 100,
          archetype: "Rokket",
          race: "Dragon",
        },
        {
          name: "Absorouter Dragon",
          type: "Effect Monster",
          level: 7,
          atk: 1200,
          def: 2800,
          archetype: "Rokket",
          race: "Dragon",
        },
        {
          name: "Anesthrokket Dragon",
          type: "Effect Monster",
          level: 1,
          atk: 0,
          def: 2200,
          archetype: "Rokket",
          race: "Dragon",
        },
        {
          name: "Silverrokket Dragon",
          type: "Effect Monster",
          level: 4,
          atk: 1900,
          def: 100,
          archetype: "Rokket",
          race: "Dragon",
        },
        {
          name: "Autorokket Dragon",
          type: "Effect Monster",
          level: 3,
          atk: 1600,
          def: 1000,
          archetype: "Rokket",
          race: "Dragon",
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await searchCard({ archetype: "Rokket" });
    expect(result).toEqual([
      {
        name: "Rokket Caliber",
        type: "Tuner Monster",
        level: 4,
        atk: 1700,
        def: 100,
        archetype: "Rokket",
        race: "Dragon",
      },
      {
        name: "Absorouter Dragon",
        type: "Effect Monster",
        level: 7,
        atk: 1200,
        def: 2800,
        archetype: "Rokket",
        race: "Dragon",
      },
      {
        name: "Anesthrokket Dragon",
        type: "Effect Monster",
        level: 1,
        atk: 0,
        def: 2200,
        archetype: "Rokket",
        race: "Dragon",
      },
      {
        name: "Silverrokket Dragon",
        type: "Effect Monster",
        level: 4,
        atk: 1900,
        def: 100,
        archetype: "Rokket",
        race: "Dragon",
      },
      {
        name: "Autorokket Dragon",
        type: "Effect Monster",
        level: 3,
        atk: 1600,
        def: 1000,
        archetype: "Rokket",
        race: "Dragon",
      },
    ]);
  });

  it("should return a list of Blue-Eyes cards", async () => {
    const mockResponse = {
      data: [
        {
          name: "Blue-Eyes Jet Dragon",
          type: "Effect Monster",
          level: 8,
          atk: 3000,
          def: 0,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
        {
          name: "Blue-Eyes Alternative White Dragon",
          type: "Effect Monster",
          level: 8,
          atk: 3000,
          def: 2500,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
        {
          name: "Blue-Eyes White Dragon",
          type: "Normal Monster",
          level: 8,
          atk: 3000,
          def: 2500,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
        {
          name: "Malefic Blue-Eyes White Dragon",
          type: "Effect Monster",
          level: 8,
          atk: 3000,
          def: 2500,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
        {
          name: "Blue-Eyes Abyss Dragon",
          type: "Effect Monster",
          level: 8,
          atk: 2500,
          def: 2500,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await searchCard({ archetype: "Blue-Eyes" });
    expect(result).toEqual([
      {
        name: "Blue-Eyes Jet Dragon",
        type: "Effect Monster",
        level: 8,
        atk: 3000,
        def: 0,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
      {
        name: "Blue-Eyes Alternative White Dragon",
        type: "Effect Monster",
        level: 8,
        atk: 3000,
        def: 2500,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
      {
        name: "Blue-Eyes White Dragon",
        type: "Normal Monster",
        level: 8,
        atk: 3000,
        def: 2500,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
      {
        name: "Malefic Blue-Eyes White Dragon",
        type: "Effect Monster",
        level: 8,
        atk: 3000,
        def: 2500,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
      {
        name: "Blue-Eyes Abyss Dragon",
        type: "Effect Monster",
        level: 8,
        atk: 2500,
        def: 2500,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
    ]);
  });

  it("should handle optional filters correctly", async () => {
    const mockResponse = {
      data: [
        {
          name: "Blue-Eyes Jet Dragon",
          type: "Effect Monster",
          level: 8,
          atk: 3000,
          def: 0,
          archetype: "Blue-Eyes",
          race: "Dragon",
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await searchCard({ archetype: "Blue-Eyes", level: 8 });
    expect(result).toEqual([
      {
        name: "Blue-Eyes Jet Dragon",
        type: "Effect Monster",
        level: 8,
        atk: 3000,
        def: 0,
        archetype: "Blue-Eyes",
        race: "Dragon",
      },
    ]);
  });

  it("should throw an error for an invalid response status", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(
      searchCard({ archetype: "Invalid-Archetype" })
    ).rejects.toThrow("HTTP error! status: 404");
  });

  it("should handle network errors gracefully", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(searchCard({ archetype: "Blue-Eyes" })).rejects.toThrow(
      "Network error"
    );
  });
});
