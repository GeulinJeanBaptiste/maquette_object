// !!!!!!!!!!!!!!!!!!!! création de const !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const !!!!!!!!!!!!!!!!!!!!
const menu0 = document.querySelector("#menu0");
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");

// !!!!!!!!!!!!!!!!!!!! création de const submenus !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const submenus !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const submenus !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création de const submenus !!!!!!!!!!!!!!!!!!!!
const submenus0 = [
  {
    texte: "a",
    adresse: "https://a.com",
  },
  {
    texte: "b",
    adresse: "https://b.com",
  },
  {
    texte: "c",
    adresse: "https://c.com",
  },
];
const submenus1 = [
  {
    texte: "d",
    adresse: "https://d.com",
  },
  {
    texte: "e",
    adresse: "https://e.com",
  },
  {
    texte: "f",
    adresse: "https://f.com",
  },
];
const submenus2 = [
  {
    texte: "g",
    adresse: "https://g.com",
  },
  {
    texte: "h",
    adresse: "https://h.com",
  },
  {
    texte: "i",
    adresse: "https://i.com",
  },
];

// !!!!!!!!!!!!!!!!!!!! création du menu avec les ul et li !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création du menu avec les ul et li !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création du menu avec les ul et li !!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! création du menu avec les ul et li !!!!!!!!!!!!!!!!!!!!

//menu0.innerHTML +="<ul><li>"+submenus0[0].texte+"</li><li>"+submenus0[1].texte+"</li><li>"+submenus0[2].texte+"</li></ul>";
menu0.innerHTML += `<ul class="hide">
                        <li>${submenus0[0].texte}</li>
                        <li>${submenus0[1].texte}</li>
                        <li>${submenus0[2].texte}</li>
                    </ul>`;
menu1.innerHTML += `<ul class="hide">
                        <li>${submenus1[0].texte}</li>
                        <li>${submenus1[1].texte}</li>
                        <li>${submenus1[2].texte}</li>
                    </ul>`;
menu2.innerHTML += `<ul class="hide">
                        <li>${submenus2[0].texte}</li>
                        <li>${submenus2[1].texte}</li>
                        <li>${submenus2[2].texte}</li>
                    </ul>`;
menu0.addEventListener("click", function () {
  //   console.log("click menu0");
  // faire apparaitre ou disparaitre le menu0
  // est ce que document.queryselector("#menu1 ul") contient la class .show alors je doit lui retirer cette class et ajouter la .class hide
  if (document.querySelector("#menu0 ul").classList.contains("show")) {
    document.querySelector("#menu0 ul").classList.remove("show");
    document.querySelector("#menu0 ul").classList.add("hide");

    document.querySelector("#menu1 ul").classList.remove("show");
    document.querySelector("#menu1 ul").classList.add("hide");

    document.querySelector("#menu2 ul").classList.remove("show");
    document.querySelector("#menu2 ul").classList.add("hide");
  } else {
    document.querySelector("#menu0 ul").classList.add("show");
    document.querySelector("#menu0 ul").classList.remove("hide");

    document.querySelector("#menu1 ul").classList.remove("show");
    document.querySelector("#menu1 ul").classList.add("hide");

    document.querySelector("#menu2 ul").classList.remove("show");
    document.querySelector("#menu2 ul").classList.add("hide");
  }
});
menu1.addEventListener("click", function () {
  // faire apparaitre ou disparaitre le menu0
  if (document.querySelector("#menu1 ul").classList.contains("show")) {

    document.querySelector("#menu0 ul").classList.remove("show");
    document.querySelector("#menu0 ul").classList.add("hide");

    document.querySelector("#menu1 ul").classList.remove("show");
    document.querySelector("#menu1 ul").classList.add("hide");

    document.querySelector("#menu2 ul").classList.remove("show");
    document.querySelector("#menu2 ul").classList.add("hide");
  } else {
    document.querySelector("#menu0 ul").classList.remove("show");
    document.querySelector("#menu0 ul").classList.add("hide");

    document.querySelector("#menu1 ul").classList.add("show");
    document.querySelector("#menu1 ul").classList.remove("hide");

    document.querySelector("#menu2 ul").classList.remove("show");
    document.querySelector("#menu2 ul").classList.add("hide");
  }
});
menu2.addEventListener("click", function () {
  // faire apparaitre ou disparaitre le menu0
  if (document.querySelector("#menu2 ul").classList.contains("show")) {
    
    document.querySelector("#menu0 ul").classList.remove("show");
    document.querySelector("#menu0 ul").classList.add("hide");

    document.querySelector("#menu1 ul").classList.remove("show");
    document.querySelector("#menu1 ul").classList.add("hide");

    document.querySelector("#menu2 ul").classList.remove("show");
    document.querySelector("#menu2 ul").classList.add("hide");
  } else {
    document.querySelector("#menu0 ul").classList.remove("show");
    document.querySelector("#menu0 ul").classList.add("hide");

    document.querySelector("#menu1 ul").classList.remove("show");
    document.querySelector("#menu1 ul").classList.add("hide");

    document.querySelector("#menu2 ul").classList.add("show");
    document.querySelector("#menu2 ul").classList.remove("hide");
  }
});
