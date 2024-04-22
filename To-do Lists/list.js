let notice = document.querySelector("h3");
let addBtn = document.querySelector(".add");
let clearAllBtn = document.querySelector(".clear-all");
let clearMarkBtn = document.querySelector(".clear-mark");
let inputData = document.querySelector(".input-data");
let carryList = document.querySelector("div");




function go(oliver) {
  if (oliver.key === "Enter") {
    addBtn.click();
  }
}

inputData.addEventListener("keypress", go);

addBtn.addEventListener("click", function () {
  if (inputData.value == "") {
    notice.innerHTML = "please input something";
  } else {
    notice.innerHTML = "";

    let carryList = document.querySelector("div");
    let inputData = document.querySelector(".input-data").value;

    let list = document.createElement("li");
    let check = document.createElement("input");
    check.type = "checkbox";

    let can = carryList.appendChild(list);

    let del = document.createElement("b");
    del.style.textDecoration = "none";

    del.innerHTML = "&#10005";

    list.appendChild(del);

    del.addEventListener("click", function () {});

    list.appendChild(document.createTextNode(inputData));

    list.appendChild(check);

    // list.style.alignItems= 'center'

    check.addEventListener("click", function () {
      if (
        list.style.color == "red"
        // list.style.textDecoration = 'line-through'
      ) {
        list.style.color = "green";
        list.style.textDecoration = "none";
        list.style.boxShadow = "1px 1px 10px 5px greenyellow";
      } else {
        list.style.color = "red";
        list.style.textDecoration = "line-through";
        list.style.boxShadow = "1px 1px 10px 5px red";
        list.style.transition = "700ms";

        clearMarkBtn.addEventListener("click", function () {
          carryList.removeChild(list);
        });
      }
    });

    del.addEventListener("click", function () {
      carryList.removeChild(list);
    });

    clearAllBtn.addEventListener("click", function () {
      carryList.removeChild(list);
    });
  }
});

// night || day mode

let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode");
let list = document.querySelector("li");

let darkMode = localStorage.getItem('darkMode')

function enableDark (){
  body.classList.add('darkmode')
  localStorage.setItem('darkMode', 'enable')
}

function disenableDark (){
  body.classList.remove('darkmode')
  localStorage.setItem('darkMode', 'disable')
}

if ( darkMode === 'enable'){
  enableDark()
}

modeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if(darkMode !== 'enable'){
    enableDark()
  } else{
    disenableDark()
  }
});

// function press (e) {
//   e.key === 'Enter'
// console.log('good')
//   inputData.addEventListener('keypress', press);
// }
// function press(e) {
//   if (e.key === "Enter") {
//     addBtn.click()
//     console.log("good");
//   }

//   inputData.addEventListener("keypress", press);
// }