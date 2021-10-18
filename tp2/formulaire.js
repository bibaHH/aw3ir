function validation() {
    document.getElementById("resultat").setAttribute("hidden", 'hidden');
    document.getElementById("error").setAttribute("hidden", 'hidden');

    if (document.querySelector('input[name="civilite"]:checked') == null) {
        document.getElementById("error").innerHTML = "Choisir une civilité";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("nom").value === "") {
        document.getElementById("error").innerHTML = " La saisie du nom est obligatoire  !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("nom").value.length > 20) {
        document.getElementById("error").innerHTML = "Le nom doit contenir au max 20 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("prenom").value === "") {
        document.getElementById("error").innerHTML = " La saisie du prenom est obligatoire  !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("prenom").value.length < 5) {
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("prenom").value.length > 20) {
        document.getElementById("error").innerHTML = "Le prénom doit contenir au max 20 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("adresse").value === "") {
        document.getElementById("error").innerHTML = " La saisie du prenom est obligatoire  !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("adresse").value.length < 5) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("adresse").value.length > 50) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au max 50 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (document.getElementById("mail").value === "") {
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
    else if (validateEmail(document.getElementById("mail").value) == false){
        document.getElementById("error").innerHTML = "mail non valide";
        document.getElementById("error").removeAttribute('hidden');
    
    }
    else {
        document.getElementById("resultat").removeAttribute("hidden");
        const civ = document.querySelector('input[name="civilite"]:checked').value;
        document.getElementById("resultat").innerHTML = "Bienvenue " + civ + "." + document.querySelector("#prenom").value + " " + document.querySelector("#nom").value;

    }

}


function updateMsg() {
    const civ = document.querySelector('input[name="civilite"]:checked').value;
    document.getElementById("resultat").innerHTML = "Bienvenue " + civ
        + "." + document.querySelector("#prenom").value + " " + document.querySelector("#nom").value;

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}