import { JSONRequest } from "./JSONRequest.js";

export class ExperienceService extends JSONRequest {
  constructor() {
    super();
    this.experienceList = document.querySelector("#listExperience");
  }

  getRequestURL() {
    return "https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/experience.json";
  }

  send() {
    this.request.onload = function () {
      var experiences = this.request.response.lista;
      for (var i = 0; i < experiences.length; i++) {
        this._addItemLista(experiences[i]);
      }
    };
  }
  
  _addItemLista(experience) {
    var listItem = document.createElement("li");
    var myH3 = document.createElement("h3");
    var myPar1 = document.createElement("p");
    var myPar2 = document.createElement("p");

    myH3.textContent =
      "(" +
      experience.initialDate +
      " - " +
      experience.finalDate +
      ")" +
      " - " +
      experience.company;
    myPar1.textContent = "Função: " + experience.office;
    myPar2.textContent = "Atividades desempenhadas: " + experience.description;

    listItem.appendChild(myH3);
    listItem.appendChild(myPar1);
    listItem.appendChild(myPar2);
    experienceList.appendChild(listItem);
  }
}
