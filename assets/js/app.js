// Define UI Variables
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const ascendBtn = document.querySelector('#ascending');
const descendBtn = document.querySelector('#descending');
const reloadIcon = document.querySelector('.fa');
var sorted = true;
form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);

ascendBtn.addEventListener('click', ascend);

descendBtn.addEventListener('click', descend);

// Change the color of reload icon
reloadIcon.style.color = 'white';

function addNewTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    taskInput.style.borderColor = 'red';

    return;
  }
  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  const Elink = document.createElement('a');
  Elink.className = 'edit-item secondary-content';
  Elink.innerHTML = '<i class="fa fa-edit"></i>';
  console.log(Elink);

  li.appendChild(link);
  li.appendChild(Elink);

  taskList.appendChild(li);

  taskInput.value = '';
}

function clearAllTasks() {
  if (confirm('Are You sure You want to clear all tasks')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

// Filter tasks function definition
function filterTasks(e) {
  /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */
  let search = filter.value.toUpperCase();
  const searchRes = document.querySelectorAll('.collection-item');
  console.log(searchRes);
  searchRes.forEach((val) => {
    if (val.textContent.toUpperCase().indexOf(search) > -1) {
      val.style.display = 'block';
    } else if (val.textContent.toUpperCase() != search) {
      val.style.display = 'none';
    }
    if (search == '') {
      searchRes.forEach((val) => {
        val.style.display = 'block';
      });
    }
  });
}

// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure about that ?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.parentElement.classList.contains('edit-item')) {
    const edit = e.target.parentElement.parentElement.innerText;
    taskInput.value = edit;
    e.target.parentElement.parentElement.remove();
  }
}

// Reload Page Function
function reloadPage() {
  //using the reload fun on location object
  location.reload();
}

function taskSort(){

    const registeredTasks = document.querySelectorAll('.collection-item')
  
    let taskDates = [];
  
    registeredTasks.forEach(function(elements){
  
             taskDates.push(elements.value);     
  
    })
  
    
    taskDates.sort();
    console.log(taskDates)
    let len = taskDates.length;
  
    if(sortOptions.value == "1"){
  
      taskDates = taskDates.reverse();
      console.log(taskDates)
    }
  
    for(let i=len; i>=0; i-- ){
  
      registeredTasks.forEach(function(elements){
  
          if(taskDates[i] == elements.value){
  
              taskList.appendChild(elements);
          }
  })
  
  }
      
  }