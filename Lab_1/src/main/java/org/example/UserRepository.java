package org.example;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class UserRepository {
    private List<User> users = new ArrayList<>();
    private int idCounter = 0;


    public List<User> getAllUser() {
        return Collections.unmodifiableList(users);
    }

    public User create(User user) {
        User newUser = new User((int) getNextID(), user.getName(), user.getSurname());
        users.add(newUser);
        return newUser;
    }
    // дополните
    private long getNextID(){
        return ++idCounter;
    }

}
