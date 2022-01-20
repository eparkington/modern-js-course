const todos = document.querySelector('.todos');
const addItem = document.querySelector('.add');
const search = document.querySelector('.search input');

//creating function makes code reusable

const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
      todos.innerHTML += html;
};

//access form values by accessing JS constant & then the form name + value

addItem.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addItem.add.value.trim();
    if(todo.length){
         generateTemplate(todo);
        
        //method .reset() resets form 
        
        addItem.reset();
    }
   
});

//delete todos -- to remove 'li' use parentElement

todos.addEventListener("click", e => {
       if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
       }    
       
          
});

const filterTodos = (term) => {
   Array.from(todos.children)
       .filter((todo) => !todo.textContent.toLowerCase().includes(term))
       .forEach((todo) => todo.classList.add('filtered'));
    
   Array.from(todos.children)
       .filter((todo) => todo.textContent.toLowerCase().includes(term))
       .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener("keyup", () => {
   const term = search.value.trim().toLowerCase();
    filterTodos(term);
    
});