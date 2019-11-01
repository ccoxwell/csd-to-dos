let mushroom = new Audio("/assets/smb_powerup.wav");
let powerDown = new Audio("/assets/smb_pipe.wav");
let stageClear = new Audio("/assets/smb_stage_clear.wav");
let previousAudio = mushroom;

let todoElementsList = Array.from(document.querySelectorAll("#to-do li"));
console.log(todoElementsList);
let todoObjList = todoElementsList.map(todo => {
  let todoEl = Array.from(todo.children);
  console.log("todoEl");
  console.log(todoEl);
  let checked = todoEl[0].checked;
  let todoId = todoEl[0].id;
  return { todoId, checked };
});

for (let i = 0; i < todoElementsList.length; i++) {
  let el = todoElementsList[i];
  el.children[1].addEventListener("mouseup", function(e) {
    let checkedList = todoElementsList.filter(el => el.children[0].checked);
    isChecked = el.children[0].checked;

    if (checkedList.length == todoElementsList.length - 1 && !isChecked) {
      previousAudio.pause();
      previousAudio.currentTime = 0;
      stageClear.play();
      previousAudio = stageClear;
      confetti.start();
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
