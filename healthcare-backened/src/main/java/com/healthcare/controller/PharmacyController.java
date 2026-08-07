package com.healthcare.controller;

import com.healthcare.entity.Pharmacy;
import com.healthcare.service.PharmacyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pharmacy")
@CrossOrigin(origins = "*")
public class PharmacyController {

    private final PharmacyService pharmacyService;

    public PharmacyController(PharmacyService pharmacyService) {
        this.pharmacyService = pharmacyService;
    }

    @GetMapping
    public List<Pharmacy> getAllMedicines() {
        return pharmacyService.getAllMedicines();
    }

    @PostMapping
    public Pharmacy saveMedicine(@RequestBody Pharmacy pharmacy) {
        return pharmacyService.saveMedicine(pharmacy);
    }

    @DeleteMapping("/{id}")
    public String deleteMedicine(@PathVariable Long id) {
        pharmacyService.deleteMedicine(id);
        return "Medicine deleted successfully";
    }
}
