package com.openclassrooms.risque.proxies;

import com.openclassrooms.risque.beans.PatientBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "patient", url = "localhost:8080")
public interface PatientProxy {

    @RequestMapping(method = RequestMethod.GET, value = "/patients")
    List<PatientBean> listDesPatents();
}
