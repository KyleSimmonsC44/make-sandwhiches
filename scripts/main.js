// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!

const makeSandwich = (protein, cheese, veggie, bread) =>{
    const newSandwhich = {
        protein: protein,
        cheese: cheese,
        veg: veggie,
        bread: bread
    }
    return newSandwhich
}
const subwayOrder = makeSandwich("Sweet Onion Chicken Teryaki", "Pepperjack","Bannana Peppers","Whole Wheat" )
console.log(subwayOrder)