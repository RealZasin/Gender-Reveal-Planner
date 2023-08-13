// Henter elementer fra HTML
const todoInput = document.getElementById('todoInput'); // Input-feltet der brukeren skriver oppgaver
const addButton = document.getElementById('addButton'); // Knappen for å legge til oppgaver
const todoList = document.getElementById('todoList'); // Listen der oppgavene vises

// Henter lagrede oppgaver fra nettleserens localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

// Function for å vise oppgavene på nettsiden
function renderTodos() {
    todoList.innerHTML = ''; // Tømmer listen før jeg fyller den på nytt
    savedTodos.forEach((todo, index) => {
        const li = document.createElement('li'); // Oppretter et <li> element for hver oppgave
        li.textContent = todo; // Setter teksten til oppgaven
        const removeButton = document.createElement('button'); // Oppretter en knapp for å fjerne oppgaven
        removeButton.textContent = 'Remove'; // Setter skriften i knappen til "Remove"
        // Legger til en eventListener for å fjerne oppgaven når knappen klikkes
        removeButton.addEventListener('click', () => removeTodo(index));
        li.appendChild(removeButton); // Legger til knappen inne i <li> elementet
        todoList.appendChild(li); // Legger <li> elementet til listen
    });
}

// Function for å legge til ny oppgave
function addTodo() {
    const newTodo = todoInput.value.trim();
    const errorContainer = document.getElementById('errorContainer'); // Henter errorContainer fra HTML

    if (newTodo !== '') {
        errorContainer.textContent = ''; // Fjerner tidligere feilmelding
        savedTodos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(savedTodos));
        todoInput.value = '';
        renderTodos();
    } else {
        errorContainer.textContent = 'Please enter a task before adding.'; // Viser feilmelding
    }
}


// Function for å fjerne oppgave
function removeTodo(index) {
    savedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(savedTodos));
    renderTodos();

    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = ''; // Fjerner feilmelding
}


// EventListeners
addButton.addEventListener('click', addTodo); // Legger til oppgave når "Add" knappen klikkes
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo(); // Legger til oppgave når "Enter" tasten trykkes i input-feltet
    }
});


renderTodos(); // Kaller Function for å vise oppgavene når siden lastes









