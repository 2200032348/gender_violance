package com.LoginRegister.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_info") // Specify the table name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") // Specify the column name
    private Long id;

    @Column(name = "name", nullable = false) // Specify the column name and constraints
    private String name;

    @Column(name = "mental_conditions") // Specify the column name
    private String mentalConditions;

    @Column(name = "physical_conditions") // Specify the column name
    private String physicalConditions;

    // Getters and setters (optional, since Lombok already provides them)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMentalConditions() {
        return mentalConditions;
    }

    public void setMentalConditions(String mentalConditions) {
        this.mentalConditions = mentalConditions;
    }

    public String getPhysicalConditions() {
        return physicalConditions;
    }

    public void setPhysicalConditions(String physicalConditions) {
        this.physicalConditions = physicalConditions;
    }
}
