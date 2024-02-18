export interface TaskInterface {
    id: string,
    title: string,
    description: string,
    deadline: string,
    completed: boolean
} 

export interface NewTaskInterface {
    title: string,
    description: string,
    deadline: string
}