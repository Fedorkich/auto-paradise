const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const { response } = require('express');
const router = Router();

//обработка двух пост-запросов

// /api/auth/register

router.post(
    '/register',
    [
        check('email', 'Некорректный email!!!').isEmail(),
        check('password', 'Миинмальная длина пароля 6 символов')
            .isLength({ min: 6 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации!!!'
                })
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email: email });
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже существует!!!' });
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email: email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: 'Пользователь успешно создан.' });
        } catch (error) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!!' })
        }
    })

// /api/auth/login

router.post('/login',
    [
        check('email', 'Вветите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации!!!'
                })
            }
            const { email, password } = req.body;
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(400).json({ message: 'Такого пользователя не существет!!!' })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Неправильный пароль, повторите попытку!!!' });
            }
            const token = jwt.sign(
                // {userId: user.id}
                {userEmail: user.email},
                config.get('jwtSecret'),
                {expiresIn: '1h'} //время жизни токена
            )
            res.json({token, userEmail: user.email});
        } catch (error) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!!' })
        }
    })

module.exports = router;