

// Controls a toggle option for the display of godly fish
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
    if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    }
    if (userChoice === "regular") {
        clearFishList()
        showRegularFish()
    }
})





// Toggle Button for LIST 
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})



/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const showHolyFish = () => {
    //Get holy fish array
    const holyFishArray = mostHolyFish();
//iterate holyFish array
    for (const holyFishObject of holyFishArray) {
       const holyFishHTMLRepresentation = fishConverter(holyFishObject)
       const fishArticleElement = document.querySelector(".fishList")
       fishArticleElement.innerHTML += holyFishHTMLRepresentation
    }
}
const showSoldierFish = () => {
    //Get holy fish array
    const soldierFishArray = soldierFish();
//iterate holyFish array
    for (const soldierFishObject of soldierFishArray) {
       const soldierFishHTMLRepresentation = fishConverter(soldierFishObject)
       const fishArticleElement = document.querySelector(".fishList")
       fishArticleElement.innerHTML += soldierFishHTMLRepresentation
    }
}
const showRegularFish = () => {
    //Get holy fish array
    const regularFishArray = regularFish();
//iterate holyFish array
    for (const regularFishObject of regularFishArray) {
       const regularFishHTMLRepresentation = fishConverter(regularFishObject)
       const fishArticleElement = document.querySelector(".fishList")
       fishArticleElement.innerHTML += regularFishHTMLRepresentation
    }
}



const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showRegularFish()
}

 /*     // Iterate the collection of fish objects
    for (const currentFishObject of fishCollection) {

        // Convert the current fish to its HTML representation
        const fishHTML = fishConverter(currentFishObject)

        // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        // Put the fish HTML representation inside the <article> element
        fishArticleElement.innerHTML += fishHTML
    }
}*/




/* FOMO: ALTERNATIVE FUNCTION TRAINING N' Concise organization VIA STEVE 
REFER TO CLASS VIDEO--> 6/03
*/