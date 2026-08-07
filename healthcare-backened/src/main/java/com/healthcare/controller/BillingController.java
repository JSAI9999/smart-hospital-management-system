package com.healthcare.controller;

import com.healthcare.entity.Billing;
import com.healthcare.service.BillingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billing")
@CrossOrigin(origins = "*")
public class BillingController {

    private final BillingService billingService;

    public BillingController(BillingService billingService) {
        this.billingService = billingService;
    }

    @GetMapping
    public List<Billing> getAllBills() {
        return billingService.getAllBills();
    }

    @PostMapping
    public Billing saveBill(@RequestBody Billing billing) {
        return billingService.saveBill(billing);
    }

    @DeleteMapping("/{id}")
    public String deleteBill(@PathVariable Long id) {
        billingService.deleteBill(id);
        return "Bill deleted successfully";
    }
}
