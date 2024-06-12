import express from "express";
import { getAllAppointments, updateAppointmentDetails } from "../services/appointments";

// Instead of doing this -
// const router = express.Router();
// we will import an appointmentRouter

// But OOoooppps, this will not work, because we are tyring to define routes on the same 
// ROUTER INSTANCE in both files. Wehn we use same router instance on multiple files, there
// could be conflict amongs the routes if same http methods are found. Granted that we are not
// conflicting it here. Then why did we run into this issue? We do want to reuse the INSTANCE.


// The alternate or solution for the above issue, if we want to reuse the instance is, to export it,
// and then reassign it to a new variable and then EXPORT that variable.
import appointmentRouter from "./booking";


//SOLUTION:
const appointmentRouterCopy = appointmentRouter;


//SOLUTION: I also renamed appointmentRouter to appointmentRouterCopy below
appointmentRouterCopy.get('/', async (req,res) => {
    try {
        const appointments = await getAllAppointments();
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

appointmentRouterCopy.put('/:id', async (req,res) => {
    // Since we are getting id from request parameter
    const apptId = parseInt(req.params.id);
    try {
        const appointment = await updateAppointmentDetails(apptId, req.body);
        if (appointment) {
            res.json(appointment);
        } else {
            res.status(404).send("Appointment not found");
        }
        res.json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//SOLUTION: I exported this as part of the solution. Then I need to register it in index.ts
// I feel like the issue arose because this export thinggy was not present at all while we 
// were trying to reuse the appointmentRouter instance on its own, but not sure why or how it
// would cause the issue.
export default appointmentRouterCopy;



// Personal Reflection: Even though we started our code form data layer, I feel like it's easier to understand
// if we start it from router, which is from here, that way we will know how the parameters or values are flowing 
// in and onto the functions. 