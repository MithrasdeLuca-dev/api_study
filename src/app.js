const express = require('express');
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const alunoRouter = require('./routes/alunoRouter');
const cursoRouter = require('./routes/cursoRouter');
const perfilRouter = require('./routes/perfilRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes engine setup
app.use('/', indexRouter);
app.use('/aluno', alunoRouter);
app.use('/curso', cursoRouter);
app.use('/perfil', perfilRouter);
app.use('/login', loginRouter);

app.listen(3006, () => {
  console.log('teste');
})

module.exports = app;
