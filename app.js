const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const corsMiddleware = require('./middleware/cors.middleware');




const app = express();
const PORT = config.get('port') || 5500;

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'));
        
        app.listen(PORT, () => {
            console.log(`App has srarted on port ${PORT}`)
        })
    } catch (error) {
        console.log('Server error', error.message);
        process.exit(1); //Завершение процесса при ошибке
    }
}

start();
