var list = document.getElementById("list");

function addItem(){
    var inp = document.getElementById("input");
    var li = document.createElement("li")
    li.setAttribute("class","todo")
    var txt = document.createTextNode(inp.value);
    li.appendChild(txt)
    list.appendChild(li)
    inp.value=""
    var del = document.createElement("button")
    del.innerHTML="<i class='fa fa-trash-o' style='font-size:25px; color:red'></i>"
    del.setAttribute("onclick","delBtn(this)")
    del.setAttribute("class","actBtn btn ")
    // del.appendChild(delTxt)
    li.appendChild(del)
    // var ic = document.createElement("button")
    // ic.innerHTML="<i class='fa fa-address-book' style='font-size:24px'></i>"
    // li.appendChild(ic)
    var edit = document.createElement("button")
    edit.innerHTML="<i class='fa fa-edit' style='font-size:25px; color:blue' ></i>"
    edit.setAttribute("onclick","editButton(this)")
    edit.setAttribute("class","editBtn actBtn btn")
    // edit.appendChild(editTxt);
    li.appendChild(edit)
}

function deleteAll(){
    list.innerHTML=""
}

function delBtn(e){
e.parentNode.remove()
}

function editButton(a){
    var editItem = prompt("Enter your updated item", a.parentNode.childNodes[0].nodeValue)
    a.parentNode.childNodes[0].nodeValue=editItem   
    // console.log(a.parentNode.childNodes[0].nodeValue)
}