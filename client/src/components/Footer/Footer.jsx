import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className='wrapper'>
                <h1 className={s.title_footer}>Auto Paradise</h1>
                <div className={s.info_footer}>
                    <div>
                        <p className={`${s.item_info} ${s.address}`}>Минск, Проспект Независимости 34, Беларусь</p>
                    </div>
                    <div>
                        <p className={`${s.item_info} ${s.phone}`}>+375-44-541-80-09</p>
                    </div>
                    <div>
                        <p className={`${s.item_info} ${s.email}`}>autoParadise@gmail.com</p>
                    </div>
                </div>
                <div className={s.social_media}>
                    <p className={s.title_social_media}>Наши социальные сети:</p>
                    <ul className={s.list_social_media}>
                        <li>
                            <a href='#' target='_blank' className={`${s.link_social_media} ${s.instagram}`}><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a className={`${s.link_social_media} ${s.twitter}`} href='#' ><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a className={`${s.link_social_media} ${s.google}`} href='#'><i className="fa-brands fa-google"></i></a>
                        </li>
                        <li>
                            <a className={`${s.link_social_media} ${s.facebook}`} href='#'><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                    </ul>
                </div>
                <div className={s.sections_footer}>
                    <p className={s.title_social_media}>Разделы:</p>
                    <ul className={s.sections_list}>
                        <li>
                            <NavLink to="/auto/usedAuto" className={navData => navData.isActive ? s.active : s.item} >Автомобили с пробегом</NavLink>
                        </li>
                        <li>
                            <NavLink to="/auto/newAuto" className={navData => navData.isActive ? s.active : s.item}>Новые автомобили</NavLink>
                        </li>
                        <li>
                            <NavLink to="/auto/moto" className={navData => navData.isActive ? s.active : s.item} >Мототехника</NavLink>
                        </li>
                        <li>
                            <NavLink to="/auto/bus" className={navData => navData.isActive ? s.active : s.item}>Автобусы</NavLink>
                        </li>

                        <li>
                            <NavLink to="/auto/trailers" className={navData => navData.isActive ? s.active : s.item}>Прицепы</NavLink>
                        </li>
                    </ul>
                    <ul className={`${s.sections_list} ${s.list2}`}>

                        <li>
                            <NavLink to="/auto/waterAuto" className={navData => navData.isActive ? s.active : s.item}>Водный транспорт</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tires" className={navData => navData.isActive ? s.active : s.item}>Шины</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>Новости</NavLink>
                        </li>
                        <li>
                            <NavLink to="/finance" className={navData => navData.isActive ? s.active : s.item}>Финансы</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus" className={navData => navData.isActive ? s.active : s.item}>О нас</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={s.partners_footer}>
                    <p className={s.title_social_media}>Наши партнеры:</p>
                    <ul className={s.list_partners}>
                        <li>
                            <a className={`${s.item_partners} ${s.yandex}`} href='https://auto.yandex/' target="_blank">Yandex auto</a>
                        </li>
                        <li>
                            <a className={`${s.item_partners} ${s.yahoo}`} href='https://www.yahoo.com/' target="_blank">Yahoo</a>
                        </li>
                        <li>
                            <a className={`${s.item_partners} ${s.bolt}`} href='https://bolt.eu/ru/drive/' target="_blank">Bolt</a>
                        </li>
                        <li>
                            <a className={`${s.item_partners} ${s.apple}`} href='https://www.apple.com/ru/ios/carplay/' target="_blank">Apple car</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;