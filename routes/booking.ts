import express from "express";
import { bookAppointment } from "../services/booking";
import { Appointment } from "../models/appointment";
import { getAllAppointments } from "../services/appointments";

// PRO TIP: We change the router name here to make it distinct from the patient router.
// so that the routers name doesn't clash
export const appointmentRouter = express.Router();

// Notice that the http 'post' method is provided by the 'router'
// PRO TIPS: After creting this route, we need to register this router by exporting it to index.ts
appointmentRouter.post('/', async (req, res) => {
    const newAppointmentData: Appointment = req.body;
    try {
      const createdAppointment = await bookAppointment(newAppointmentData);
      // PRO TIPS: If we don't use async await above, This means that the res.json(createdAppointment) line will be 
      // executed before the promise returned by bookAppointment is resolved. As a result, createdAppointment will 
      // likely be undefined or not contain the expected data.
      res.json(createdAppointment);
    } catch (error) {
      console.error(error);
      res.status(400).send('Bad Request'); // Customize error response as needed
    }
  });

//   appointmentRouter.get('/', async (req,res) => {
//     try {
//         const appointments = await getAllAppointments();
//         res.json(appointments);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

  // PRO TIPS: default exporting lets us import this module without using the braces { }
  export default appointmentRouter;