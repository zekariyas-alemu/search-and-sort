const addbtn = document.querySelector('.add');
const subbtn = document.querySelector('.sub');
const divbtn = document.querySelector('.multiply');
const multibtn = document.querySelector('.divide');
const collect = document.querySelector('#inpu')

addbtn.addEventListener('click', addition);
subbtn.addEventListener('click', subtraction);
divbtn.addEventListener('click', division);
multibtn.addEventListener('click', multiplication);


function addNew(e) {

    e.preventDefault(); 


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);
} 



function addition() {
    let sum = 0;
    const
        sum = sum + parseInt(member);
   
    console.log("The total sum is " + sum);
}

function sub(firstNumber, secondNumber) {
    let difference = firstNumber - secondNumber;
    console.log( firstNumber + "-" + secondNumber + " = " + difference);
}

function multi(My_list) {
    let product = 1;
    My_list.forEach(function(member, index){
        product = product * parseInt(member);
    });
    console.log("The result  is " + product);
}

function div(firstNumber, secondNumber) {
        if (secondNumber == 0) {
            console.log("wrong input!!");
        } 
        else {
            let quotient = firstNumber / secondNumber
            console.log( firstNumber + " / " + secondNumber + " = " + quotient);
        }
    }