const express = require('express');
const usersRouter = require('./router/users');
const productsRouter = require('./router/products');

const app = express();

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use(express.static('views'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/404.html')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(3000, () =>
    console.log('listening to 3000...')
);

