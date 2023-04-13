export interface ITask {
    id: number
    task: string
    deadline?: Date
    isDone: boolean
}

export interface IStore {
    items: ITask[]
    inputText: string
}