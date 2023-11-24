package com.openclassrooms.note.service;

import com.openclassrooms.note.model.Note;

import java.util.List;
import java.util.Map;

public interface INoteService {

    List<Note> getAllNote();
    List<Note>getPatientNotesFullInfo(Integer id);
    List<String> getPatientNotes(Integer patId);
    Map<Integer, List<String>> getAllNoteSortByPatientId();
    Note addNote(Note note);
}
