const listaCursos = document.querySelector('#listaCursos');

var requestURL = 'https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/courses.json';
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
        var mylabel2 = document.createElement('label');

        myH3.textContent = jsonObj.lista['curso'];
        mylabel1.textContent = jsonObj.lista['ano']
        mylabel2.textContent = jsonObj.lista['instituicao'];

        listItem.appendChild(myH3);
        listItem.appendChild(mylabel1);
        listItem.appendChild(mylabel2);
        listaCursos.appendChild(listItem);
        //console.log(jsonObj.lista[i])
    };
}

