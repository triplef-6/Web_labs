package org.example;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class User {
    private final int id;
    private final String name;
    private final String surname;

    @JsonCreator
    public User(@JsonProperty("id") int id, @JsonProperty("name") String name, @JsonProperty("surname") String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;


    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }
}
