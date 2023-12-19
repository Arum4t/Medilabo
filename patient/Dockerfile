FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8080
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} patient.jar
ENTRYPOINT ["java","-jar","/patient.jar"]