package org.example.controllers;

import java.net.URI;
import java.util.List;

import org.example.AuthRequest;
import org.example.User;
import org.example.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriComponentsBuilder;

@Controller
@RequestMapping("/user")
public class UserController {
    private final UserRepository userRepository;
    
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
        
   @RequestMapping(method = RequestMethod.GET)
   @ResponseBody
   public List<User> list() {
       return userRepository.getAllUser();
   }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public User userById(@PathVariable int id) {
        return userRepository.getUserById(id);
    }
    
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    @ResponseBody
    public User authenticate(@RequestBody AuthRequest authRequest) {
        User user = userRepository.authentication(authRequest.getName(), authRequest.getSurname());
        return user;
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
    public ResponseEntity<?> delete(@PathVariable int id, @RequestHeader("Authorization") String token) {
        String tokenfrom = "Bearer dummy-token-for-" + id;
        if (token.equals(tokenfrom)) {
            userRepository.delete(id);
            return ResponseEntity.ok("User deleted");
        }
        return ResponseEntity.status(401).body("Unauthorized66666");
    }

    @RequestMapping(value = "/{id}/results", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> saveResult(@PathVariable int id, @RequestBody Integer result, @RequestHeader("Authorization") String token) {
        String tokenfrom = "Bearer dummy-token-for-" + id;
        if (token.equals(tokenfrom)) {
            userRepository.setResult(id, result);
            return ResponseEntity.ok("Result saved");
        }

        return ResponseEntity.status(401).body("Unauthorized66666");
    }

    // private String generateToken(User user) {
    //     // Implement token generation logic here
    //     return "dummy-token-for-" + user.getId();
    // }

    // private boolean isValidToken(String token, int userId) {
    //     // Implement token validation logic here
    //     return token.equals("dummy-token-for-" + userId);
    // }
}
