const express = require (`express`);
const app = express();
require('dotenv').config()

const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
console.log("db",process.env.MONGO_URL);
app.use('/api/users',userRoute);
const port = process.env.PORT || 5000;


app.listen(port, ()=> console.log(`Listening on port ${port}`));