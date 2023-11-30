package com.openclassrooms.risque.controller;

import com.openclassrooms.risque.model.Risk;
import com.openclassrooms.risque.service.RiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RiskController {

    @Autowired
    private RiskService riskService;

    @GetMapping("/risks")
    public List<Risk> getPatientsRisks(){
        return riskService.setRiskLevel();
    }
}
