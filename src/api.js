const express = require('express');
require('express-async-errors');
const userRouter = require('./routes/user.routes');
const loginRouter = require('./routes/login.routes');
const errorMiddleware = require('./middleware/error.middleware');
// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
