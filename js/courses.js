const listaCursos = document.querySelector('#listaCursos');

var requestURL = 'https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/courses.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';

request.onload = function(){
    var cursos = request.response;
    montarLista(cursos);
}
request.send();

function montarLista(jsonObj) {
    for (i = 0; i < jsonObj.lista.length; i++) {
        var listItem = document.createElement('li');
        var myH3 = document.createElement('h3');
        var mylabel1 = document.createElement('label')
        var myPar = document.createElement('p');

        myH3.textContent =jsonObj.lista[i].curso + ' - ';
        mylabel1.textContent = jsonObj.lista[i].ano;
        myPar.textContent = jsonObj.lista[i].instituicao;

        myH3.appendChild(mylabel1);
        
        listItem.appendChild(myH3);
        listItem.appendChild(myPar);
        listaCursos.appendChild(listItem);
    };
}

