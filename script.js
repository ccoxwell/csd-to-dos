/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let todoElementsList = Array.from(document.querySelectorAll("#to-do li"));
console.log(todoElementsList);
let todoObjList = todoElementsList.map(todo => {
  let todoEl = Array.from(todo.children);
  let checked = todoEl[0].checked;
  let todoId = todoEl[0].id;
  return { todoId, checked }
});

let checkboxList = Array.from(document.querySelectorAll("input[type='checkbox']"));
for (let i = 0; i < checkboxList.length; i++) {
  let checkbox = checkboxList[i];
  checkbox.addEventListener("change", function(e) {
    updateSavedList();
  })
}

function updateSavedList() {
  
}
console.log(todoObjList);