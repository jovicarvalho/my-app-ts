import soma from "./soma";

describe("soma", () => {
  it("deve retornar a soma dos números", () => {
    expect(soma(2, 3)).toBe(5);
  });
});