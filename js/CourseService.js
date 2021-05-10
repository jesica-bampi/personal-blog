const courseList = document.querySelector("#courseList");
var requestURL =
  "https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/courses.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var courses = request.response.lista;
  addLista(courses);
};

function addLista(course) {
  for (var i = 0; i < course.length; i++) {
    var listItem = document.createElement("li");
    var myH3 = document.createElement("h3");
    var mylabel1 = document.createElement("label");
    var myPar = document.createElement("p");

    myH3.textContent = course[i].curso + " - ";
    mylabel1.textContent = course[i].ano;
    myPar.textContent = course[i].instituicao;

    myH3.appendChild(mylabel1);

    listItem.appendChild(myH3);
    listItem.appendChild(myPar);
    courseList.appendChild(listItem);
  }
}
