window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code Javascript pour valider tous les champs du formulaire
    function validation() {

     const n=document.getElementById("nom")   
     const p=document.getElementById("prenom")
     const err=document.getElementById("error")
        if (n.value === '') || (n.value.length < 5) {
            err.innerHTML = " Le nom doit contenir au moins 5 caractère !!  !";
            err.removeAttribute("hidden");
        }

    


    }

    
        

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
         }
