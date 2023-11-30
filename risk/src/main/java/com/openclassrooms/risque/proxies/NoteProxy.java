package com.openclassrooms.risque.proxies;

import com.openclassrooms.risque.beans.NoteBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "note", url = "localhost:8081")
public interface NoteProxy {

    @GetMapping(value = "/notes/{patId}")
    List<String> listDesNotes(@PathVariable Integer patId);
}
