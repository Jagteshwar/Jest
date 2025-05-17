//ASYNC UNIT TEST
const fetchData = require("./fetchData");

test("the data is chocolate with promise", () => {
  return fetchData().then((data) => {
    expect(data).toBe("chocolate");
  });
});

test("the data is chocolate with async await", async () => {
  const data = await fetchData();
  expect(data).toBe("chocolate");
});

test('ASYNC TEST', async ()=>{
    await expect(fetchData(true)).rejects.toMatch('error occured.')
})
