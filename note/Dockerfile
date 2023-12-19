FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8081
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} note.jar
ENTRYPOINT ["java","-jar","/note.jar"]
