var button = document.getElementById("counter");
button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               var names = ['Name1', 'Name2', 'Name3'];
    var list = '';
    for(var i=0; i < names.length; i++){
        list += '<li>' +names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
    };
    request.open('GET', 'http://mandirama15e.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var names = request.responseText;
    names = JSON.parse();
    var list = '';
    for(var i=0; i < names.length; i++){
        list += '<li>' +names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}