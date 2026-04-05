import { useId } from 'react';
import style from './SurveyRadio.module.css'


export default function SurveyRadio(
    {label, name, onChange }: { label: string, name: string, onChange?: () => void}) {
    const id = useId();
    return(
        <div className={style.div}>
            <input className={style.input} onChange={onChange} id={id}type="radio"name={name}/>
            <label className={style.label} htmlFor={id}>{label}</label>
        </div>
    )
}