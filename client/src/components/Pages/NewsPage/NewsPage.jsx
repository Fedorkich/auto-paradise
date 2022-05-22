

import axios from 'axios';
import s from './NewsPage.module.css';






const NewsPage = (props) => {
    // const checkImage = (url) => {
    //     let request = new XMLHttpRequest();
    //     request.open("HEAD",url,true);
    //     request.send();
    //     console.log(request.status)
    //     // request.onload= function(){
    //     //     if(request.status === 200) {
    //     //         console.log("privet")
    //     //     }else {
    //     //         console.log("Vsw Ploxoooooooooo");
    //     //     }
    //     // }
    // }
    const array = props.arrayNews.map((element) => {
        
        return (
            <div className={s.newsItem} key={element.title}>
                <a className={s.linkNewsItem} href={element.link} target="_blank">
                    <div className={s.wrapperLink}>

                        <img  className={s.imageNewsItem}
                            src={
                                element.image_url
                            }
                            
                            alt="Тут должна была быть картинка, но максим пидор!!!" />

                    </div>
                    <h1 className={s.titleLink}>{element.title}</h1>
                </a>
            </div>
        )
    });

    return (
        <div>
            <div className={s.wrapper}>
                <h1 className={s.titleNewsPage}>Новости Автомобильного Мира</h1>
                <div className={s.wrapperNewsBlock}>
                    {
                        array
                    }
                </div>

            </div>

        </div>
    )
}

export default NewsPage;