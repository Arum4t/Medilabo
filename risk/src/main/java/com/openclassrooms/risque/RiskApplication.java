package com.openclassrooms.risque;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;



@SpringBootApplication
@EnableFeignClients
public class RiskApplication {

	public static void main(String[] args) {
		SpringApplication.run(RiskApplication.class, args);
	}

}
