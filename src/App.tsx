import React, { FC, useState } from "react";
import c from './App.module.less'
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { store } from "./Store/Store";


interface IAppProps {
    /* store: IStore
    onInputChange: (arg: string) => void
    addNewTask: () => void */
}

export const App: FC<IAppProps> = ({  }: IAppProps) => {

    const arr = [5, 15, 25, 34]
    const [currentArr, setCurrentarr] = useState<number[]>()

    arr.concat()
    return <div className={c.appWrapper}>
        <Header />

        {store.items.map((el, i) => {
            return <div key={i}>
                <TodoItem task={el} />
            </div>
        })}

        <Form  />

    </div>
}

