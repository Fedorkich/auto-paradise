import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registration } from '../../../actions/User';
import { useNavigate } from "react-router-dom"

import s from './Registration.module.css';




const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [errorR, setErrorR] = useState("");
    const [positiveResult, setPositiveResult] = useState("");
    const navigate = useNavigate();
    let errorRegisrt = {
        name: "error"
    };
    const [password, setPassword] = useState("");
    const {
        register, //позволяет регистрировать различные поля для формы
        formState: {
            errors
        },
        handleSubmit,
    } = useForm()

    const changeHandlerInputEmail = (event) => {
        setErrorR("");
        setPositiveResult("")
        setEmail(event.target.value);
    }

    const changeHandlerInputPassword = (event) => {
        setPassword(event.target.value);
    }

    const submitForm = (data) => {
        registration(email, password).then((res) => {
            if (res.data) {
                setPositiveResult(res.data.message);
                setTimeout(()=>{
                    navigate("/tires")
                },2000)
            }
            else {
                errorRegisrt.error = res;
                setErrorR(res);
            }

        })
            .catch(e => console.log(e))
    }

    return (
        <div className={s.wrapper_form}>
            <div className={s.center}>
                <h1>Auto Paradise</h1>
                <form className={s.form}
                    onSubmit={handleSubmit(submitForm)}
                >
                    <div className={s.inputbox}>
                        <input
                            className={s.input_item}
                            {...register("email", {
                                required: "Поле email обязательно к заполнению"
                            })}
                            value={email}
                            onChange={changeHandlerInputEmail}
                            type="email"
                            placeholder="Email"
                        />
                        <span>Email</span>
                    </div>
                    {
                        errors?.email && <p className={s.error_paragraph}>
                            {errors?.email.message || "Error"}
                        </p>
                    }
                    <div className={s.inputbox}>
                        <input
                            className={s.input_item}
                            {...register("password", {
                                required: "Поле password обязательно к заполнению",
                                minLength: {
                                    value: 6,
                                    message: "Пароль должен быть не менее 6 символов"
                                }
                            })}
                            value={password}
                            onChange={changeHandlerInputPassword}
                            type="password"
                            placeholder="Password"
                        />
                        <span>Password</span>
                    </div>
                    {
                        errors?.password && <p className={s.error_paragraph}>
                            {errors?.password.message || "Error"}
                        </p>
                    }

                    {
                        (errorR !== "") ? <p className={s.error_paragraph}>
                            {errorR}
                        </p> : <p className={s.disN}></p>

                    }
                    {
                        (positiveResult !== "") ? <p className={s.positive_paragraph}>
                            {positiveResult}
                        </p> : <p className={s.disN}></p>

                    }
                    <div className={s.inputbox}>
                        <input
                            className={s.input_item}
                            type="submit"
                            value="submit"
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegistrationPage;