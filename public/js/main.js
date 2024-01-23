let entrer = document.querySelector(".entrer")

let trierTous = document.querySelector(".tous")

let trierFinit = document.querySelector(".faite")

let trierEnCours = document.querySelector(".enCours")

let btnFinit = document.querySelector(".finit")

let btnMod = document.querySelector(".modifier")

let btnSupr = document.querySelector(".effacer")

let body = document.body

let tache = document.querySelector(".listeTaches")

let input = document.querySelector("#enter")

let contenuTache = document.querySelector(".titreTache")

function rajoutTache() {

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          let clone = tache.cloneNode(true)
            body.appendChild(clone)
            contenuTache.value = input.value
        }
        
    });
    
    entrer.addEventListener("click", () => {
        let clone = tache.cloneNode(true)
        body.appendChild(clone)
        contenuTache.value = input.value

    });
}

rajoutTache()