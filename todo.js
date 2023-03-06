// Get references to the HTML elements
const todoInput = document.getElementById('todo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add event listener to the "Add" button
addBtn.addEventListener('click', () => {
  const todo = todoInput.value.trim(); 

  // If the todo is not empty, create a new todo item 
  if (todo) {
    const li = document.createElement('li');
    li.id = 'listItem';
    li.innerText = todo; 

    const completeBtn = document.createElement('button');
    completeBtn.id = 'completeBtn';
    completeBtn.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>';
    //When todo is complete, add a slash to it
    completeBtn.addEventListener('click', () => {
       // todo.innerText = strike(todo.innerText);
        li.style.textDecoration = 'line-through';
    });

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'deleteBtn';
    deleteBtn.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'; 
    

    deleteBtn.addEventListener('click', () => { 
      // Remove the list item when the delete button is clicked
      li.remove(); 
    });

    // Add the delete and complete button to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn); 
     // Add the list item to the task list
    todoList.appendChild(li);
    
    // Clear the task input field
    todoInput.value = ''; 
  }
});