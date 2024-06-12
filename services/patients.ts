import { createaPatient, deletePatient, getaPatient, getaPatients, updatePatient } from "../data/patients";
import { Patient } from "../models/patient";
export async function getPatients(): Promise<Patient[]> {
    return await getaPatients();
}

export async function createPatient(patient: Patient): Promise<Patient> {
    return await createaPatient(patient);
}

export async function getPatient(id: number): Promise<Patient | null>  {
    return await getaPatient(id);
}

export async function updateAPatient(
    id: number,
    updatedPatientData: Partial<Patient>
  ): Promise<Patient | null> {
    return await updatePatient(id, updatedPatientData);
  }
   
  export async function deleteAPatient(id: number): Promise<void> {
    return await deletePatient(id);
  }