import express from "express";
import { Patient } from "../models/patient";
import { createPatient, deleteAPatient, getPatient, getPatients, updateAPatient } from "../services/patients";

const router = express.Router();

router.get("/",async (req,res)=>{
    const patient = await getPatients();
    res.json(patient);
});

router.post("/", async (req, res) => {
    const newPatient: Patient = req.body;
    try {
        const patient = await createPatient(newPatient);
        res.json(patient);
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
})

router.put("/:id", async (req, res) => {
    const patientId = parseInt(req.params.id);
    const updatedPatientData: Partial<Patient> = req.body; // Allow partial updates
    try {
      const updatedPatient = await updateAPatient(
        patientId,
        updatedPatientData
      );
      if (updatedPatient) {
        res.json(updatedPatient);
      } else {
        res.status(404).send("Not Found");
      }
    } catch (error) {
      console.error(error);
      res.status(400).send("Bad Request"); // Customize error response as needed
    }
  });

  router.delete("/:id", async (req, res) => {
    const patientId = parseInt(req.params.id);
    try {
      await deleteAPatient(patientId);
      res.sendStatus(204); // No Content
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  router.get("/:id",async (req,res)=>{
    const patientId = parseInt(req.params.id);
    try {
        const patient = await getPatient(patientId);
        if (!patient) {
            console.log('Patient not found');
            res.status(404).send("Patient not found");
        }
        res.json(patient);
      } catch (error) {
        // More Generic Error Message here since we know that its not 'Patient Not Found'
        console.error(error);
        res.status(500).send("Bad request");
      }
});


export default router;