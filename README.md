# Neon Trivia
### [Live Link](https://mjguggen.github.io/NeonTrivia)
## Description
In the throes of the Covid-19 quarantine my family asked me to find a trivia game online that we could play together. After an unsuccessful google search, I decided to build one myself. The Neon Trivia web app uses questions from Jeopardy (from the http://jservice.io/ API) to create a trivia game.
### How was it built?
- I first started by creating the game settings that the users can use to select (players and question count). I used a Boolean state for each player which is toggled by the dropdown to activate them. The Questions option manipulates what is fetched from the API to get the amount of question rounds.
- Scoring is done first by adding the scores to a temporary score when player’s names are selected, then added to their total score when the next round is clicked.
- I used a state that keeps track of how many questions have been asked – once this is equal to the amount of questions called from the API an “end game” function is called which brings up the total score screen
### Built With
- React
- Javascript
- HTML
- CSS
- Sass/SCSS
- JService.io API
### How I would improve this project
- Add ability to filter by game question difficulty in the game settings
- Add a countdown timer for each question
- Add additional transitions to improve the UI

**Created by Mike Guggenbuehl**