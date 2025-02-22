package org.example.controllers;

import org.example.User;
import org.example.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

//    @RequestMapping(method = RequestMethod.GET)
//    @ResponseBody
//    public List<User> list() {
//        return userRepository.getAllUser();
//    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public User userById(@PathVariable int id) {
        return userRepository.getUserById(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public User authentication(@RequestBody String name,@RequestBody String surname) {
        return userRepository.authentication(name, surname);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<User> create(@RequestBody User newUser) {
        User createdUser = userRepository.create(newUser);
        URI location = UriComponentsBuilder.fromPath("/user/")
                .path(String.valueOf(createdUser.getId()))
                .build().toUri();
        return ResponseEntity.created(location).body(createdUser);
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<User> update(@RequestBody User user) {
        User updateUser = userRepository.update(user);
        URI location = UriComponentsBuilder.fromPath("/user/")
                .path(String.valueOf(updateUser.getId()))
                .build().toUri();
        return ResponseEntity.created(location).body(updateUser);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void delete(@PathVariable int id) {
        userRepository.delete(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    @ResponseBody
    public List<Integer> setResult(@PathVariable int id, @RequestBody Integer res) {
        return userRepository.setResult(id, res);
    }
}
