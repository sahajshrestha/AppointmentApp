import { Patient } from '../models/patient';
import { prisma } from '.';


// We avoided this to be able to write our test more easily. 
// cost prisma = new PrismaClient();
// When we instantiate PrismaClient all the attributes in the schema will be instantiated. 
// Try uncommenting - prisma. and see all suggestions. 
// Loads everything on fly - Prins Loader. Loads everyhting. 

export async function getaPatients(): Promise<Patient[]> {
    return await prisma.patient.findMany({});
}

export async function getaPatient(id: number): Promise<Patient | null> {
    return await prisma.patient.findFirst({where: {id: id}});
}

// The ideal way to write this sub, is to inject the prisma client, i.e dependency injectino
// So that if db changes later we don't have to rewrite everything. 
// Should have looked like -
// function createaPatient(patient: Patient, prisma = prisma). That way when we are testing this function
// we have prisma mocked and data available. In current condition, prisma is coming from another API. Node is flexible, Java is not flexible - if we import something
// from another file, we can't mock in Java. But in node we CAN. 

export async function createaPatient(patient: Patient): Promise<Patient> {
    if(patient.firstName.length < 3) {
      throw Error("Too short name !")
    }
    return await prisma.patient.create({
        data: patient,
    });
}

// We differentiated the function names in different layers (updateaPatient here and updatePatient in service)
export async function updatePatient(
    id: number,
    updatedPatientData: Partial<Patient>
  ): Promise<Patient | null> {
    return await prisma.patient.update({
      where: { id },
      data: updatedPatientData,
    });
  }
   
  export async function deletePatient(id: number): Promise<void> {
    await prisma.patient.delete({
      where: { id },
    });
  }