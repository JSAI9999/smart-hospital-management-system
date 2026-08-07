package com.healthcare.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "billing")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billId;

    private String patientName;

    private Double consultationFee;

    private Double medicineFee;

    private Double laboratoryFee;

    private Double totalAmount;

    private String paymentStatus;
}
