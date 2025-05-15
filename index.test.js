const multiply = require('./index');

//  TEST SUITE
test("2 and 5  multiply equal 10",async()=>{
    expect(multiply(2, 5)).toBe(10); //exact equality ===
})


test("2 and 5  multiply not equal 4",async()=>{
    expect(multiply(2, 5)).not.toBe(4); 
})


describe("deep equality", ()=>{
    it("Object Equality",()=>{
        const data = {alpha: 'A'}
        data['beta']='B'
        expect(data).toEqual({alpha: 'A', beta: 'B'}) //deep equality ==
    })

    it("Null Values", ()=> {
        const value=null;
        expect(value).toBeNull();
        expect(value).toBeDefined();
        expect(value).not.toBeUndefined();
        expect(value).not.toBeTruthy();
        expect(value).toBeFalsy();
    })

    it("Zero Values", ()=> {
        const value=0;
        expect(value).not.toBeNull();
        expect(value).toBeDefined();
        expect(value).not.toBeUndefined();
        expect(value).not.toBeTruthy();
        expect(value).toBeFalsy();
    })
})
