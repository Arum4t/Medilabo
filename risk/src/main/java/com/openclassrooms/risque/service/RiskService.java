package com.openclassrooms.risque.service;

import com.openclassrooms.risque.beans.NoteBean;
import com.openclassrooms.risque.beans.PatientBean;
import com.openclassrooms.risque.model.Risk;
import com.openclassrooms.risque.proxies.NoteProxy;
import com.openclassrooms.risque.proxies.PatientProxy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class RiskService {

    private final PatientProxy patientProxy;
    private final NoteProxy noteProxy;

    public RiskService(PatientProxy patientProxy, NoteProxy noteProxy) {
        this.patientProxy = patientProxy;
        this.noteProxy = noteProxy;
    }
    public List<Risk> setRiskLevel(Integer patId) {
        PatientBean patient = patientProxy.getOnePatient(patId);
        List<Risk> listAllRisk = new ArrayList<>();

        Risk risk = new Risk();
        risk.setPatId(patient.getPatientListId());

        LocalDate birthdate = patient.getBirthdate();
        LocalDate currentDate = LocalDate.now();
        Integer patientAge = Period.between(birthdate, currentDate).getYears();
        risk.setAge(patientAge);

        List<String> patientNote = noteProxy.listDesNotes(patId);

        String[] triggerWords = {"Poids", "Taille", "Anticorps", "Cholestérol", "Réaction", "Rechute", "Anormal",
                "Hémoglobine A1C", "Microalbumine", "Fumeur", "Fumeuse", "Vertiges"};

        int trigger = 0;

        for (String chain : patientNote) {
            for (String word : triggerWords) {
                if (chain.toLowerCase().contains(word.toLowerCase())) {
                    trigger++;
                }
            }
        }
        risk.setTrigger(trigger);

        int triggerCount = risk.getTrigger();
        int age = risk.getAge();
        String gender = patient.getGender();

        if (triggerCount == 0 || triggerCount == 1) {
            risk.setRisk("none");
        } else if ((triggerCount >= 2 && triggerCount <= 5 && age > 30) ||
                (triggerCount == 6 || triggerCount == 7) && age > 30) {
            risk.setRisk("in Danger");
        } else if ((Objects.equals(gender, "M") && triggerCount == 3) ||
                (Objects.equals(gender, "F") && triggerCount == 4)) {
            risk.setRisk("in Danger");
        } else if ((Objects.equals(gender, "M") && triggerCount == 5) ||
                (Objects.equals(gender, "F") && triggerCount == 7) ||
                (triggerCount > 8 && age > 30)) {
            risk.setRisk("Early onset");
        }

        listAllRisk.add(risk);

        return listAllRisk;

    }
}
