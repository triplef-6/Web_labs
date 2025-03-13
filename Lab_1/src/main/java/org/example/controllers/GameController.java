package org.example.controllers;

import org.example.Game;
import org.example.GameService;
import org.example.MoveRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private GameService gameService;

    @PostMapping("/new")
    public Game startNewGame() {
        return gameService.startNewGame();
    }

    @PostMapping("/move")
    public Game move(@RequestBody MoveRequest moveRequest) {
        return gameService.move(moveRequest.getDirection());
    }

    @GetMapping
    public Game getGame() {
        return gameService.getCurrentGame();
    }
}
