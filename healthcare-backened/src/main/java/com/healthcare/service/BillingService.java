package com.healthcare.service;

import com.healthcare.entity.Billing;
import com.healthcare.repository.BillingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillingService {

    private final BillingRepository billingRepository;

    public BillingService(BillingRepository billingRepository) {
        this.billingRepository = billingRepository;
    }

    public List<Billing> getAllBills() {
        return billingRepository.findAll();
    }

    public Billing saveBill(Billing billing) {
        return billingRepository.save(billing);
    }

    public void deleteBill(Long id) {
        billingRepository.deleteById(id);
    }
}
