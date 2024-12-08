package com.LoginRegister.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cases") 
public class Case {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String caseName;
    private String description;
    private String victimName;  // Added victimName field

    @ManyToOne
    @JoinColumn(name = "legal_advisor_id")
    private LegalAdvisor legalAdvisor;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String caseName) {
        this.caseName = caseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVictimName() {
        return victimName;
    }

    public void setVictimName(String victimName) {
        this.victimName = victimName;
    }

    public LegalAdvisor getLegalAdvisor() {
        return legalAdvisor;
    }

    public void setLegalAdvisor(LegalAdvisor legalAdvisor) {
        this.legalAdvisor = legalAdvisor;
    }
}
