package com.LoginRegister.example.controller;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.UrlResource;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class FileController {

    // Path to the "uploads" directory
    private final String uploadDir = "C:\\Users\\sagar\\Documents\\workspace-spring-tool-suite-4-4.26.0.RELEASE\\LoginRegisterServer\\uploads";

    // Endpoint to serve uploaded files (like images)
    @GetMapping("/uploads/{filename:.+}")
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        try {
            // Build the full file path from the filename
            Path file = Paths.get(uploadDir).resolve(filename).normalize();
            // Create a resource from the file path
            Resource resource = new UrlResource(file.toUri());
            
            // Check if the file exists and is readable
            if (resource.exists() || resource.isReadable()) {
                // Return the file as a response with the appropriate header for inline display
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                // If the file doesn't exist or can't be read, return a 404 not found response
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            // Handle any exceptions and return a 500 Internal Server Error
            throw new RuntimeException("Error serving file: " + filename, e);
        }
    }
}
