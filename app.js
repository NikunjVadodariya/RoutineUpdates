const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors');
dotenv.config();

// const auth = require('./middleware/auth');
// const test = require('./api/test');
// const db = require('./db/test')();
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
        const client = await MongoClient.connect(process.env.DB);
        let routine_updates = client.db('RoutineUpdates');
        console.log('Connected to database.');

        // app.use('/test', auth, test(db, io));
        app.use(express.static('client/dist'));
        app.set('views', path.join(__dirname, '/client/dist'))
        app.set('view engine', 'ejs')

        app.get('/get_data', async (req, res) => {
            const db = require('./db/test')(routine_updates);
            let data = {};
            data = await db.get_data(data);
            console.log(data)
            res.json(data)
        })

        let ejsOptions = {
            // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
            async: true
          };

        app.get('/admin',  async (req, res) => {
            const db = require('./db/test')(routine_updates);
            let data = {};
            data = await db.get_data(data);
            console.log(data)
            return await res.render('admin', { 
                title: "category management",
                data: data[0]['categories']
            }) 
        })

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '/client/dist/index.html'))
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
