const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let body = document.querySelector("body");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);

        let img = document.createElement("img");
        img.src = "delete.png";
        img.alt = "delete"
        img.style.width = "20px"
        img.style.height = "20px"
        img.style.cursor = "pointer"
        li.appendChild(img);
    }
    inputBox.value= '';
    saveData()
}

body.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addTask();
    }
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI" ){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();