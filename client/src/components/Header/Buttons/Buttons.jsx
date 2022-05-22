import s from './Buttons.module.css';
//  import { useNavigate  } from "react-router-dom";

import { useNavigate } from "react-router-dom"


const Buttons = () => {
    const navigate = useNavigate();
    return (
        <div className={s.buttons_Header}>
            <button className={s.button_sighIn} onClick={() => navigate("/authorization")}>Войти</button>
            <button className={s.button_add} onClick={() => navigate("/registration")}>Подать объявление</button>
        </div>
    )
}

export default Buttons;