const tipList = () => {
    // Iterate the collection of fish objects
    for (const currentTipObject of tipCollection) {

        // Convert the current fish to its HTML representation
        const tipHTML = tipConverter(currentTipObject)

        // Find the <section> element in index.html
        const tipArticleElement = document.querySelector(".tipList")

        // Put the fish HTML representation inside the <article> element
        tipArticleElement.innerHTML += tipHTML
    }
}