import { NavLink } from "react-router-dom";

import s from './Navigation.module.css';

const Navigation = (props) => {

   

    return (

        <div className={s.link_header}>
            <div className={s.nav_auto}>
                <NavLink to="/auto" className={navData => navData.isActive ? s.active : s.item + ' ' + `${s.link_auto}`}>Авто</NavLink>
                <ul className={s.list_nav}>
                <li>
                    <NavLink to="/auto/usedAuto" className={navData => navData.isActive ? s.active : s.item}>Автомобили с пробегом</NavLink>
                </li>
                <li>
                    <NavLink to="/auto/newAuto" className={navData => navData.isActive ? s.active : s.item}>Новые автомобили</NavLink>
                </li>
                <li>
                    <NavLink to="/auto/moto" className={navData => navData.isActive ? s.active : s.item}>Мототехника</NavLink>
                </li>
                <li>
                    <NavLink to="/auto/bus" className={navData => navData.isActive ? s.active : s.item}>Автобусы</NavLink>
                </li>
                <li>
                    <NavLink to="/auto/trailers" className={navData => navData.isActive ? s.active : s.item}>Прицепы</NavLink>
                </li>
                <li>
                    <NavLink to="/auto/waterAuto" className={navData => navData.isActive ? s.active : s.item}>Водный транспорт</NavLink>
                </li>

            </ul>
            </div>
            
            <NavLink to="/tires" className={navData => navData.isActive ? s.active : s.item}>Шины</NavLink>
            <NavLink to="/news" onClick={props.newsData} className={navData => navData.isActive ? s.active : s.item}>Новости</NavLink>
            <NavLink to="/finance" className={navData => navData.isActive ? s.active : s.item}>Финансы</NavLink>
            <NavLink to="/aboutus" className={navData => navData.isActive ? s.active : s.item}>О нас</NavLink>
            
        </div>

    )
}

export default Navigation;