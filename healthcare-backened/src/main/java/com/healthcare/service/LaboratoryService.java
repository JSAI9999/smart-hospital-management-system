package com.healthcare.service;

import com.healthcare.entity.Laboratory;
import com.healthcare.repository.LaboratoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaboratoryService {

    private final LaboratoryRepository laboratoryRepository;

    public LaboratoryService(LaboratoryRepository laboratoryRepository) {
        this.laboratoryRepository = laboratoryRepository;
    }

    public List<Laboratory> getAllTests() {
        return laboratoryRepository.findAll();
    }

    public Laboratory saveTest(Laboratory laboratory) {
        return laboratoryRepository.save(laboratory);
    }

    public void deleteTest(Long id) {
        laboratoryRepository.deleteById(id);
    }
}
