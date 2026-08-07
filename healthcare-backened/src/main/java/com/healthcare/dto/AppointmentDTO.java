package com.healthcare.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppointmentDTO {

    private Long appointmentId;
    private String patientName;
    private String doctorName;
    private LocalDate appointmentDate;
    private LocalTime appointmentTime;
    private String status;
}
