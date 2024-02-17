import { NewTaskInterface, TaskInterface } from "../components/interfaces/Task";
const url: string = 'https://keepon-app-production.up.railway.app/tasks/';

const KEY = 'myTasks';

export const getTasks = () => {
    return getData();
}
export const deleteTask = (id: string) => {
    let tasks: TaskInterface[] = getData();
    tasks.splice(tasks.findIndex(t => t.id === id), 1);
    saveData(tasks);
}
export const createTask = (task: NewTaskInterface): TaskInterface => {
    let tasks: TaskInterface[] = getData();
    let newTask:TaskInterface = {...task, id: generateId(), completed: false};
    tasks.push(newTask);
    saveData(tasks);
    return newTask;
}
export const editTask = (task: TaskInterface): TaskInterface => {
    let tasks: TaskInterface[] = getData();
    let currentTaskIndex = tasks.findIndex(t => t.id === task.id);
    tasks[currentTaskIndex] = task;
    saveData(tasks);
    return task;
}

/* Generating id */
const generateId = ():string => {
    return (new Date()).getTime().toString();
}

/* Saving and retriving data from localStorage */
const saveData = (data: any):void => {
    window.localStorage.setItem(KEY, JSON.stringify(data));
}
const getData = ():any => {
    let data = window.localStorage.getItem(KEY)
    return data ?JSON.parse(data) : [];
}