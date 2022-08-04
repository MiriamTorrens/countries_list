import parseLine from "../index.js";

describe("Countries List", () => {
  it("should parse one line with a country without spaces", () => {
    const input = "Afghanistan 38,928,346 652,860"
    const output = {
      "area": "652860",
      "density": 0.05962687253009834,
      "name": "Afghanistan",
      "population": "38928,346"
    }
    expect(output).toStrictEqual(parseLine(input))
  })

  it("should parse one line with a country with spaces", () => {
    const input = "Bosnia and Herzegovina 3,280,819 51,000"
    const output = {
      "area": "51000",
      "density": 0.06431372549019608,
      "name": "Bosnia and Herzegovina",
      "population": "3280,819"
    }
    expect(output).toStrictEqual(parseLine(input))
  })

  it("should parse one line with a country with special characters", () => {
    const input = "Côte d'Ivoire 26,378,274 322,463"
    const output = {
      "area": "322463",
      "density": 0.08180163305557536,
      "name": "Côte d'Ivoire",
      "population": "26378,274"
    }
    expect(output).toStrictEqual(parseLine(input))
  })

  it("should parse one line with a country with hyphens", () => {
    const input = "Congo (Congo-Brazzaville) 5,518,087 341,500"
    const output = {
      "area": "341500",
      "density": 0.016158125915080528,
      "name": "Congo (Congo-Brazzaville)",
      "population": "5518,087"
    }
    expect(output).toStrictEqual(parseLine(input))
  })
})
