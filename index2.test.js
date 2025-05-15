test("Number Comparision", () => {
  const value = 3 + 3;
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(5);
  expect(value).toBeLessThan(7);
  expect(value).toBeLessThanOrEqual(6);
  expect(value).toBe(6);
  expect(value).toEqual(6);


  const floatValue = 0.2 + 0.1;
  expect(floatValue).toBeCloseTo(0.3, 5) 

  expect("developer").not.toMatch(/I/);
   expect("developer").toMatch(/dev/);
});


describe.only("Array Matcher", ()=> {
   it("Array Matcher", ()=> {
     const toDoList = [
        'Buy Groceries',
        'Clean Room',
        'Pay Utilities',
        'Rent',
        'Credit Card'
    ]
    expect(toDoList).toContain('Rent');
   })

   it("Exception Matchers", ()=> {
    function openInvalidFile() {
        throw new Error('file not foumd')
    }
    expect(()=> openInvalidFile()).toThrow();
    expect(()=> openInvalidFile()).toThrow(Error);
    expect(()=> openInvalidFile()).toThrow('file not found');
    expect(()=> openInvalidFile()).toThrow(/not found/);
   })
})
