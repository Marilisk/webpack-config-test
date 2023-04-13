import { IStore } from './../types/types';
//import { rerenderApp } from './../rerenderApp';

let rerenderApp = (store: IStore) => {
    console.log(`ji`)
}

export const store: IStore = {
    items: [
        {id: 1, task: 'Позвонить шефу', isDone: false},
        {id: 2, task: 'Ответить на письма', isDone: false},
        {id: 3, task: 'Сходить в магазин', isDone: false},

    ],
    inputText: '',    
}


export const onInputChange = (text:string) => {
    store.inputText = text
    rerenderApp(store)
}

export const addNewTask = () => {
    const newTask = {
        id: store.items.length + 1,
        task: store.inputText,
        isDone: false,
    }
    store.items.push(newTask)
    store.inputText = ''
    rerenderApp(store)
}

export const subscribe = (observer: (arg: IStore) => void) => {
    rerenderApp = observer
}