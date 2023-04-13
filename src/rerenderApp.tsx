import { App } from './App';
import React from "react";
import { createRoot } from 'react-dom/client';
import { IStore } from './types/types';
import { addNewTask, onInputChange } from './Store/Store';



const container = document.getElementById('root')
const root = createRoot(container)

export const rerenderApp = (store: IStore) => {
    root.render(<App store={store} onInputChange={onInputChange} addNewTask={addNewTask} />)
}

/* rerenderApp() */