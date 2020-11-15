import { handleSubmit } from '../src/client/js/formHandler'


describe("Testing the submit functionality", () => {
    // function is dependent on calling a field entry that will not be present when the test is invoked. So should return false.
    test("Testing the handleSubmit() function", () => {

           expect(handleSubmit()).toBe(false);
  })
});
