

import s from './AboutUsPage.module.css';
import SimpleSlider from './Slider/Slider';



const AboutUsPage = () => {
    return (
        <section className={s.page_aboutUs}>
            <div className='wrapper'>
                <h1>About Us Page</h1>
                <div className={`${s.img} ${s.mersedes}`}></div>
                <div className={`${s.img} ${s.bmw}`}></div>
                <div className={s.description}>
                    {/* <img className={s.img} src="https://www.fsg.by/img/cms/remont-mercedes.jpg" alt="mersedes" /> */}
                    <h1 className={s.logo}>Auto Paradise</h1>
                    <p className={s.paragraph_description}>
                        Мы развиваем проект с 2019 года, и сегодня он входит в число <span>наиболее посещаемых ресурсов байнета</span>.
                        Наша цель — помочь пользователям в продаже, покупке и обслуживании автомобиля, предоставив для этого
                        всю необходимую информацию и сервисы. Сейчас в нашей базе около <span>55 000 объявлений</span> о продаже
                        автомобилей из Беларуси. Наши модераторы постоянно следят за актуальностью предложений и
                        оперативно реагируют на обращения пользователей. А наши журналисты находят для вас <span>интересные
                            новости</span>, освещают <span>спортивные события и выставки</span>, проводят <span>собственные тест-драйвы</span>.
                    </p>
                </div>
                <div className={s.description1}>
                    <p className={`${s.paragraph_description} ${s.desc1}`}>
                        Каждый месяц <span className={s.logo}>Auto paradise</span> посещает более <span>1 500 000 человек</span> (по данным Gemius Audience),
                        и мы стараемся, чтобы каждый мог легко и быстро найти ответы на свои вопросы.
                        Компаниям, связанным с автомобильным бизнесом, сайт предоставляет возможность
                        рассказать о себе и привлечь клиентов. Мы постоянно развиваемся, запускаем новые сервисы и открыты для предложений.
                    </p>
                </div>

            </div>
            <div className={s.reviews}>
                <div className="wrapper">
                    <SimpleSlider />
                </div>
            </div>
            <div className={s.numbers}>
                <div className="wrapper">
                    <div className={s.wrapper_block_numbers}>
                        <h2>Некоторые цифры</h2>
                        <div className={s.wrapper_numbers}>
                            <div className={`${s.item_number} ${s.item_one}`}>
                                <span className={s.span_first}>14000+</span>
                                <span className={s.span_second}>счастливых клиентов</span>
                            </div>
                            <div className={`${s.item_number} ${s.item_two}`}>
                                <span className={s.span_first}>10000+</span>
                                <span className={s.span_second}>Автомобилей</span>
                            </div>
                            <div className={`${s.item_number} ${s.item_three}`}>
                                <span className={s.span_first}>1</span>
                                <span className={s.span_second}>Года работы</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUsPage;