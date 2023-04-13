import React, { FC } from "react";
import c from './Form.module.less'

interface IForm {
    /* inputText: string
    onInputChange:(arg: string) => void
    addNewTask: () => void */
}

export const Form: FC<IForm> = ({ /* inputText, onInputChange, addNewTask */ }: IForm) => {

    return <div className={c.form}>
    <input type={'text'}
        /* value={inputText}  */
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //onInputChange(e.target.value)
            console.log('fghjk')
    }} />

    <button type='button' /* onClick={() => addNewTask()} */ >
        добавить
    </button>
</div>
}