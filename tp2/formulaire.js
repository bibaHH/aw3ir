function validation ()
{
document.getElementById("resultat").setAttribute("hidden",'hidden');
document.getElementById("error").setAttribute("hidden",'hidden');

if (document.getElementById("nom").value === "" ) { 
    document.getElementById("error").innerHTML = " La saisie du nom est obligatoire  !";
    document.getElementById("error").removeAttribute("hidden");
}    
else if (document.getElementById("nom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }  
else if (document.getElementById("nom").value.length > 20 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au max 20 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }  
else if (document.getElementById("prenom").value === "" ) { 
        document.getElementById("error").innerHTML = " La saisie du prenom est obligatoire  !";
        document.getElementById("error").removeAttribute("hidden");
    }    
else if(document.getElementById("prenom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden"); 
    }    
    else if (document.getElementById("prenom").value.length > 20 ) { 
        document.getElementById("error").innerHTML = "Le prénom doit contenir au max 20 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    } 
    else if (document.getElementById("adresse").value === "" ) { 
        document.getElementById("error").innerHTML = " La saisie du prenom est obligatoire  !";
        document.getElementById("error").removeAttribute("hidden");
    } 
     else if(document.getElementById("adresse").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }    
    else if (document.getElementById("adresse").value.length > 50 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au max 50 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }
     else if(document.getElementById("mail").value === "") { 
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }    
  
     else {
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;

     }

 }
