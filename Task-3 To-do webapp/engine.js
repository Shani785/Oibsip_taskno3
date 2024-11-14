document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("inp");
    const addTaskBtn = document.getElementById("btn");
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");

    addTaskBtn.addEventListener("click", () => {
        const taskValue = taskInput.value.trim();
        if (taskValue === "") return;

        const taskItem = createTaskItem(taskValue);
        pendingTasks.appendChild(taskItem);
        taskInput.value = "";
    });

    function createTaskItem(taskValue) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskValue} <small>${new Date().toLocaleString()}</small></span>
            <div>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        li.querySelector(".complete").addEventListener("click", () => {
            completedTasks.appendChild(li);
            li.querySelector(".complete").style.display = 'none';
        });
        li.querySelector(".edit").addEventListener("click", () => {
            const newTaskValue = prompt("Edit task:", taskValue);
            if (newTaskValue) {
                li.querySelector("span").innerHTML = `${newTaskValue} <small>${new Date().toLocaleString()}</small>`;
            }
        });
        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
        });

        return li;
    }
});
