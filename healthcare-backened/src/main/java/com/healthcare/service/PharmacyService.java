package com.healthcare.service;

import com.healthcare.entity.Pharmacy;
import com.healthcare.repository.PharmacyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyService {

    private final PharmacyRepository pharmacyRepository;

    public PharmacyService(PharmacyRepository pharmacyRepository) {
        this.pharmacyRepository = pharmacyRepository;
    }

    public List<Pharmacy> getAllMedicines() {
        return pharmacyRepository.findAll();
    }

    public Pharmacy saveMedicine(Pharmacy pharmacy) {
        return pharmacyRepository.save(pharmacy);
    }

    public void deleteMedicine(Long id) {
        pharmacyRepository.deleteById(id);
    }
}
