let btn = document.querySelector("button");
let inp = document.querySelector("input");
let div = document.querySelector("div");

btn.addEventListener("click", function () {

    // Creating list items
    let tasks = document.createElement("div");
    tasks.innerText = inp.value;
    tasks.classList.add("task");

    // Creating delete button
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("newDelete");

    div.appendChild(tasks);
    tasks.appendChild(dltbtn);

    inp.value = "";
});

div.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let list = event.target.parentElement;
        list.remove();
    }
});