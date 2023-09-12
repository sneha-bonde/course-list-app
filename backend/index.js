const express= require("express");
require('./db/Config');
const User = require("./db/User");
const app = express();
app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))  

const Jwt = require('jsonwebtoken');
const jwtkey = 'course-list';
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "Something went wrong, Please try after sometime" });
        }
        resp.send({ result, auth: token })
    })
})


app.listen(5000);
