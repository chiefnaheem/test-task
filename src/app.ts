import express, {
  Application,
  Request,
  Response,
} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import cors from "cors";
import indexRouter from './routes';

//App variables
const app: Application = express();

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', indexRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({ status: "Running", message: "Hello from Here" });
});

export default app;