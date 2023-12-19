package com.openclassrooms.note.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("note")
@Data
public class Note {

    @Id
    @JsonIgnore
    private String id;
    private Integer patId;
    private String patient;
    private String note;
}
