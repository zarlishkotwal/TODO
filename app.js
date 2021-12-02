
// var todo = document.getElementById("todo")

// function addTask() {
//     var input = document.getElementById("input")

//     if (input.value.length > 0) {
        
//         var li = document.createElement("li")
//         var liTxt = document.createTextNode(input.value)
//         li.appendChild(liTxt)
        
//         var editBtn = document.createElement("button")
//         var editBtnTxt = document.createTextNode("Edit this")
//         editBtn.appendChild(editBtnTxt)
//         editBtn.setAttribute("onclick", "editTask(this)")
//         editBtn.className = "btn"
//         li.appendChild(editBtn)
//         var delBtn = document.createElement("button")
//         var delBtnTxt = document.createTextNode("Delete this")
//         delBtn.appendChild(delBtnTxt)
//         delBtn.setAttribute("onclick", "delTask(this)")
//         delBtn.className = "btn"
//         li.appendChild(delBtn)

//         todo.appendChild(li)
//         input.value = ""
//     }
//     else {
//         alert("Empty Task cannot be ADDED !")
//     }
// }

// function deleteAll() {
//     todo.innerHTML = ""
// }

// function editTask(element) {
//     var editValue = prompt("Edit Value", element.parentNode.firstChild.nodeValue)
//     element.parentNode.firstChild.nodeValue = editValue
// }

// function delTask(element) {
//     element.parentNode.remove()
// }
var todo=document.getElementById("todo")

function addTodo(){
    var input =document.getElementById("input")

    // create li tag
    var li=document.createElement("li")
    var liText=document.createTextNode(input.value)
    li.appendChild(liText)

    todo.appendChild(li)

// create delete button
    
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("id","dltbtn")


    
// Create Edit Button

    var edBtn=document.createElement("button")
    var edText=document.createTextNode("Edit")
    edBtn.appendChild(edText)
    edBtn.setAttribute("onclick","editItem(this)")
    edBtn.setAttribute("class","btn")
    edBtn.setAttribute("id","edbtn")

    input.value=""


    todo.appendChild(li)
    li.appendChild(delBtn)
    li.appendChild(edBtn)
    
    // console.log(delBtn)
    // console.log(li)
}


function deleteAll(){
    todo.innerHTML=""
}


function deleteItem(e){

    e.parentNode.remove()
    console.log()
}


function editItem(e){

    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter Edit value",val)
    e.parentNode.firstChild.nodeValue=editValue;

}