package com.openclassrooms.risque.proxies;

import com.openclassrooms.risque.beans.NoteBean;
import com.openclassrooms.risque.beans.PatientBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "note", url = "localhost:8081")
public interface NoteProxy {

    @GetMapping(value = "/notes")
    List<NoteBean> listDesNotes();
}
