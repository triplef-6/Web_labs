package org.example;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    private List<User> users = new ArrayList<>();
    private int idCounter = 0;


    public List<User> getAllUser() {
        return Collections.unmodifiableList(users);
    }

    public User getUserById(int id) {
        for (User u : users) {
            if (u.getId() == id) {
                return u;
            }
        }

        return null;
    }

    public User authentication(String name, String surname) {
        for (User u : users) {
            if (u.getName().equals(name) && u.getSurname().equals(surname)) {
                return u;
            }
        }

        return null;
    }

    public User create(User user) {
        User newUser = new User((int) getNextID(), user.getName(), user.getSurname());
        users.add(newUser);
        return newUser;
    }

    public User update(User user) {
        for (User u : users) {
            if (u.getId() == user.getId()) {
                u = new User(user.getId(), user.getName(), user.getSurname());
                return u;
            }
        }

        return null;
    }

    public void delete(int id) {
        for (User u : users) {
            if (u.getId() == id) {
                users.remove(u);
                return;
            }
        }
    }

    public List<Integer> setResult(int id, int res) {
        for (User u : users) {
            if (u.getId() == id) {
                u.setResult(res);
                return u.getResults();
            }
        }

        return null;
    }

    private long getNextID(){
        return ++idCounter;
    }

}
