package org.example.controllers;

import org.example.GameService;
import org.example.ent.MoveRequest;
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

    // Запуск новой игры
    @PostMapping("/new")
    public Game startNewGame() {
        return gameService.startNewGame();
    }

    // Выполнение хода – ожидается JSON вида { "direction": "up" }
    @PostMapping("/move")
    public Game move(@RequestBody MoveRequest moveRequest) {
        return gameService.move(moveRequest.getDirection());
    }

    // Получение текущего состояния игры
    @GetMapping
    public Game getGame() {
        return gameService.getCurrentGame();
    }
}
