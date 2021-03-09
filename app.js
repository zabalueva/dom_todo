const tasks = document.querySelector('.tasks');


tasks.addEventListener('click', (e) => {
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		tasks.removeChild(li)
	}
})


const addForm = document.forms['add-task'];
addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;

	const li = document.createElement('li');
	const taskName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	taskName.textContent = value;
	taskName.classList.add('name');

	deleteBtn.textContent = 'delete';
	deleteBtn.classList.add('delete');

	li.appendChild(taskName);
	li.appendChild(deleteBtn);
	tasks.appendChild(li);
})