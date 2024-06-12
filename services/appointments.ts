import { createAppointment, getAppointments, updateAppointment } from "../data/appointments";
import { Appointment } from "../models/appointment";
import { getPatient } from "./patients";

// Get patient's appointmens <- plular
// export async function getPatientAppointments(patientId: number): Promise<Appointment[]> {
//   return await getAppointmentsByPatientId(patientId);
// }

// Get all appointments
export async function getAllAppointments(): Promise<Appointment[]> {
  return await getAppointments();
}

// Update an appointment
export async function updateAppointmentDetails(  id: number,
  updatedAppointmentData: Partial<Appointment>): Promise<Appointment | null> {
  return await updateAppointment(id, updatedAppointmentData);
}

// Delete an appointment
// export async function cancelAppointment(id: number): Promise<void> {
//   return await deleteAppointment(id);
// }
