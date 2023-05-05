import {execute} from "../../src/services/dummy-service.js";
import {helper} from "../../src/services/helper-service.js";

jest.mock("../../src/services/helper-service.js")

test('Result is true and Learning JS', () => {
    //Implementation goes here
    // const spy = jest.spyOn(dummyFunctions,'helper').mockReturnValue(true);
    // dummyFunctions.helper.mockImplementation(() => true);
    helper.mockReturnValue(true);
    const result =execute();  
    expect(result).toBe('Learning Js')
})

test('Result is false and Learning ReactJs', () => {
    //Implementation goes here
    // const spy = jest.spyOn(dummyFunctions,'helper').mockReturnValue(true);
    // dummyFunctions.helper.mockImplementation(() => false);
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJs');
})