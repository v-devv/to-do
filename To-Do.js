function addTask(){
    let taskValue = document.querySelector(".input-text");
    const inputValue = taskValue.value.trim(); // Trim to remove extra spaces
    // Check if input is not empty
    if (inputValue === "") {
        return;  // Exit the function if input is empty
    }
    


    let taskul = document.createElement("ul");
    taskul.className="divison"
    let taskol = document.createElement("ol");
    taskol.innerHTML=taskValue.value;
    taskol.className="list"

    let btnDiv = document.createElement("div");
    btnDiv.className="buttondiv";
    let btnDel = document.createElement("button");
    btnDel.className="delete"
    btnDel.innerHTML="Delete";
    let btnComp = document.createElement("button");
    btnComp.className="complete"
    btnComp.innerHTML="Complete";
    btnDiv.appendChild(btnDel);
    btnDiv.appendChild(btnComp);
    taskul.appendChild(taskol);
    taskul.appendChild(btnDiv);
    let taskCon=document.querySelector(".taskContainer");
    taskCon.appendChild(taskul);
    // Clear the input field immediately, whether or not the input is empty
    taskValue.value = "";
    btnDel.onclick = function() {
        taskul.remove();  // This will remove the entire task (ul)
    };
    btnComp.onclick = function() {
        if (taskol.style.textDecoration === "line-through") {
            // If already completed, revert to normal
            taskol.style.textDecoration = "none";
            btnComp.style.backgroundColor = "";
        } else {
            // If not completed, mark it as complete
            taskol.style.textDecoration = "line-through";
            btnComp.style.backgroundColor = "gray";
        }
    };
    
}
