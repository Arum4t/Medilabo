FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8082
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} risque.jar
ENTRYPOINT ["java","-jar","/risque.jar"]