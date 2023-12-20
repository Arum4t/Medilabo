FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 9101
COPY target/*.jar gateway.jar
ENTRYPOINT ["java","-jar","/gateway.jar"]