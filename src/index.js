document.addEventListener("DOMContentLoaded", () => {
  
  const createTaskForm = document.getElementById("create-task-form") //task form
  const tasksList = document.getElementById("tasks") //ul tasks list

  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault() //default is to post request to db, so prevent it posting to the void (because this lesson doesnt have a db)

    const userInputField = event.target.querySelector("#new-task-description") 

    const userInput = userInputField.value //this is the value that the user types into the input field
    
    console.log(userInput)

    const pTag = document.createElement("p") //creates a p tag element
    pTag.innerHTML = userInput //makes the users input the p tags inner html
    console.log(pTag)

    tasksList.appendChild(pTag) //appends pTag text to the tasks list
  })
});


//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated.



