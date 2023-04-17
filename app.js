//DOM
const touche = [...document.querySelectorAll(".bouton")];
const listeKeycode = touche.map((touche) => touche.dataset.key);

document.addEventListener("keydown", (e) => {
  const valeur = e.keycode.toString();
  claculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  claculer(valeur);
});

const claculer = (valeur) => {
    if(listeKeycode.includes(valeur)
)
};
   