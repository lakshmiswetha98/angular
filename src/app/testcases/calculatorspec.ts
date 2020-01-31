import { Calculator } from "./testcases/calculator"

describe("Testing function calc1 of Calculator", ()=>{

    beforeAll(()=>{
      
    }) 

    beforeEach(()=>{
        
    })

    
    
    afterAll(()=>{
      
    })
    
    afterEach(()=>{
      
    })

   
    // xit('Testing calc1 for negative values', ()=>{
    it('Testing calc1 for negative values', ()=>{    
        // test code
        let calc = new Calculator();
        let response = calc.calc1(-5);
        
        expect(response).toBe(0);
    })

    it('Testing calc1 for positive values', ()=>{
        let calc = new Calculator();
        let response = calc.calc1(5);
       
        expect(response).toBe(6);
    })

})
describe("Testing function calc2 of Calculator", ()=> {
    it('Testing calc2 for square root of  values', ()=>{  
        let calc = new Calculator();
        let response = calc.calc2(4);
        expect(response).toBe(2);
})
})
