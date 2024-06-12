import { createaPatient } from "../data/patients";


// Mocking: Different from stubbing. 
// Stubbing: Whenever you call the function, you have this data as output. We are stubbing as part of this test.

test('should create new Patient', async() => {
    const patient = {
        id: 1,
        firstName: "Mark",
        lastName: "zukersburg",
        email: "mark@facebook.com",
        createdAt: new Date()
    }
    const createPatientReq = {
        id: 1,
        firstName: "Mark",
        lastName: "zukersburg",
        email: "mark@facebook.com",
    }

    // Anything from prisma if they are calling patient.create ( and prisma is part of client which is mocked comes out as prismaMock) then
    // resolve it as patient. Other codes will be available as it is and only the specified portion of the function will be mocked. 
    prismaMock.patient.create.mockResolvedValue(patient)
    await expect (createaPatient(createPatientReq)).resolves.toEqual(patient)
})


