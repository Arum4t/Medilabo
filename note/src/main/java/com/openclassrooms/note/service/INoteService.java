package com.openclassrooms.note.service;

import com.openclassrooms.note.model.Note;

import java.util.List;
import java.util.Map;

public interface INoteService {

    List<Note> getAllNote();
    List<String> getPatientNotes(Integer patId);
    Note addNote(Note note);
}
