/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let mushroom = new Audio("/assets/smb_powerup.wav");
let powerDown = new Audio("/assets/smb_pipe.wav");
let stageClear = new Audio("/assets/smb_stage_clear.wav");
let previousAudio = mushroom;

let todoElementsList = Array.from(document.querySelectorAll("#to-do li"));
console.log(todoElementsList);
let todoObjList = todoElementsList.map(todo => {
  let todoEl = Array.from(todo.children);
  let checked = todoEl[0].checked;
  let todoId = todoEl[0].id;
  return { todoId, checked };
});

for (let i = 0; i < todoElementsList.length; i++) {
  let el = todoElementsList[i];
  el.addEventListener("mouseup", function(e) {
    let checkedList = todoElementsList.filter(el => el.children[0].checked);
    console.log(checkedList);
    isChecked = el.children[0].checked;

    if (checkedList.length == todoElementsList.length - 1 && !isChecked) {
      previousAudio.pause();
      previousAudio.currentTime = 0;
      stageClear.play();
      previousAudio = stageClear;
    } else {
      if (!isChecked) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
        mushroom.play();
        previousAudio = mushroom;
      } else {
        previousAudio.pause();
        previousAudio.currentTime = 0;
        powerDown.play();
        previousAudio = powerDown;
      }
    }
  });
}

let checkboxList = Array.from(
  document.querySelectorAll("input[type='checkbox']")
);
for (let i = 0; i < checkboxList.length; i++) {
  let checkbox = checkboxList[i];
  checkbox.addEventListener("change", function(e) {
    updateSavedList();
  });
}

function updateSavedList() {}
