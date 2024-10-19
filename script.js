linkToPopUpSobreNos = document.querySelector(".link-sobre-nos");

linkToPopUpSobreNos.addEventListener(("click"), () => {
    containerPopUpSobreNos.classList.remove("hide");
});

containerPopUpSobreNos = document.querySelector(".container-pop-up-sobre-nos");

containerPopUpSobreNos.addEventListener(("click"), () => {
    containerPopUpSobreNos.classList.add("hide");   
});