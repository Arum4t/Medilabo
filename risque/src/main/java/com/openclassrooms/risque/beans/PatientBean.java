package com.openclassrooms.risque.beans;

import lombok.Data;

import java.util.Date;

@Data
public class PatientBean {
    private Integer patientListId;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private String gender;
    private String address;
    private String phoneNumber;
}
