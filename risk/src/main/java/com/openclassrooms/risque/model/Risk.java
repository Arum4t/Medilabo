package com.openclassrooms.risque.model;

import lombok.Data;

@Data
public class Risk {

    private Integer patId;
    private Integer age;
    private Integer trigger;
    private String risk;
}
