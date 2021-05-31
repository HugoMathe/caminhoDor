let correto = new Audio("src/correto.ogg");
let errado = new Audio("src/errado.ogg");

const acerto = () => {
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
    cerebro.style.zIndex = 5;

    setTimeout(() => {
      correto.play();
    },500)

    setTimeout(() => {
      document.getElementById("caminho").style.transform = "scale(1)";
      document.getElementById("acerto_alert").style.animationName =
        "acerto_sumir";
      document.getElementById("overlay").style.animationName = "acerto_sumir"
    }, 5000);

    setTimeout(() => {
      document.body.style.animationName = "bkg_voltar";
    }, 7000);
  }, 2000);
};

const erro = () => {
  errado.play();
  document.getElementById("overlay").style.animationName = "acerto"
  document.getElementById("overlay").style.display = "inherit"
  setTimeout(() => {
    document.getElementById("overlay").style.animationName = "acerto_sumir"
  },200)
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none"
  },600)
}