var listExperience = document.querySelector('#listExperience')

var requestURL = 'https://raw.githubusercontent.com/jesica-bampi/personal-blog/main/json/experience.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';

request.onload = function(){
    var experience = request.response;
    montarLista(experience);
}
request.send();

function montarLista(jsonObj) {
    for (i = 0; i < jsonObj.lista.length; i++) {
        var listItem = document.createElement('li');
        var myH3 = document.createElement('h3');
        var myPar1 = document.createElement('p')
        var myPar2 = document.createElement('p');

        myH3.textContent =jsonObj.lista[i].initial-date + ' - ' + jsonObj.lista[i].final-date + ' - ' + jsonObj.lista[i].company;
        mylabel1.textContent = jsonObj.lista[i].office;
        myPar.textContent = jsonObj.lista[i].description;
        
        listItem.appendChild(myH3);
        listItem.appendChild(myPar1);
        listItem.appendChild(myPar2)
        listExperience.appendChild(listItem);
    };
}