package com.openclassrooms.risque.service;

import com.openclassrooms.risque.beans.PatientBean;
import com.openclassrooms.risque.proxies.PatientProxy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

@Service
public class RiskService {

    private PatientProxy patientProxy;

    public RiskService(PatientProxy patientProxy) {
        this.patientProxy = patientProxy;
    }

    public List<PatientBean> test(){
        return patientProxy.listDesPatients();
    }

    public List<PatientBean> calculateAge(){
        List<PatientBean> listPatient = patientProxy.listDesPatients();

        for(PatientBean patients : listPatient){
            LocalDate birthdate = patients.getBirthdate();
            LocalDate currentDate = LocalDate.now();
            Integer patientAge = Period.between(birthdate,currentDate).getYears();
            patients.setAge(patientAge);
        }
        return listPatient;
    }

    public void numberOfTrigger(){
    }

    public String setRiskLevel(Integer patId){


        return null;
    }
}
