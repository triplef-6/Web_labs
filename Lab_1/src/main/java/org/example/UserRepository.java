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

    public User getUserById(int id) {
        for (User u : users) {
            if (u.getId() == id) {
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
    // дополните
    private long getNextID(){
        return ++idCounter;
    }

}
