FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8080
COPY target/*.jar patient.jar
ENTRYPOINT ["java","-jar","/patient.jar"]