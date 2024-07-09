// isMyCardBan.test.js
import IsMyCardBan from "../src/isMyCardBan";

// Mock the fetch function
global.fetch = jest.fn();

describe("IsMyCardBan", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return 'Banned' for a banned card in TCG", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            banlist_info: {
              ban_tcg: "Banned",
            },
          },
        ],
      }),
    });

    const result = await IsMyCardBan("Pot of Greed", "tcg");
    expect(result).toBe("Banned");
  });

  it("should return 'Limited' for a limited card in OCG", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            banlist_info: {
              ban_ocg: "Limited",
            },
          },
        ],
      }),
    });

    const result = await IsMyCardBan("Monster Reborn", "ocg");
    expect(result).toBe("Limited");
  });

  it("should return 'Semi-Limited' for a semi-limited card in Goat format", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            banlist_info: {
              ban_goat: "Semi-Limited",
            },
          },
        ],
      }),
    });

    const result = await IsMyCardBan("Marauding Captain", "goat");
    expect(result).toBe("Semi-Limited");
  });

  it("should return null for an invalid card name", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await IsMyCardBan("Invalid Card Name", "tcg");
    expect(result).toBe("Normal");
  });

  it("should return null for a valid card but invalid region", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            banlist_info: {},
          },
        ],
      }),
    });

    const result = await IsMyCardBan("Pot of Greed", "atlantis");
    expect(result).toBe(undefined);
  });

  it("should handle fetch errors gracefully", async () => {
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    const result = await IsMyCardBan("Pot of Greed", "tcg");
    expect(result).toBe("Normal");
  });
});
