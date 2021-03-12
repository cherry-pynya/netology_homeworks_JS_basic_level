  
const btn = document.getElementById('tasks__add');
taskList = document.getElementById('tasks__list');
input = document.getElementById('task__input');



btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value) {
        taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        ` )
        
        input.value = "";

        let remove = taskList.querySelector('.task').querySelector('.task__remove');

        remove.addEventListener('click', (e) => {
            e.preventDefault();
            let task = remove.closest('.task');
            task.remove();
        })
    }
})