"use strict";
let tasks = [];
let taskIdCounter = 1;
const addTask = (title, description) => {
    const newTask = {
        id: taskIdCounter++,
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
};
const removeTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
};
const markTaskAsCompleted = (id) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    }
    else {
        console.log(`Task with id ${id} not found.`);
    }
};
const listTasks = () => {
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`);
    });
};
const listCompletedTasks = () => {
    tasks.filter(task => task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`);
    });
};
const listPendingTasks = () => {
    tasks.filter(task => !task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`);
    });
};
// Тестирование приложения
addTask("Task 1", "Description 1");
addTask("Task 2", "Description 2");
addTask("Task 3", "Description 3");
removeTask(2);
markTaskAsCompleted(1);
markTaskAsCompleted(3);
console.log("All tasks:");
listTasks();
console.log("Completed tasks:");
listCompletedTasks();
console.log("Pending tasks:");
listPendingTasks();
