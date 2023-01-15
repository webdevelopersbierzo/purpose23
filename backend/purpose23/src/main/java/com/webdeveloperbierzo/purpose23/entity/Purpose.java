package com.webdeveloperbierzo.purpose23.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="purpose")
public class Purpose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;
    @Column(name="purpose_name")
    private String purposeName;
    @Column(name="purpose_what")
    private String purposeWhat;
    @Column(name="date_star")
    private LocalDate dateStar;
    @Column(name="date_end")
    private LocalDate dateEnd;

    public Purpose() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPurposeName() {
        return purposeName;
    }

    public void setPurposeName(String purposeName) {
        this.purposeName = purposeName;
    }

    public String getPurposeWhat() {
        return purposeWhat;
    }

    public void setPurposeWhat(String purposeWhat) {
        this.purposeWhat = purposeWhat;
    }

    public LocalDate getDateStar() {
        return dateStar;
    }

    public void setDateStar(LocalDate dateStar) {
        this.dateStar = dateStar;
    }

    public LocalDate getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
    }

    @Override
    public String toString() {
        return "Purpose{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", purposeName='" + purposeName + '\'' +
                ", purposeWhat='" + purposeWhat + '\'' +
                ", dateStar=" + dateStar +
                ", dateEnd=" + dateEnd +
                '}';
    }
}
