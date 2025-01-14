import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import  dotenv from "dotenv";

// Route Imports

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//*******************************//

//Servers

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})