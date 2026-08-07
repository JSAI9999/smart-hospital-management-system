package com.healthcare.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorDTO {

    private Long doctorId;
    private String doctorName;
    private String specialization;
    private String qualification;
    private String phone;
    private String email;
    private Integer experience;
    private Double consultationFee;
}
