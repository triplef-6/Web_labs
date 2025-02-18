package org.example.controllers;

import org.example.User;
import org.example.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<User> list() {
        return userRepository.getAllUser();
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

}
