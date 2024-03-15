//
const todoInput = document.getElementById('todo-input');
const todoListItems = [];

todoInput.addEventListener('keypress', function (e) {

   // console.log(e);
    if (e.key === 'Enter') {
        //listens for a Enter pressed and then creates an instance of E
        e.preventDefault();

        //grabs the value from E and sets it to the variable todo
        const todo = e.target.value;
        todoListItems.push(todo);

        // testing code
        console.log('todo list: ', todoListItems);

        // creates variables for todo-list element and list elements only needed when Enter is pressed
        const todoListElement = document.getElementById('todo-list');
        const createListElement = document.createElement('li');
        
        //appends whatever is in todo onto the list
        createListElement.append(todo);
        
        todoListElement.append(createListElement);
        
        e.target.value = '';
    }
});

