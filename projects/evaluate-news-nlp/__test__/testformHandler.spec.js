import { ScoreText } from '../src/client/js/formHandler'


describe("Converting the score response letter to a text value", () => {

  test("Testing the correct text value is returned for test letters", () => {
      const scoreLetter = 'P+';
           expect(ScoreText(scoreLetter)).toBe('POSITIVE');
         });

  test("Testing the correct text value is returned for test letters", () => {
      const scoreLetter = 'N';
         expect(ScoreText(scoreLetter)).toBe('NEGATIVE');
       });

});
