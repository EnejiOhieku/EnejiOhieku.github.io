---
layout: post
title: Super TicTacToe
description:  Developed as a personal project in 200-level second-semester, I built this application with the specific goal of transforming the simple, often predictable game of Tic-Tac-Toe into a complex, multi-layered strategy experience.

skills: 
  - Python
  - Kivy
  - Game Logic Design
  - Recursion

main-image: /image.png
---

---

## The Concept

Standard Tic-Tac-Toe often ends in a draw and lacks long-term strategic depth. This project implements "Super" (or Recursive) Tic-Tac-Toe to solve that:

- Fractal Gameplay: The game board is recursive. Each cell in the main board contains a smaller Tic-Tac-Toe board.

- Strategic Constraint: The move you make in a small inner board dictates which specific board your opponent must play in next. This forces you to think globally while acting locally.

- Win Propagation: Winning a small board claims that cell on the larger board. The goal is to win the "Meta" board.

{% include youtube-video.html id="KNJtpKn5eZI" autoplay = "true" %}

[check out the project on github](https://github.com/EnejiOhieku/super_tictactoe)

---
