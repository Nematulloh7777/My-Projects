document.addEventListener('DOMContentLoaded', () => {
    
    const taskInput = document.getElementById("taskInput"),
          addTaskButton = document.getElementById("addTaskButton"),
          taskList = document.getElementById("taskList"),
          modal = document.getElementById("myModal"),
          saveButton = document.getElementById('saveEditedTask'),
          cancelButton = document.getElementById('cancelEdit'),
          cancel = document.querySelector('.close'),
          editedTaskInput = document.getElementById('editedTaskInput'),
          btn_error_msg = document.getElementById('errorMessage');

    const all_tasks = {
        tasks: []
    };

    addTaskButton.addEventListener("click", handleAddTaskButtonClick);
    taskInput.addEventListener("keyup", handleTaskInputKeyUp);

    function handleAddTaskButtonClick() {
        btn_error_msg.textContent = '';
        taskInput.classList.remove("error-input");
        addTask(taskInput.value);
    }

    function handleTaskInputKeyUp(event) {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    }

    function addTask(taskText) {
        const trimmedText = taskText.trim();
        if (trimmedText !== "") {
            all_tasks.tasks.push(trimmedText);
            all_tasks.tasks.sort();
            appendTaskToList(trimmedText); 
            taskInput.value = '';
            btn_error_msg.textContent = ''; 
            taskInput.classList.remove("error-input");
        } else {
            btn_error_msg.textContent = 'Введите новую задачу';
            taskInput.classList.add("error-input");
        }
    }

    function appendTaskToList(taskText) {
        const taskNumber = all_tasks.tasks.length;
        const taskItemContainer = document.createElement("li");
        
        const taskItem = document.createElement("div");
        taskItem.textContent = `${taskNumber}) ${truncateText(taskText, 30)}`;

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("icons-container");

        const checkIcon = createIcon("fa-check-circle", "green"),
              thumbtack = createIcon("fa-thumbtack", "#7e4ade"),
              editIcon = createIcon("fa-edit", "#74C0FC"),
              trashIcon = createIcon("fa-trash", "#f41606");

        iconsContainer.appendChild(checkIcon);
        iconsContainer.appendChild(thumbtack);
        iconsContainer.appendChild(editIcon);
        iconsContainer.appendChild(trashIcon);

        checkIcon.addEventListener("click", () => {
            taskItem.classList.toggle("task-done");
    
            if (taskItem.classList.contains("task-done")) {
                taskList.appendChild(taskItemContainer); 
            }
        });

        thumbtack.addEventListener("click", () => {
            if (taskItemContainer.classList.contains("pinned-task")) {
                taskItemContainer.classList.remove("pinned-task");
            } else {
                taskList.prepend(taskItemContainer); 
                taskItemContainer.classList.add("pinned-task");
            }
        });

        editIcon.addEventListener("click", () => {
            modal.style.display = "block";
            editedTaskInput.value = taskText;

            saveButton.addEventListener("click", () => {
                const updatedTaskText = editedTaskInput.value.trim();
                if (updatedTaskText !== "") {
                    taskText = updatedTaskText;
                    taskItem.textContent = `${taskNumber}) ${taskText}`;
                }
                modal.style.display = "none";
            });

            cancelButton.addEventListener("click", () => {
                modal.style.display = "none";
            });

            cancel.addEventListener("click", () => {
                modal.style.display = "none";
            });
        });

        trashIcon.addEventListener("click", () => {
            taskItemContainer.remove();
            const taskIndex = all_tasks.tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                all_tasks.tasks.splice(taskIndex, 1);
            }
            emptyTask();
        });
        emptyTask();
        taskItemContainer.appendChild(taskItem);
        taskItemContainer.appendChild(iconsContainer);
        taskList.appendChild(taskItemContainer);
    }

    function createIcon(className, color) {
        const icon = document.createElement("i");
        icon.classList.add("fas", className);
        icon.style.color = color;
        return icon;
    }

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    function emptyTask () {
        const emptyMessage = document.createElement("span");

        if (all_tasks.tasks.length === 0) {
            emptyMessage.classList.add("empty-message");
            emptyMessage.textContent = 'Список задач пусто!';
            taskList.appendChild(emptyMessage);  
        } else {
            const existingEmptyMessage = taskList.querySelector(".empty-message");
            if (existingEmptyMessage) {
                existingEmptyMessage.remove(); 
            }
        }
    }
    emptyTask()

    
    // Theme-тема
    const themeSwitch = document.getElementById('themeSwitch'),
          sunIcon = document.getElementById('sunIcon'),
          moonIcon = document.getElementById('moonIcon'),
          currentDate = new Date(),
          currentHour = currentDate.getHours();

    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        toggleIcons();
    });

    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        } else {
            changeThemeByTime();
        }
        toggleIcons();
    });

    function changeThemeByTime() {
        const theme = currentHour >= 17 || currentHour < 7 ? 'dark' : 'light'; 
        document.body.classList.toggle('dark-theme', theme === 'dark');
        toggleIcons();
    }
    
    function toggleIcons() {
        if (document.body.classList.contains('dark-theme')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    }

    
});



