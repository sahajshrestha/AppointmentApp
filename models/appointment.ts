export interface Appointment {
    id?: number;
    patientId: number;
    doctor: string;
    dateTime: string;
    description: string;
    createdAt?: Date; // Optional for existing data
  }