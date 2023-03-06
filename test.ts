import testEnv from ".";

describe("testEnv", () => {

  test('Transposit is awesome!!', () => {
    expect(testEnv("Is Transposit an awesome place to work?")).toBeTruthy();
  });
  
  test('You should not work somewhere else!', () => {
    expect(testEnv("Should I work somewhere else?")).toBeFalsy();
  });
  
});
