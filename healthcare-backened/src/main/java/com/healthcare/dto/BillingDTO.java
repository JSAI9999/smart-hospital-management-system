package com.healthcare.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BillingDTO {

    private Long billId;
    private String patientName;
    private Double consultationFee;
    private Double medicineFee;
    private Double laboratoryFee;
    private Double totalAmount;
    private String paymentStatus;
}
