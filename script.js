let correto = new Audio("src/correto.ogg");

const some_overlay = () => {
  let cerebro = document.getElementById("cerebro");
  cerebro.style.animationName = "aparecer";

  setTimeout(() => {
    document.body.style.animationName = "bkg_escuro";
  }, 1000);

  setTimeout(() => {
    document.getElementById("caminho").style.transformOrigin =
      Math.trunc(cerebro.getBoundingClientRect().left) -
      10 +
      "px" +
      " " +
      (Math.trunc(cerebro.getBoundingClientRect().top) - 30 + "px");
    document.getElementById("caminho").style.transform = "scale(3)";
    document.getElementById("caminho").style.zIndex = 6;
    document.getElementById("acerto_alert").style.animationName = "acerto";    
    document.getElementById("overlay").style.animationName = "erro_aparece"
    document.getElementById("overlay").style.display = "inherit"
    cerebro.style.zIndex = 5;

    setTimeout(() => {
      correto.play();
    },500)

    setTimeout(() => {
      document.getElementById("caminho").style.transform = "scale(1)";
      document.getElementById("acerto_alert").style.animationName =
        "acerto_sumir";
    }, 5000);

    setTimeout(() => {
      document.body.style.animationName = "bkg_voltar";
    }, 7000);
  }, 2000);
};
