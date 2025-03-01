package org.example;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class User {
    private final int id;
    private final String name;
    private final String surname;

    private List<Integer> results;
    private Integer record;

    @JsonCreator
    public User(@JsonProperty("id") int id, @JsonProperty("name") String name, @JsonProperty("surname") String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.record = 0;
        this.results = new ArrayList<>();
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

    public List<Integer> getResults() {
        return results;
    }

    public Integer getRecord() {
        return record;
    }

    public void setResults(List<Integer> results) {
        this.results = results;
    }

    public void setResult(Integer result) {
        this.results.add(result);
        if (result > record) {
            record = result;
        }
    }
}
