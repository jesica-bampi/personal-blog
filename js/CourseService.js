import { JSONRequest } from "./JSONRequest.js";

export class CourseService extends JSONRequest {
  constructor() {
    super();
    this.coursesList = document.querySelector("#listaCursos");
  }
  getRequestURL() {
    return "https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/courses.json";
  }
  send() {
    this.request.onload = function () {
      var courses = this.request.response.lista;
      for (var i = 0; i < courses.length; i++) {
        this._addItemLista(courses[i]);
      }
    };
  }

  _addItemLista(course) {
    var listItem = document.createElement("li");
    var myH3 = document.createElement("h3");
    var mylabel1 = document.createElement("label");
    var myPar = document.createElement("p");

    myH3.textContent = course.curso + " - ";
    mylabel1.textContent = course.ano;
    myPar.textContent = course.instituicao;

    myH3.appendChild(mylabel1);

    listItem.appendChild(myH3);
    listItem.appendChild(myPar);
    this.coursesList.appendChild(listItem);
  }
}

