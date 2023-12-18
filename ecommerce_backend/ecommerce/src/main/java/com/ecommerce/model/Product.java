package com.ecommerce.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.CollectionType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

     @Column(name = "description")
    private String description;

     @Column(name = "price")
    private String price;

     @Column(name = "brand")
    private String brand;

     @Column(name = "discounted_price")
    private int discountedPrice;
     
    @Column(name = "discount_persent")
    private int discountPersent;

    private int quantity;

     @Column(name = "color")
    private String color;

    @Embedded
    @ElementCollection
    private Set<Size>sizes= new HashSet<>();

    private String imageUrl;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Rating>ratings = new ArrayList<>();

     @OneToMany(mappedBy = "product", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Review>reviews = new ArrayList<>();

    private int numRatings;

    @ManyToOne()
    @JoinColumn(name = "category_id")
    private Category category;

    private LocalDateTime createdAt;

}
