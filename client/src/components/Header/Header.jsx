import Buttons from './Buttons/Buttons';
import s from './Header.module.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <header className={s.header}>
            <div className="wrapper">
                <h1 className={s.title_header}>Auto Paradise</h1>
                <Navigation />
                <Buttons />
            </div>

        </header>
    )
}

export default Header;