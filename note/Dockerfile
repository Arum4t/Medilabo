FROM openjdk:21-jdk
LABEL authors="Quentin"
EXPOSE 8081
COPY target/*.jar note.jar
ENTRYPOINT ["java","-jar","/note.jar"]
