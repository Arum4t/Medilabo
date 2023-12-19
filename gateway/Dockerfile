FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 9101
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} gateway.jar
ENTRYPOINT ["java","-jar","/gateway.jar"]