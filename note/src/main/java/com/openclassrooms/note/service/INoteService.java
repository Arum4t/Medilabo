package com.openclassrooms.note.service;

import com.openclassrooms.note.model.Note;

import java.util.List;

public interface INoteService {

    List<Note> getAllNote();
    List<Note>getPatientNote(Integer id);
    Note addNote(Note note);
}
