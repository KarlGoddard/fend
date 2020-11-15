import { inputChecker } from '../src/client/js/inputCheck'


describe("Testing the regex check", () => {

    test("Testing only true if url starts with uninterrupted sequence of characters = http: or https:", () => {
           const urla = 'http://www.bbc.co.uk';
           expect(inputChecker(urla)).toBe(true);
         });

     test("Testing only true if url starts with uninterrupted sequence of characters = http: or https:", () => {
            const urlb = 'hthtp://www.bbc.co.uk';
            expect(inputChecker(urlb)).toBe(false);
          });

    test("Testing only true if url starts with uninterrupted sequence of characters = http: or https:", () => {
           const urlc = 'https://www.bbc.co.uk';
           expect(inputChecker(urlc)).toBe(true);
         });

     test("Testing only true if url starts with uninterrupted sequence of characters = http: or https:", () => {
            const urld = 'https//www.bbc.co.uk';
            expect(inputChecker(urld)).toBe(false);
          });
});
