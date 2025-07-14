let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('task-container');
let date = document.querySelector('.date');
let now = new Date();

let options = {
    weekday: 'long',
    year: 'numeric',
    month: "numeric",
    day: 'numeric'
}

let fullDate = now.toLocaleDateString('en-US', options);
console.log(fullDate);

let h4 = document.createElement('h4');
h4.innerText = fullDate;
date.appendChild(h4);


function addTask(){
    if(inputBox.value === ""){
        alert("Please write a Task!")
    }else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function displayData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
displayData();
