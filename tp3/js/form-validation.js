window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    // Y mettre le code Javascript pour valider tous les champs du formulaire

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const date = document.querySelector("#date").value;


        if (document.getElementById("nom").value.length < 5) {
            console.log("nom error");
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs NOM doit contenir au moins 5 caractère !";
            myModal.show();

        }


        else if (document.getElementById("prenom").value.length < 5) {
            console.log("prenom error");

            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractère !";
            myModal.show();


        }

        else if (validateDate(date) == false) {
            console.log('erreur date');
            document.querySelector(".modal-title").textContent = "Erreur"
            document.querySelector(".modal-body").innerHTML = "reviens dans le présent !";
            myModal.show();

        }
        else {

            console.log('OK');
            document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("prenom").value;
            document.querySelector(".modal-body").innerHTML = " Vous etes né(e) le " + document.getElementById("date").value + " et vous habitez à ";
            document.querySelector(".modal-body2").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=8&size=200x100&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';


            myModal.show();
        }

    }


    )
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function validateDate() {
    const inputDate = document.getElementById('date').value;

    let dateNaissance = new Date(inputDate);
    let dateNaissanceTimestamp = dateNaissance.getTime();

    let nowTimestamp = Date.now();

    return (dateNaissanceTimestamp < nowTimestamp)
}
