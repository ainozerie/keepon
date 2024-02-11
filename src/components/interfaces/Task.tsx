export interface TaskInterface {
    _id: string,
    title: string,
    description: string | null | undefined,
    deadline: string | null | undefined
} 

export interface NewTaskInterface {
    title: string,
    description: string,
    deadline: string
} 