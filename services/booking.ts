
import { createAppointment } from "../data/appointments";
import { Appointment } from "../models/appointment";
import { getPatient } from "./patients";

// Create an appointment
export async function bookAppointment(apt: Appointment): Promise<Appointment> {
    console.log(apt);
    const patient = await getPatient(apt.patientId);
    // Serive layer is for business logic and our business logic here is -
    // CHECK IF THE PATIENT EXISTS OR NOT BEFORE CREATING AN ENCOUNTER
    if (!patient) {
      throw new Error("Patient not found");
    }
    return await createAppointment(apt);
  }
