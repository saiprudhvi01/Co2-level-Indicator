const nodemailer = require('nodemailer');
const ex = require("express");
const cookieParser = require('cookie-parser');
const app = ex();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'studybuddies746@gmail.com',
        pass: 'xfrzvmsoazvdqtxj'
    }
});
app.use(cookieParser());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/email/:email", (req, res) => {
    console.log("ok");
    const mailOptions = {
        from: 'studybuddies746@gmail.com',
        to: req.params.email,
        subject: 'alert',
        text: 'THE CO2 LEVEL IS VERY HIGH PLEASE TAKE CERTAIN PRECAUSTIONS'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({ success: true })
        }
        else {
            res.json({ success: false })
        }
    });
});
const port=3000 || process.env.PORT
app.listen(port,()=>{
    console.log("Server started successfully")
});