package com.openclassrooms.patient.service;

import com.openclassrooms.patient.model.Patient;
import com.openclassrooms.patient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class PatientService implements IPatientService{

    private static final Logger logger = Logger.getLogger(PatientService.class.getName());

    @Autowired
    private PatientRepository patientRepository;

    //read all
    @Override
    public List<Patient> getAllPatient(){
        return patientRepository.findAll();
    }
    //read one patient
    public Optional<Patient> getOnePatient(Integer id){
        return patientRepository.findById(id);
    }
    //create
    @Override
    public Patient addPatient(Patient patient){
        return patientRepository.save(patient);
    }
    //update
    @Override
    public void updatePatient(Integer id, Patient patient){
        Optional<Patient> patientData = patientRepository.findById(id);

        if(patientData.isPresent()){
            Patient patientUpdate = patientData.get();
            patientUpdate.setFirstName(patient.getFirstName());
            patientUpdate.setLastName(patient.getLastName());
            patientUpdate.setGender(patient.getGender());
            patientUpdate.setAddress(patient.getAddress());
            patientUpdate.setBirthdate(patient.getBirthdate());
            patientUpdate.setPhoneNumber(patient.getPhoneNumber());
            logger.info("Request update Patient successful");
            patientRepository.save(patientUpdate);
        }
        logger.info("Request update Patient failed");
    }
    //delete
    @Override
    public void deletePatient(Integer id){
        if(getOnePatient(id).isPresent()){
            logger.info("Request delete Patient successful");
            patientRepository.deleteById(id);
        }
        logger.info("Request delete Patient failed");
    }


}
