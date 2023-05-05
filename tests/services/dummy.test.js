const { execute } = require("../../src/services/dummy-service.js");

test('Result is true and Learning JS', () => {
    //Implementation goes here
    const result = execute();
    expect(result).toBe('Learning ')
})