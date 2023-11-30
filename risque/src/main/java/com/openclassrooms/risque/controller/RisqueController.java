package com.openclassrooms.risque.controller;

import com.openclassrooms.risque.beans.PatientBean;
import com.openclassrooms.risque.service.RiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RisqueController {

    @Autowired
    private RiskService riskService;

    @GetMapping("/test")
    public List<PatientBean> testController(){
        return riskService.calculateAge();
    }
}
