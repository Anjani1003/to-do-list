document.querySelector("button").addEventListener("click",Addtask);

function Addtask(){

   var task = document.querySelector("input").value;
   if(task == ""){
      alert("Enter task");
   }
   else{
   let li = document.createElement("li");
   li.innerHTML = task + "<button class='button-1'>Done</button><button class='button-2'>Remove</button>";
   document.getElementById("task-list").appendChild(li);

   document.querySelector("input").value = "";
   saveData();
   }
}
document.getElementById("task-list").addEventListener("click",function(e){
   
   if(e.target.className == "button-2"){
      e.target.parentElement.remove();
      saveData();
   }

   else if (e.target.className == "button-1"){
      
      e.target.classList.add("checked");
      saveData();
   }

   else if (e.target.className == "button-1 checked"){
      
      e.target.classList.remove("checked");
      saveData();
    
   }

});



function saveData(){
   localStorage.setItem("data1",document.getElementById("task-list").innerHTML);
   
}

function showTask(){
   document.getElementById("task-list").innerHTML = localStorage.getItem("data1");
}

showTask();