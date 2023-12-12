package com.openclassrooms.patient.controller;

import com.openclassrooms.patient.model.Patient;
import com.openclassrooms.patient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/patients")
    public List<Patient> getAllPatients(){
        return patientService.getAllPatient();
    }
    @GetMapping("/patients/{id}")
    public Optional<Patient> getOnePatient(@PathVariable Integer id){
        return patientService.getOnePatient(id);
    }

    @PostMapping("/patients")
    public Patient addOnePatient(@RequestBody Patient patient){
        return patientService.addPatient(patient);
    }
    @PutMapping("/patients/{id}")
    public void updatePatient(@RequestBody Patient patient, @PathVariable Integer id){
        patientService.updatePatient(id,patient);
    }
    @DeleteMapping("/patients/{id}")
    public void deletePatient(@PathVariable Integer id){
        patientService.deletePatient(id);
    }
}
