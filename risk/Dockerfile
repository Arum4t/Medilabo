FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8082
COPY target/*.jar risque.jar
ENTRYPOINT ["java","-jar","/risque.jar"]