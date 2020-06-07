// Toggle Button for LIST 
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})





// HTML 

const locationList = () => {
    // Iterate the collection of fish objects
    for (const currentLocationObject of locationCollection) {

        // Convert the current fish to its HTML representation
        const locationHTML = locationConverter(currentLocationObject)

        // Find the <section> element in index.html
        const locationArticleElement = document.querySelector(".locationList")

        // Put the fish HTML representation inside the <article> element
        locationArticleElement.innerHTML += locationHTML
    }
}