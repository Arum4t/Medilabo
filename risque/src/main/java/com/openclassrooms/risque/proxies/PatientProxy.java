package com.openclassrooms.risque.proxies;

import com.openclassrooms.risque.beans.PatientBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "patient", url = "localhost:8080")
public interface PatientProxy {

    @GetMapping (value = "/patients")
    List<PatientBean> listDesPatients();

    @GetMapping(value = "/patients/{id}")
    PatientBean onePatient(@PathVariable Integer patId);

}
