
// Modal-cards;
const mod = document.querySelectorAll(".modal-1");
const annuler = document.querySelectorAll(".btn-annuler");
const btnlire = document.querySelectorAll(".Momo");

// console.log(commande);


btnlire.forEach((lire, index) => {
  lire.addEventListener("click", (e) => {
    mod[index].classList.add("gene-modal");
  })
});

annuler.forEach((ann, index) => {
  ann.addEventListener("click", (e) => {
    mod[index].classList.remove("gene-modal");
    e.preventDefault();
  });
});

const svgnav = document.querySelector(".svg_nav");
const  navbar = document.querySelector(".nav");

// const navpub = document.querySelector(".navpub")

// navpub.addEventListener("click", ()=>{
//   navbar.classList.toggle("activenav");
// });

svgnav.addEventListener("click",(e)=>{
  navbar.classList.toggle("activenav");
});

// Modal demande
const commande=document.querySelectorAll(".boutonDemande");
const modDemande=document.querySelector(".modal_demande");
const btnannd=document.querySelector(".btnModal_demande");


commande.forEach((com, index) =>{
     com.addEventListener("click", (e) =>{
       /*alert("Cette fonctionnalite n'est pas encore ajoute contactez nous ou envoyer nous un email pour les suits necessaires .");*/
       modDemande.classList.add("activeModaldemand");
      e.preventDefault();

    });

    btnannd.addEventListener("click",(e) =>{
        modDemande.classList.remove("activeModaldemand");
        e.preventDefault();
    } );
});

// a propos
// const pers = document.getElementsByClassName("person1");
// const blockPers = document.querySelector(".soustwo_apropos2");
// const circlePers = document.querySelector(".soustwo_apropos1");
// const textgroup = document.querySelector(".txtgroup");


// pers[0].addEventListener("click", ()=>{
 
//   blockPers.classList.toggle("gene_soustwo_apropos2");
//   textgroup.classList.toggle("txtgroupplus");
  
// });
// pers[1].addEventListener("click", ()=>{
 
//   blockPers.classList.toggle("gene_soustwo_apropos2");
//   textgroup.classList.toggle("txtgroupplus");
  
// });
// pers[2].addEventListener("click", ()=>{
 
//   blockPers.classList.toggle("gene_soustwo_apropos2");
//   textgroup.classList.toggle("txtgroupplus");
  
// });
// pers[3].addEventListener("click", ()=>{
 
//   blockPers.classList.toggle("gene_soustwo_apropos2");
//   textgroup.classList.toggle("txtgroupplus");
  
// });
// pers[4].addEventListener("click", ()=>{
 
//   blockPers.classList.toggle("gene_soustwo_apropos2");
//   textgroup.classList.toggle("txtgroupplus");
  
// });












