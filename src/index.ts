import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import  dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes";

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

// Routes
app.use("/dashboard", dashboardRoutes);

//Servers

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})