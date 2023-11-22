package com.openclassrooms.note.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("note")
@Data
public class Note {

    @Id
    private String id;

    private String patId;

    private String patient;

    private String note;
}
