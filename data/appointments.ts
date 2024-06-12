
import { prisma } from ".";
import { Appointment } from "../models/appointment";

export async function createAppointment(appointment: Appointment) : Promise <Appointment> {
    return await prisma.appointment.create({data:appointment});
}
 
export async function getAppointments(): Promise<Appointment[]> {
  return await prisma.appointment.findMany({});
}

// PRO TIP: Notice that we are doing prisma.patient (vs prisma.appontment) here
// This is because we are deleting by patient id
// export async function deleteAppointment(id: number): Promise<void> {
//   await prisma.patient.delete({
//     where: { id },
//   });
// }

// PRO TIP: In TypeScript, the Partial<T> utility type is used to create a new type that represents
//  all the properties of the original type T, but with each property marked as optional. It allows 
//  us to define a type where all properties can be present or omitted.
export async function updateAppointment(
  id: number,
  updatedAppointmentData: Partial<Appointment>
): Promise<Appointment | null> {
  return await prisma.appointment.update({
    where: { id },
    data: updatedAppointmentData,
  });
}
 
// export async function getAppointmentsByPatientId(
//   patientId: number
// ): Promise<Appointment[]> {
//   return await prisma.appointment.findMany({
//     where: {
//       patientId,
//     },
//   });
// }
 