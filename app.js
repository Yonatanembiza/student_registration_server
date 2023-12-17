let express = require("express")
let studentRouter = require("./router/studentRouter");
let app = express();

app.use(express.json())

app.use("/students", studentRouter)

app.listen(3000, () => {
    console.log('Server is started on 3000');
})