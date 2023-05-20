const createError = require('http-errors');
const express = require('express');

const indexRouter = require('./routes/indexRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const cursoRouter = require('./routes/cursoRouter');
const perfilRouter = require('./routes/perfilRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes engine setup
app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/curso', cursoRouter);
app.use('/perfil', perfilRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (next) {
	next(createError(404));
});

// error handler
app.use(function (error, request, response, next) {
	// set locals, only providing error in development
	response.locals.message = error.message;
	response.locals.error = request.app.get('env') === 'development' ? error : {};

	// render the error page
	response.status(error.status || 500);
	response.json('error');
});

app.listen(3006, () => console.log('Example app listening on port 3006!'));


module.exports = app;
