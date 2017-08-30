var button = document.getElementById("counter");
button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://mandirama15e.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var names = ['Name1', 'Name2', 'Name3'];
    var list = '';
    for(var i=0; i < names.lengt; i++){
        list += '<li>' +names[i] + '</li>';
    }
    var ul = documnet.getElementById('namelist');
    ul.innerHTML;
}