package org.example;

import java.util.Arrays;

import org.springframework.stereotype.Service;

@Service
public class GameService {
    private Game currentGame;

    public Game startNewGame() {
        currentGame = new Game();
        return currentGame;
    }

    public Game getCurrentGame() {
        return currentGame;
    }

    /**
     * изменения в игре
     * @param direction "up", "down", "left", "right"
     * @return обновлённая игра
     */
    public Game move(String direction) {
        if (currentGame == null || currentGame.isGameOver()) {
            return currentGame; // если игра не начата или окончена
        }
        boolean moved = false;
        switch (direction.toLowerCase()) {
            case "up":
                moved = moveUp();
                break;
            case "down":
                moved = moveDown();
                break;
            case "left":
                moved = moveLeft();
                break;
            case "right":
                moved = moveRight();
                break;
        }
        if (moved) {
            currentGame.generateNewTile();
            if (!currentGame.canMove()) {
                currentGame.setGameOver(true);
            }
        }
        return currentGame;
    }
    /**
     * влево
     */
    private boolean moveLeft() { 
        boolean moved = false;
        int[][] board = currentGame.getBoard();
        for (int i = 0; i < 3; i++) {
            int[] original = Arrays.copyOf(board[i], 3);
            int[] merged = mergeAndShift(board[i]);
            board[i] = merged;
            if (!Arrays.equals(original, merged)) {
                moved = true;
            }
        }
        return moved;
    }

    /**
     * вправо
     */
    private boolean moveRight() { 
        boolean moved = false;
        int[][] board = currentGame.getBoard();
        for (int i = 0; i < 3; i++) {
            int[] original = Arrays.copyOf(board[i], 3);
            reverseArray(board[i]);
            int[] merged = mergeAndShift(board[i]);
            reverseArray(merged);
            board[i] = merged;
            if (!Arrays.equals(original, merged)) {
                moved = true;
            }
        }
        return moved;
    }

    /**
     * вверх
     */
    private boolean moveUp() {
        boolean moved = false;
        int[][] board = currentGame.getBoard();
        for (int j = 0; j < 3; j++) {
            int[] col = new int[4];
            for (int i = 0; i < 3; i++) {
                col[i] = board[i][j];
            }
            int[] original = Arrays.copyOf(col, 3);
            int[] merged = mergeAndShift(col);
            for (int i = 0; i < 3; i++) {
                board[i][j] = merged[i];
            }
            if (!Arrays.equals(original, merged)) {
                moved = true;
            }
        }
        return moved;
    }

    /**
     * вниз
     */
    private boolean moveDown() {
        boolean moved = false;
        int[][] board = currentGame.getBoard();
        for (int j = 0; j < 3; j++) {
            int[] col = new int[3];
            for (int i = 0; i < 3; i++) {
                col[i] = board[i][j];
            }
            int[] original = Arrays.copyOf(col, 3);
            reverseArray(col);
            int[] merged = mergeAndShift(col);
            reverseArray(merged);
            for (int i = 0; i < 3; i++) {
                board[i][j] = merged[i];
            }
            if (!Arrays.equals(original, merged)) {
                moved = true;
            }
        }
        return moved;
    }
    /**
     * слияние
     */
    private int[] mergeAndShift(int[] line) {
        int[] filtered = new int[3];
        int index = 0;

        for (int i = 0; i < 3; i++) {
            if (line[i] != 0) {
                filtered[index++] = line[i];
            }
        }
        for (int i = 0; i < 2; i++) {
            if (filtered[i] != 0 && filtered[i] == filtered[i + 1]) {
                filtered[i] *= 2;
                currentGame.setScore(currentGame.getScore() + filtered[i]);
                filtered[i + 1] = 0;
                i++;
            }
        }
        int[] result = new int[3];
        index = 0;
        for (int i = 0; i < 3; i++) {
            if (filtered[i] != 0) {
                result[index++] = filtered[i];
            }
        }
        return result;
    }

    /**
     * разворот
     */
    private void reverseArray(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[n - 1 - i];
            arr[n - 1 - i] = temp;
        }
    }

}
