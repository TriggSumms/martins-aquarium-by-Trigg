/*
    This is the only code needed. It starts the task of
    making the list of fish. The function is *defined* in
    fishList.js, but here is where you *invoke* the function
*/
// Changes made to the three invoked function to reflect database integration 
getFishData().then(
    ()=>{
    console.log("inside", fishCollection)
    fishList()
    })
    console.log("outside", fishCollection)

getTipData().then(
    ()=>{
    console.log("inside", tipCollection)
    tipList()
    })
    console.log("outside", tipCollection)

getLocationData().then(
    ()=>{
    console.log("inside", locationCollection)
    locationList()
    })
    console.log("outside", locationCollection)

getQuoteData().then(
        ()=>{
        console.log("inside", quoteCollection)
        quoteList()
        })
        console.log("outside", quoteCollection)

