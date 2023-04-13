import React, { FC } from "react";
import { ITask } from "../../types/types";
import c from './TodoItem.module.less'

interface ITodoItem {
    task: ITask
}

export const TodoItem: FC<ITodoItem> = ({ task }: ITodoItem) => {
    
    return <div className={c.wrapper}>
        <p>
            {task.task}
        </p>
    </div>
}