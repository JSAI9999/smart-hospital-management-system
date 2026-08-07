package com.healthcare.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PharmacyDTO {

    private Long medicineId;
    private String medicineName;
    private String manufacturer;
    private Integer quantity;
    private Double price;
}
