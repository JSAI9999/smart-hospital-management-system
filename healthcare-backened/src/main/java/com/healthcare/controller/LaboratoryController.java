package com.healthcare.controller;

import com.healthcare.entity.Laboratory;
import com.healthcare.service.LaboratoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laboratory")
@CrossOrigin(origins = "*")
public class LaboratoryController {

    private final LaboratoryService laboratoryService;

    public LaboratoryController(LaboratoryService laboratoryService) {
        this.laboratoryService = laboratoryService;
    }

    @GetMapping
    public List<Laboratory> getAllTests() {
        return laboratoryService.getAllTests();
    }

    @PostMapping
    public Laboratory saveTest(@RequestBody Laboratory laboratory) {
        return laboratoryService.saveTest(laboratory);
    }

    @DeleteMapping("/{id}")
    public String deleteTest(@PathVariable Long id) {
        laboratoryService.deleteTest(id);
        return "Laboratory record deleted successfully";
    }
}
