import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import router from './route/bookRoute.js'

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/books', router);
const PORT = process.env.PORT || 5000;

sequelize.sync().then(()=>{
    console.log('Mysql database connected sucessfully ');
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
}).catch((err)=>{console.error('Database Connection Error:', err)})









