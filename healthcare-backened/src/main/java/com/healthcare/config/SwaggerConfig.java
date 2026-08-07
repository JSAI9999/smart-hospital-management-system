package com.healthcare.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI hospitalAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("Smart Hospital Management API")
                        .version("1.0")
                        .description("REST API Documentation for Smart Hospital Management System"));
    }
}
