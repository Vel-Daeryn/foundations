const buttons = document.querySelectorAll("nav > button")
const articles = document.querySelectorAll("article")
const tabs = document.getElementById("tabs")

tabs.addEventListener("click", (e) => {
    if(e.target.matches(".button")){
        
        // store the value of data-tab, which is a number, of the specific button
        let dataNumber = e.target.dataset.tab
        
        // remove the class "active" of each buttons whenever the user click on one of them
        buttons.forEach(el => {
            el.classList.remove("active")
            el.setAttribute("aria-selected", "false")
        })

        // isolate the button selected by the user, and append to it the class active
        e.target.classList.add("active")
        
        // set the hidden attribute to all articles whenever the user click on one of the buttons
        for(let article of articles) {
            article.setAttribute("hidden", "hidden")
        }

        // get the article by his ID, and the number linked with data-tab to ensure the right article appears
        let showArticle = document.getElementById("tab" + dataNumber)
        showArticle.removeAttribute("hidden")
        e.target.setAttribute("aria-selected", "true")
    }
})