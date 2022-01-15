window.onload = function () {
  console.log("DOM ready!");


  var myModal = new bootstrap.Modal(document.getElementById('myModal'));

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted!");
    const date = document.querySelector("#date").value;




    if (document.getElementById("nom").value.length < 5) {
      document.querySelector(".modal-title").textContent = "Erreur"
      document.querySelector(".modal-body").innerHTML = "Le champs NOM doit contenir au moins 5 caractères !";
      myModal.show();

    }


    else if (document.getElementById("prenom").value.length < 5) {
      document.querySelector(".modal-title").textContent = "Erreur"
      document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractères !";
      myModal.show();
    }

    else if (document.getElementById("adresse").value.length < 5) {
      document.querySelector(".modal-title").textContent = "Erreur"
      document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractères !";
      myModal.show();
    }

    else if (validateDate(date) == false) {
      document.querySelector(".modal-title").textContent = "Erreur"
      document.querySelector(".modal-body").innerHTML = "revenez dans le passé !";
      myModal.show();

    }
    else {
      console.log('OK');
      document.querySelector(".modal-title").textContent = " Bienvenus !! " + document.getElementById("prenom").value;
      document.querySelector(".modal-body").innerHTML = " Vous  êtes ajouté  à  la liste de nos contacts";
      contactStore.add(document.getElementById("prenom").value, document.getElementById("nom").value, document.getElementById("date").value, document.getElementById("adresse").value, document.getElementById("mail").value);
      localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));

      AfficheList();
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
function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + " car.";
}
function AfficheList() {

  var contactList = JSON.parse(localStorage.getItem("contactList"));
  for (var index in contactList) {

    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +

      '<tr>' +
      '<td>' + contactList[index].prenom + '</td>' +
      '<td>' + contactList[index].nom + '</td>' +
      '<td>' + contactList[index].date + '</td>' +
      '<td>' + contactList[index].adresse + '</td>' +
      '<td><a href=mailto:>' + contactList[index].mail + '</a></td>' +
      '</tr>'
  }
};

function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + " car.";
}