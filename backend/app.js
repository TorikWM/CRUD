const express=require("express");
const connectDB=require("./config/connection")
const app=express();
//c connect database
connectDB();

//middleware
app.use(express.json())

app.use('/api/contacts',require('./routes/contact'))
const port= 5000;
app.listen(port, ()=> console.log(`server started on port ${port}`));