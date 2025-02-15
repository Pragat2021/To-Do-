function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerText = taskText;

    li.onclick = function () {
      li.classList.toggle('completed'); // Toggle 'completed' class on click
    };

    taskList.insertBefore(li, taskList.childNodes[0]); // Insert the new task at the top
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}
const inputField = document.getElementById('taskInput');
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
