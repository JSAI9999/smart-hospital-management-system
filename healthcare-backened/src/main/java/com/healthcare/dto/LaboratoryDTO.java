package com.healthcare.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LaboratoryDTO {

    private Long testId;
    private String testName;
    private String patientName;
    private Double testCost;
    private String result;
}
