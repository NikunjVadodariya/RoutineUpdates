const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors');
dotenv.config();

// const auth = require('./middleware/auth');
// const test = require('./api/test');
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = require('http').createServer(app);
const io = require('socket.io')(server).of('/test');
server.listen(port, () => {
    console.log(`listening at port ${port}`)
});

(async () => {
    try {
        // const client = await MongoClient.connect(process.env.DB);
        // console.log('Connected to database.');
        // const db = client.db('test');

        // app.use('/test', auth, test(db, io));
        app.use(express.static('client/dist'));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'index.html'))
        })
        // app.use((req, res, next) => {
        //     let err = new Error('Not Found');
        //     err.status = 404;
        //     next(err);
        // });

        // app.use((err, req, res, _) => {
        //     res.status(err.status || 500).json({message: err.message});
        // });

    } catch (e) {
        console.log('Cannot connect');
        console.log(e);
        process.exit(1);
    }
})();

module.exports = app;
