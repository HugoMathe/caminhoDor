let correto = new Audio("src/correto.ogg");
let errado = new Audio("src/errado.ogg");

let textos_obj = {
  obj: [
    { 1: "Mão Direita" },
    { 2: "Células danificadas inflamadas/Fibras nervosas sensoriais" },
    { 3: "Neurônio de 1ª Ordem" },
    { 4: "Substância P" },
    { 5: "Corno Dorsal" },
    { 6: "Sinapse" },
    { 7: "Neurônio de 2ª Ordem" },
    { 8: "Trato espinotalâmico" },
    { 9: "Tronco Cerebral" },
    { 10: "Via Ascendente" },
    { 11: "Via Descendente" },
    { 12: "Tálamo" },
    { 13: "Neurônio de 3ª ordem" },
    { 14: "Percepção da Dor" },
    { 15: "Córtex Cerebral" },
    { 16: "Neurotrans 5HT/NA" },
    { 17: "Interneurônio" },
    { 18: "Encefalinas (Opioide)" },
  ],
};

console.log(textos_obj.obj[0][1]);

//Telas
tela_quiz = () => {
  document.getElementById("container").style.animationName = "acerto_sumir";

  setTimeout(() => {
    document.getElementById("container").style.display = "none";
    document.getElementById("btn_home").className = "material-icons icons";
    document.getElementById("btn_quiz").className =
      "material-icons icons_selected";
    let quiz = document.getElementById("quiz");
    quiz.style.display = "flex";
    quiz.style.animationName = "acerto";

    if (document.getElementById("quiz").innerHTML == "") {
      let i = 0;
      while (i < 18) {
        let div_opcao = document.createElement("li");
        div_opcao.className = "opcao";
        quiz.appendChild(div_opcao);

        let texto_opc = i + 1;

        let texto = document.createElement("p");
        texto.innerHTML = textos_obj.obj[i][i + 1];
        texto.id = "txt_" + texto_opc;
        div_opcao.appendChild(texto);

        let select = document.createElement("select");
        select.id = "select_" + texto_opc;

        div_opcao.appendChild(select);

        select.onchange = () =>
          verificador(select.value, texto_opc, texto.id, select.id);

        let contador_option = 1;

        let option_ini = document.createElement("option");
        option_ini.value = "";
        option_ini.innerHTML = "";
        select.appendChild(option_ini);

        while (contador_option <= 18) {
          let option = document.createElement("option");
          option.value = contador_option;
          option.innerHTML = contador_option;
          select.appendChild(option);
          contador_option++;
        }

        i++;
      }
      var ul = document.getElementById("quiz");
      for (let j = ul.children.length; j >= 0; j--) {
        ul.appendChild(ul.children[(Math.random() * j) | 0]);
      }
    }
  }, 1000);
};

tela_home = () => {
  try {
    document.getElementById("quiz").style.animationName = "acerto_sumir";
  } catch {}
  setTimeout(() => {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("container").style.animationName = "acerto";
    document.getElementById("container").style.display = "flex";
  }, 1000);
  document.getElementById("btn_home").className =
    "material-icons icons_selected";
  document.getElementById("btn_quiz").className = "material-icons icons";
};

// Fim Telas

//Ações

verificador = (valor, correto, id_texto, id_select) => {
  if (valor == correto) {
    document.getElementById(id_texto).style.color = "#01ea77";
    document.getElementById(id_select).style.color = "#000000";
    document.getElementById(id_select).disabled = "true";
    let opcao_id_img = "opcao_" + correto;
    acerto(opcao_id_img);
  } else {
    document.getElementById(id_texto).style.color = "#fe0000";
    document.getElementById(id_select).style.color = "#fe0000";
    erro();
  }
  console.log(id_texto, id_select, valor, correto);
};

acerto = (opcao_id_img) => {
  tela_home();

  document.getElementById("acerto_alert").style.borderColor = "#01ea77";
  document.getElementById("acerto_alert").innerHTML =
    "<span class='material-icons acerto'> check_circle </span>";
  document.getElementById("acerto_alert").innerHTML += "<p>Você Acertou!</p>";

  let opcao = document.getElementById(opcao_id_img);
  opcao.style.animationName = "aparecer";

  setTimeout(() => {
    document.body.style.animationName = "bkg_escuro";
  }, 1000);

  console.log(opcao_id_img);

  setTimeout(() => {
    if (
      opcao_id_img == "opcao_2" ||
      opcao_id_img == "opcao_3" ||
      opcao_id_img == "opcao_4" ||
      opcao_id_img == "opcao_6" ||
      opcao_id_img == "opcao_7" ||
      opcao_id_img == "opcao_10" ||
      opcao_id_img == "opcao_14" ||
      opcao_id_img == "opcao_16" ||
      opcao_id_img == "opcao_17" ||
      opcao_id_img == "opcao_18"
    ) {
    } else {
      if (window.matchMedia("(orientation: portrait)").matches) {
        document.getElementById("container").style.transformOrigin =
          Math.trunc(opcao.getBoundingClientRect().left) -
          10 +
          "px" +
          " " +
          (Math.trunc(opcao.getBoundingClientRect().top) - 30 + "px");

        document.getElementById("container").style.transform = "scale(3)";
      }
    }

    document.getElementById("container").style.zIndex = 6;
    document.getElementById("acerto_alert").style.animationName = "acerto";
    opcao.style.zIndex = 5;

    setTimeout(() => {
      correto.play();
    }, 500);

    setTimeout(() => {
      document.getElementById("container").style.transform = "scale(1)";
      document.getElementById("acerto_alert").style.animationName =
        "acerto_sumir";
      document.getElementById("overlay").style.animationName = "acerto_sumir";
    }, 5000);

    setTimeout(() => {
      document.body.style.animationName = "bkg_voltar";
    }, 7000);
  }, 2000);
};

erro = () => {
  errado.play();
  document.getElementById("overlay").style.animationName = "acerto";
  document.getElementById("overlay").style.display = "inherit";
  setTimeout(() => {
    document.getElementById("overlay").style.animationName = "acerto_sumir";
  }, 200);
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
  }, 600);
  document.getElementById("acerto_alert").style.borderColor = "#fe0000";
  document.getElementById("acerto_alert").innerHTML =
    "<span class='material-icons acerto'> highlight_off </span>";
  document.getElementById("acerto_alert").innerHTML += "<p>Você errou!</p>";
  document.getElementById("acerto_alert").style.animationDuration = "1.5s";
  document.getElementById("acerto_alert").style.animationName = "acerto";

  setTimeout(() => {
    document.getElementById("acerto_alert").style.animationName =
      "acerto_sumir";
  }, 3000);
};
// Fim Ações
