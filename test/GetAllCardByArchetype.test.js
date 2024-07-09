// GetAllCardByArchetype.test.js
import GetAllCardByArchetype from "../src/GetAllCardByArchetype";

// Mock the fetch function
global.fetch = jest.fn();

describe("GetAllCardByArchetype", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return a list of cards for a valid archetype", async () => {
    const mockResponse = {
      data: [
        {
          name: "Blue-Eyes White Dragon",
          type: "Monster",
          archetype: "Blue-Eyes",
        },
        {
          name: "Blue-Eyes Alternative White Dragon",
          type: "Monster",
          archetype: "Blue-Eyes",
        },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await GetAllCardByArchetype("Blue-Eyes");
    expect(result).toEqual([
      {
        name: "Blue-Eyes White Dragon",
        type: "Monster",
        archetype: "Blue-Eyes",
      },
      {
        name: "Blue-Eyes Alternative White Dragon",
        type: "Monster",
        archetype: "Blue-Eyes",
      },
    ]);
  });

  it("should throw an error for an invalid response status", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await GetAllCardByArchetype("Invalid-Archetype");
    expect(result).toBeNull();
  });

  it("should handle network errors gracefully", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await GetAllCardByArchetype("Blue-Eyes");
    expect(result).toBeNull();
  });
});
