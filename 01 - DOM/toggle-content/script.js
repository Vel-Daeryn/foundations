/* 
Defining the elements that will :
 1 - Be used to listen the visitor interaction
 2 - Be modified by said interaction
 3 - A variable that will switch everything without needing to read the DOM at each iteration
 */
const button = document.getElementById("toggle-button")
const hiddenSection = document.getElementById("toggle")

let isShown = false

/*
Function that will listen specifically to the click of the button defined by the ID "toggle-button"
*/

button.addEventListener("click", (e) => {
    /*
    Initial statement + modifying it to be the reverse of what it is.
    From false (hidden), to true (shown)
    */
    isShown = !isShown
    button.setAttribute('aria-expanded', isShown.toString())
    /*
    Verification of the actual state of the section (hidden or shown, false or true).
    Modifying the DOM in accordance to said state.
    */
    if (isShown === true) {
        hiddenSection.removeAttribute("hidden")
        button.textContent = "Hide"
    }
    else {
        hiddenSection.setAttribute("hidden", "hidden")
        button.textContent = "Show"
    }
})