const express = require('express');
const mongoose = require('mongoose');
const app = express();
const adminRouter=require('./routes/admin');
const userRouter=require('./routes/user');
const cors=require('cors');

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://vishal2001lohar:Vishal123@cluster0.x3os1qm.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });



// Admin routes
app.use('/admin',adminRouter);
// User routes
app.use('/users',userRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
