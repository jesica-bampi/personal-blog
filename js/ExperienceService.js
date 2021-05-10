const experienceList = document.querySelector("#experienceList");
var requestURLExp =
  "https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/experience.json";
var requestExp = new XMLHttpRequest();
requestExp.open("GET", requestURLExp);
requestExp.responseType = "json";
requestExp.send();

requestExp.onload = function () {
  var experiences = requestExp.response.lista;
  addItemLista(experiences);
};
function addItemLista(experience) {
  for (var i = 0; i < experience.length; i++) {
    var listItem = document.createElement("li");
    var myH3 = document.createElement("h3");
    var myPar1 = document.createElement("p");
    var myPar2 = document.createElement("p");

    myH3.textContent =
      "(" +
      experience[i].initialDate +
      " - " +
      experience[i].finalDate +
      ")" +
      " - " +
      experience[i].company;
    myPar1.textContent = "Função: " + experience[i].office;
    myPar2.textContent =
      "Atividades desempenhadas: " + experience[i].description;

    listItem.appendChild(myH3);
    listItem.appendChild(myPar1);
    listItem.appendChild(myPar2);
    experienceList.appendChild(listItem);
  }
}
