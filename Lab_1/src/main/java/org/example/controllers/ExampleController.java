package org.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ExampleController {
    @RequestMapping("/hello")
    @ResponseBody
    public String helloWorld() {
        return "Hello!";
    }
}
