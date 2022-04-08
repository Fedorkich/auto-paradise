import s from './Buttons.module.css';
import { NavLink } from "react-router-dom";

const Buttons = () => {
    return (
        <div className={s.buttons_Header}>
            <button className={s.button_sighIn}>Войти</button>
            <button className={s.button_add}>Подать объявление</button>
        </div>
    )
}

export default Buttons;