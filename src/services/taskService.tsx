import axios from "axios";
import { NewTaskInterface } from "../components/interfaces/Task";
const url: string = 'https://keepon-app-production.up.railway.app/tasks/';

export const getTasks = () => {
    return axios.get(url);
}
export const deleteTask = (id: string) => {
    return axios.delete(url + id);
}
export const createTaskOperation = (task: NewTaskInterface) => {
    return axios.post(url, task);
}