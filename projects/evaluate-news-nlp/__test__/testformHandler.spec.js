import { scoreText } from '../src/client/js/formHandler'


describe("Converting the score response letter to a text value", () => {

  test("Testing the correct text value is returned for test letters", () => {
      const scoreLetter = 'P+';
           expect(scoreText(scoreLetter)).toBe('POSITIVE');
         });

  test("Testing the correct text value is returned for test letters", () => {
      const scoreLetter = 'N';
         expect(scoreText(scoreLetter)).toBe('NEGATIVE');
       });

});
