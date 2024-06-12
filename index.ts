import express from 'express';
import router from "./routes/patient";
import appointmentRouter from './routes/booking';
import appointmentRouterCopy from './routes/appointment';

// To use the front end view
import swaggerUi from "swagger-ui-express";
// The file that we created 
import swaggerOutput from "./swagger_output.json";

const app = express();

app.use(express.json());

app.use("/patient",router);
app.use("/appointment",appointmentRouter);

// This one is added as part of the solution to the router instance issue
app.use("/appointment",appointmentRouterCopy);

// Including the swagger middleware
// swaggerUi serve-middle ware interprets swaggerOutput in a readable format
// Its recommended that this middleware is put at the end of all configurations
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        console.error(err.stack);
        res.status(500).send("Internal Server Error");
    }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


