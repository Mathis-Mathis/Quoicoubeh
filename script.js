const verifierNombrePremier = () => {
    const nombre = document.getElementById("inputNumber").value;
  
    if (nombre >= 2) {
      let estPremier = true;
  
      for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
          estPremier = false;
          break;
        }
      }

      if(estPremier) {
        afficherReponse("premier");
      } else {
        afficherReponse("pasPremier");
      }
  } else {
    afficherReponse("syntaxError");
  }
}
  
  const afficherReponse = (type) => {
    const divReponse = document.getElementById("reponse");
    const divReponseImg = document.getElementById("reponseImg");

    divReponseImg.innerHTML = "";

    switch (type) {
      case "premier":
        divReponse.innerHTML = "Votre valeur est premier";
        const imgPath = "img/premier.jpg";
        const img = document.createElement("img");
        img.src = imgPath;
        divReponseImg.appendChild(img);
        break;

      case "pasPremier":
        divReponse.innerHTML = "Votre valeur n'est pas premier";
        break;
        
      case "syntaxError":
        divReponse.innerHTML = "Votre valeur doit être supérieure ou égale à 2";
        break;
    }
  }

  
  