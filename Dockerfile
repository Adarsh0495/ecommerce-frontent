# Use an official OpenJDK runtime as a parent image
FROM openjdk:21

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file from the target directory to the container
COPY ./target/Ecommerce-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the application's port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
