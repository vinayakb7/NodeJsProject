const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: '*',
};

//MiddleWare run before the endpoints, so we can get any data before it hits endpoint
//MiddleWare
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(CustomMiddleWare);

//routes
const productRoutes = require('./Routes/productRouter');
app.use(productRoutes)

const reviewRoutes = require('./Routes/reviewRouter');
app.use(reviewRoutes)

//CustomMiddleWare
// function CustomMiddleWare(req,res,next){
//     console.log('Custom MiddleWare is Running');
//     next();
// }

//API's
// app.get('/home', auth ,(req,res)=> {
//     res.json({message : 'Hello'});
//     console.log('HomePage Running');
// })

// function auth(req,res,next){
//     if(req.query.admin==='true'){
//         next();
//     }
//     else{
//         res.send('Auth is Required...')
//     }
// }

//Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server Running on ${PORT}`);
})