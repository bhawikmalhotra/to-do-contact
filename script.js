document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementsByClassName("app")[0];
    const appbtn = document.getElementById("app-btn");
    const contact = document.getElementsByClassName("cntbox")[0];
    const contactbtn = document.getElementById("cnt-btn");
    const home = document.getElementsByClassName("home")[0];
    const contactForm = document.getElementById('contactForm');
    const submissionMessage = document.getElementById('submissionMessage');


    appbtn.addEventListener("click", () => {
        contact.style.display = "none";
        app.style.display = "block";
        home.style.display = "none";
        appbtn.style.backgroundColor = "#007bff";
        appbtn.style.color = "white";
        contactbtn.style.backgroundColor = "";
        contactbtn.style.color = "";
    });

    contactbtn.addEventListener("click", () => {
        app.style.display = "none";
        home.style.display = "none";

        contact.style.display = "";
        contactbtn.style.backgroundColor = "#007bff";
        contactbtn.style.color = "white";
        appbtn.style.backgroundColor = "";
        appbtn.style.color = "";
    });

    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        if (!isValid) {
            event.preventDefault(); 
        } else {
            submissionMessage.innerHTML = 'Form submitted successfully!';
            contactForm.reset(); 
            setTimeout(() => {
                submissionMessage.innerHTML = '';
            }, 5000);
            event.preventDefault(); 
        }
    });

    const headingInput = document.getElementById('heading');
    const descriptionInput = document.getElementById('description');
    const addButton = document.getElementById('add-button');
    const todosContainer = document.getElementById('todos-container');

    addButton.addEventListener('click', () => {
        const headingText = headingInput.value.trim();
        const descriptionText = descriptionInput.value.trim();

        if (headingText) {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const todoText = document.createElement('div');
            todoText.classList.add('todo-text');
            const headingSpan = document.createElement('span');
            headingSpan.style.fontWeight = 'bold';
            headingSpan.textContent = headingText;
            const descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = descriptionText;
            todoText.appendChild(headingSpan);
            todoText.appendChild(descriptionSpan);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todosContainer.removeChild(todoItem);
            });

            todoItem.appendChild(todoText);
            todoItem.appendChild(deleteButton);
            todosContainer.appendChild(todoItem);

            headingInput.value = '';
            descriptionInput.value = '';
        }
    });
});