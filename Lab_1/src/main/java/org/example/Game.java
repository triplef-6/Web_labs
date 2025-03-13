package org.example;

public class Game {
    private int[][] board; 
    private int score;     
    private boolean gameOver; 

    public Game() {
        board = new int[3][3];
        score = 0;
        gameOver = false;

        generateNewTile();
        generateNewTile();
    }

    public int[][] getBoard() {
        return board;
    }
    public void setBoard(int[][] board) {
        this.board = board;
    }
    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public boolean isGameOver() {
        return gameOver;
    }
    public void setGameOver(boolean gameOver) {
        this.gameOver = gameOver;
    }

    public void generateNewTile() {
        int emptyCells = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    emptyCells++;
                }
            }
        }
        if (emptyCells > 0) {
            int randomTile = (Math.random() < 0.9) ? 2 : 4; // 90% шанс на 2, 10% на 4
            int cell = (int) (Math.random() * emptyCells);
            int count = 0;
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    if (board[i][j] == 0) {
                        if (count == cell) {
                            board[i][j] = randomTile;
                            return;
                        }
                        count++;
                    }
                }
            }
        }
    }

    public boolean canMove() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    return true;
                }
                if (i < 2 && board[i][j] == board[i + 1][j]) {
                    return true;
                }
                if (j < 2 && board[i][j] == board[i][j + 1]) {
                    return true;
                }
            }
        }
        return false;
    }
}
