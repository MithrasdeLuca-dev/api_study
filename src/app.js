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
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(3006, () => {
	console.log('teste');
});


module.exports = app;
