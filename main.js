
      //window.onload = function(){
  //textarea.focus();
//};
var comentarios = document.getElementById("comentarios");
var boton = document.getElementById("boton");
var textarea = document.getElementById("textarea");
var nome = document.getElementById("nome");
var name;
var edicion = false;
function anadir() {
  if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {
    textarea.value = "";
    textarea.focus();
  } else if (edicion === false) {
    if (
      nome === null ||
      nome.value.length === 0 ||
      /^\s+$/.test(nome.value)
    ) {
      name = "Anónimo";
    } else {
      name = nome.value;
    }
    var div = document.createElement("div");
    comentarios.appendChild(div);
    var pnom = document.createElement("p");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var eliminar = document.createElement("input");
    var editar = document.createElement("input");
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "Janeiro";
        break;
      case 1:
        mes = "Fevereiro";
        break;
      case 2:
        mes = "Março";
        break;
      case 3:
        mes = "Abril";
        break;
      case 4:
        mes = "Mayo";
        break;
      case 5:
        mes = "Junho";
        break;
      case 6:
        mes = "Julio";
        break;
      case 7:
        mes = "Agosto";
        break;
      case 8:
        mes = "Setembro";
        break;
      case 9:
        mes = "Outubro";
        break;
      case 10:
        mes = "Novembro";
        break;
      case 11:
        mes = "Dezembro";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      "Escrito por " +
      name +
      " em " +
      dia +
      " de " +
      mes +
      " de " +
      year +
      " as " +
      hora +
      ":" +
      minutos +
      ".";
    p.innerHTML = textarea.value;
    pnom.setAttribute("class", "pnom");
    p.setAttribute("class", "p");
    hr.setAttribute("class", "hr");
    eliminar.setAttribute("class", "eliminar");
    editar.setAttribute("class", "editar");
    div.appendChild(pnom);
    div.appendChild(p);
    div.appendChild(eliminar);
    div.appendChild(editar);
    div.appendChild(hr);
    textarea.value = "";
    nome.value = "";
    eliminar.type = "button";
    eliminar.value = "Eliminar";
    editar.type = "button";
    editar.value = "Editar";
    textarea.focus();
  }
  function eliminarc() {
    div.remove();
  }
  eliminar.addEventListener("click", eliminarc);
  function editarc() {
    var botone = document.createElement("input");
    botone.type = "button";
    botone.value = "Confirmar edicion";
    div.replaceChild(botone, editar);
    botone.setAttribute("class", "botone");
    textarea.value = p.innerText;
    p.innerHTML = "";
    nome.value = name; 
    textarea.focus();
    edicion = true;
    function edicionc() {
      if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {textatera.value = "";
    textarea.focus();} else {
      if (
      nome === null ||
      nome.value.length === 0 ||
      /^\s+$/.test(nome.value)
    ) {
      name = "Anónimo";
    } else {
      name = nombre.value;
    }
      var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "janeiro";
        break;
      case 1:
        mes = "Fevereiro";
        break;
      case 2:
        mes = "Março";
        break;
      case 3:
        mes = "Abril";
        break;
      case 4:
        mes = "Mayo";
        break;
      case 5:
        mes = "Junho";
        break;
      case 6:
        mes = "Julio";
        break;
      case 7:
        mes = "Agosto";
        break;
      case 8:
        mes = "Setembro";
        break;
      case 9:
        mes = "Outubro";
        break;
      case 10:
        mes = "Novembro";
        break;
      case 11:
        mes = "Dezembro";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      "Editado por " +
      name +
      " el " +
      dia +
      " de " +
      mes +
      " del " +
      year +
      " a las " +
      hora +
      ":" +
      minutos +
      ".";
      p.innerHTML = textarea.value;
      div.replaceChild(editar, botone);
      textarea.value = "";
      nome.value = "";
      textarea.focus();
      edicion = false;
      }
    }
    botone.addEventListener("click", edicionc);
  }
  editar.addEventListener("click", editarc);
}
boton.addEventListener("click", anadir);
function enter(event) {
  var codigo = event.keyCode;
  if (codigo == 13) {
    anadir();
    }
}
  textarea.addEventListener("keypress", enter);



function Tab(evt, Tab) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("Tab");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(Tab).style.display = "block";
      evt.currentTarget.className += " active";
    }

  
