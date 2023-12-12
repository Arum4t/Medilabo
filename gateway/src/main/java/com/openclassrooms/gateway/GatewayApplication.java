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
				.route("risksById", t -> t.path("/risks/**")
						.filters(rw -> rw.rewritePath("/risks/(?<segment>.*)", "/risks/${segment}"))
						.uri("http://localhost:8082/risks/"))
				.route("notesById", t -> t.path("/notes/**")
						.filters(rw -> rw.rewritePath("/notes/(?<segment>.*)", "/notes/${segment}"))
						.uri("http://localhost:8081/notes/"))
				.route("patientById", t -> t.path("/patients/**")
						.filters(rw -> rw.rewritePath("/patients/(?<segment>.*)", "/patients/${segment}"))
						.uri("http://localhost:8080/patients/"))
				.build();
	}

}
