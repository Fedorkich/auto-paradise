import { useForm } from 'react-hook-form';
import { useState } from 'react';
import data from '../../../cars.json';
import Select from 'react-select';

import s from './AdPage.module.css';

const AdPage = () => {
    const [marka, setMarka] = useState("");
    const [model, setModel] = useState("");
    const [modification, setModification] = useState("");
    const [carBody, setcarBody] = useState("");
    const [engine, setEngine] = useState("");
    const [driveUnit, setDriveUnit] = useState("");
    const [transmission, setTransmission] = useState("");
    const [textArea, setTextArea] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();

    const changeHandlerMarka = (event) => {
        setMarka({ value: event.value, label: event.label });
        setModel("");
        console.log(marka);
    }
    const changeHandlerModel = (event) => {
        setModel({ value: event.value, label: event.label });
    }

    const changeHandlerModification = (event) => {
        setModification({ value: event.value, label: event.label });
    }

    const changeHandlerCarBody = (event) => {
        setcarBody({ value: event.value, label: event.label });
    }

    const changeHandlerEngine = (event) => {
        setEngine({ value: event.value, label: event.label });
    }

    const changeHandlerDriveUnit = (event) => {
        setDriveUnit({ value: event.value, label: event.value });
    }

    const changeHandlerTransmission = (event) => {
        setTransmission({ value: event.value, label: event.label });
    }

    const changeHandlerTextArea = (event) => {
        setTextArea(event.value);
    }

    const changeHandlerPrice = (event) => {
        setPrice(event.value);
    }

    const changeHandlerName = (event) => {
        setName(event.value);
    }

    const changeHandlerCity = (event) => {
        setCity(event.value);
    }

    const changeHandlerPhone = (event) => {
        setPhone(event.value);
    }

    const optionsMarka = Object.keys(data.list).map(el => {
        return {
            value: el,
            label: el
        }
    })
    let optionsModel = {};
    if (marka) {
        optionsModel = data.list[marka.value].map(e => {
            return {
                value: e,
                label: e
            }
        }
        )
    } else {
        optionsModel = [{
            value: "не Выбрана марка",
            label: "не выбрана марка"
        },]
    }
    const optionsModification = [
        {
            value: "Gt",
            label: "Gt"
        },
        {
            value: "Cl",
            label: "Cl"
        },
        {
            value: "Lx",
            label: "Lx"
        },
        {
            value: "Wrc",
            label: "Wrc"
        }

    ]
    const optionsCarBody = [
        { value: "Седан", label: "Седан" },
        { value: "Внедорожник", label: "Внедорожник" },
        { value: "Универсал", label: "Универсал" },
        { value: "Хетчбэк", label: "Хетчбэк" },
        { value: "Лифтбэк", label: "Лифтбэк" },
        { value: "Минивэн", label: "Минивэн" },
        { value: "Микроавтобус", label: "Микроавтобус" },
        { value: "Купэ", label: "Купэ" },
        { value: "Фургон", label: "Фургон" },
        { value: "Пикап", label: "Пикап" },
        { value: "Кабриолет", label: "Кабриолет" },
        { value: "Лимузин", label: "Лимузин" }
    ]

    const optionsEngine = [
        { value: "Бензин", label: "Бензин" },
        { value: "Дизель", label: "Дизель" },
        { value: "Электро", label: "Электро" }
    ]

    const optionsDriveUnit = [
        { value: "Передний", label: "Передний" },
        { value: "Задний", label: "Задний" },
        { value: "Полный", label: "Полный" },
    ]

    const optionsTransmission = [
        { value: "Автомат", label: "Автомат" },
        { value: "Механика", label: "Механика" }
    ]

    return (
        <div className={s.postingAd}>
            <div className={s.wrapper_form}>
                <p className={s.title}>Подача объявления</p>
                <div className={s.wrapperAdPage}>
                    <form action="">
                        <p className={s.titleSelect}>Выберите марку автомобиля</p>
                        <div className={s.selectItem}>
                            <Select options={optionsMarka} onChange={changeHandlerMarka} value={marka} />
                        </div>
                        <p className={s.titleSelect}>Выберите модель автомобиля</p>
                        <div className={s.selectItem}>
                            <Select options={optionsModel} onChange={changeHandlerModel} value={model} />
                        </div>
                        <p className={s.titleSelect}>Выберите модификацию</p>
                        <div className={s.selectItem}>
                            <Select options={optionsModification} onChange={changeHandlerModification} value={modification} />
                        </div>
                        <p className={s.titleSelect}>Выберите кузов автомобиля</p>
                        <div className={s.selectItem}>
                            <Select options={optionsCarBody} onChange={changeHandlerCarBody} value={carBody} />
                        </div>
                        <p className={s.titleSelect}>Выберите тип двигателя</p>
                        <div className={s.selectItem}>
                            <Select options={optionsEngine} onChange={changeHandlerEngine} value={engine} />
                        </div>
                        <p className={s.titleSelect}>Введите объем двигателя</p>
                        <div className={s.selectItem}>
                            <input className={s.input} type="number" step={0.1} min="0" />
                        </div>
                        <p className={s.titleSelect}>Выберите тип привода</p>
                        <div className={s.selectItem}>
                            <Select options={optionsDriveUnit} onChange={changeHandlerDriveUnit} value={driveUnit} />
                        </div>
                        <p className={s.titleSelect}>Коробка передач</p>
                        <div className={s.selectItem}>
                            <Select options={optionsTransmission} onChange={changeHandlerTransmission} value={transmission} />
                        </div>
                        <p className={s.titleSelect}>Описание автомобиля</p>
                        <div className={s.selectItem}>
                            <div className={s.textarea}>
                                <textarea name="description" id=""  value={textArea} onChange={changeHandlerTextArea}> </textarea>
                            </div>
                            
                        </div>
                        <p className={s.titleSelect}>Цена автомобиля</p>
                        <div className={s.selectItem}>
                            <input className={s.input} type="number" step={10} min="0" value={price} onChange={changeHandlerPrice} />
                        </div>
                        <p className={s.titleSelect}>Ваше имя</p>
                        <div className={s.selectItem}>
                            <input className={s.input} type="text" value={name} onChange={changeHandlerName} />
                        </div>
                        <p className={s.titleSelect}>Ваш город</p>
                        <div className={s.selectItem}>
                            <input className={s.input} type="text" value={city} onChange={changeHandlerCity} />
                        </div>
                        <p className={s.titleSelect}>Ваш телефон</p>
                        <div className={s.selectItem}>
                            <input className={s.input} type="tel" value={phone} onChange={changeHandlerPhone} pattern="[+]{1}[0-9]{11,14}" />
                        </div>
                        <div className={s.buttonWrapper}>
                            <button className={s.buttonAd}>Загрузить изображения</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default AdPage;