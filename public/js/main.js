let entrer = document.querySelector(".entrer")

let trierTous = document.querySelector(".tous")

let trierFinit = document.querySelector(".faite")

let trierEnCours = document.querySelector(".enCours")

let btnFinit = document.querySelector(".finit")

let btnMod = document.querySelector(".modifier")

let btnSupr = document.querySelector(".effacer")

let body = document.body

let tache = document.querySelector(".listeTaches")


function rajoutTache() {
    entrer.addEventListener("click", () => {
        let clone = tache.cloneNode(true)
        body.appendChild(clone)
    })
}

rajoutTache()