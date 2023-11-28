package com.openclassrooms.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("path_route", r -> r.path("/patients")
						.uri("http://localhost:8080/patients"))
				.route("path_route", r -> r.path("/notes/sort")
						.uri("http://localhost:8081/notes/sort"))
				.route("path_route", r -> r.path("/notes")
						.uri("http://localhost:8080/notes"))
				.build();
	}

}
