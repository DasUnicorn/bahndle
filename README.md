# BAHNdle
Bahndle, which plays on the German word for train, "Bahn," is a guessing game centered around German train journeys. It utilizs real-time train data. With initial information such as the starting location, estimated travel time, and the number of transfers involved, users are tasked with identifying the destination. The objective is to achieve this with as few guesses as possible, creating a challenge tailored for the Train-Nerd-Community. This community, much like myself, embraces travel exclusively via public transport and possesses a comprehensive knowledge of the train network.

The project is developed using HTML, CSS, and Vanilla JavaScript to deliver a fully responsive web experience. Live data is sourced through the [Rest API by Jannis](https://v6.db.transport.rest/), enhancing the dynamic nature of the game.

Check out the [live-site](https://dasunicorn.github.io/bahndle/index.html).

![Mock up](/assets/img/readme/mockup.png)

--- 

# Content

<!-- toc -->

- [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [User Experience](#user-experience)
  * [Target Audience](#target-audience)
  * [User stories](#user-stories)
    + [As a new player, I want clear instructions on how to play the game so that I can quickly understand the rules.](#as-a-new-player-i-want-clear-instructions-on-how-to-play-the-game-so-that-i-can-quickly-understand-the-rules)
    + [As a player making my first guess, I want the input field to provide autocomplete options to help me spell and choose valid ICE train stations accurately.](#as-a-player-making-my-first-guess-i-want-the-input-field-to-provide-autocomplete-options-to-help-me-spell-and-choose-valid-ice-train-stations-accurately)
    + [As a player, I want immediate feedback after each guess to guide me in refining my strategy.](#as-a-player-i-want-immediate-feedback-after-each-guess-to-guide-me-in-refining-my-strategy)
    + [As a player, I want to see a list of all my guesses to visually track my progress and review my attempts.](#as-a-player-i-want-to-see-a-list-of-all-my-guesses-to-visually-track-my-progress-and-review-my-attempts)
- [Design](#design)
  * [Wireframes](#wireframes)
    + [Mobile](#mobile)
    + [Desktop](#desktop)
- [Features](#features)
  * [Existing Features](#existing-features)
    + [Logo](#logo)
    + [Start Page](#start-page)
    + [Information Page](#information-page)
    + [Game Area](#game-area)
    + [Making a guess](#making-a-guess)
    + [Try Area](#try-area)
    + [Win and Trys](#win-and-trys)
  * [Features Left to Implement](#features-left-to-implement)
    + [Display the journey after win](#display-the-journey-after-win)
    + [Turning it into a daily guessing game](#turning-it-into-a-daily-guessing-game)
  * [Accessibility](#accessibility)
    + [Fonts and Font Sizes](#fonts-and-font-sizes)
    + [Colors](#colors)
    + [Structural HTML](#structural-html)
- [Testing](#testing)
  * [Validator Testing](#validator-testing)
    + [Lighthouse Test](#lighthouse-test)
    + [Jigsaw CSS Validator](#jigsaw-css-validator)
    + [W3C Validator](#w3c-validator)
    + [Accessibility](#accessibility-1)
    + [JS Hint](#js-hint)
  * [Manual Testing](#manual-testing)
  * [Testing this project without train knowledge](#testing-this-project-without-train-knowledge)
  * [Unfixed Bugs](#unfixed-bugs)
    + [Loosing the progress when checking the "How to play"-Site](#loosing-the-progress-when-checking-the-how-to-play-site)
    + [Spaces and Special Characters in Guesses](#spaces-and-special-characters-in-guesses)
    + [Edgecases in Station Names](#edgecases-in-station-names)
    + [Error: "Line.data.line is undefined"](#error-linedataline-is-undefined)
      - [The problem](#the-problem)
      - [How to fix this issue](#how-to-fix-this-issue)
      - [Why this isn't fixed yet](#why-this-isnt-fixed-yet)
  * [Fixed Bugs](#fixed-bugs)
    + [Empty User Input](#empty-user-input)
      - [Solution:](#solution)
    + [Wrong option when entering input](#wrong-option-when-entering-input)
      - [Solution:](#solution-1)
- [Deployment](#deployment)
  * [Local Development](#local-development)
    + [How to Clone](#how-to-clone)
    + [How to Fork](#how-to-fork)
- [Credits](#credits)

<!-- tocstop -->

---

## Technologies Used

* GitHub – storage and deployment
* Sublime Text - Editor

### Languages Used

HTML, CSS, Java Script

### Frameworks, Libraries & Programs Used

Github

## User Experience

### Target Audience
The intended audience for this game is a specialized group, specifically tailored for enthusiasts within the German Train Nerd Community who possess a deep understanding of the German train network and ICE stations nationwide. The game can pose significant challenges when played by individuals who do not meet these criteria. Looking ahead, there is potential to broaden the target audience by incorporating tips or additional information about train journeys. Furthermore, the option to introduce varying difficulty levels could be explored in future developments.

### User stories

#### As a new player, I want clear instructions on how to play the game so that I can quickly understand the rules.
In order to maintain a clean game display, the instructions on how to play are presented separately and in-depth on an additionel site. This approach ensures a user-friendly introduction to the game, providing clear guidance for an effortless and smooth start.

#### As a player making my first guess, I want the input field to provide autocomplete options to help me spell and choose valid ICE train stations accurately.
When entering an input, options that match the input are displayed.

#### As a player, I want immediate feedback after each guess to guide me in refining my strategy.
The user is presented with color-coded results (green for correct, yellow for on the way, and red for off-course) as a guide.

#### As a player, I want to see a list of all my guesses to visually track my progress and review my attempts.
For convenient review of attempts, users have a chronological list displayed at the bottom of the screen, showcasing all the entered results.

## Design
My design takes inspiration from the [color palette](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Farbe) and [typography](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Typografie) of Deutsche Bahn. In consideration of copyright, I aim to capture a similar aesthetic without directly replicating the design or using identical fonts. The overall game, particularly the initial page, draws inspiration from the concept of [Wordle](https://www.nytimes.com/games/wordle/index.html).

![Color Palette](/assets/img/readme/color.png)

### Wireframes

All Wireframes are made with Figma.

#### Mobile
![Wireframes Mobile](/assets/img/readme/wf-mobile.png)

#### Desktop
![Wireframes Desktop](/assets/img/readme/wf-desktop.png)

## Features 

### Existing Features

#### Logo
The logo incorporates a creative play with fonts, where the word "Bahn" is artistically styled to resemble an abstract representation of an Intercity-Express Train. This design is seamlessly combined with an illustration of the train featured on the front page.
<img src="/assets/img/readme/logo.png" width="300px">

#### Start Page
The landing page design draws inspiration from the layout of the [Wordle](https://www.nytimes.com/games/wordle/index.html) landing page. It features a "Play" button, directing users to the game, and a "How to Play" button, providing information on the game's rules and instructions.
![Startpage](/assets/img/readme/index.png)

#### Information Page
To ensure players have a comprehensive understanding of the game, an information page is available. This page serves as a guide, walking users through the game's dynamics and providing detailed information on how it operates. Each response from the game is thoroughly explained, offering insights into the solving process.

![Infopage](/assets/img/readme/info.png)

#### Game Area
At the core of this project lies the game, which encompasses the logo, informative content, and an input field for making guesses. The bottom of the page displays a record of previous guesses, providing a comprehensive overview of the gaming session. Users can conveniently close the game or navigate to the information page through dedicated buttons at the top right.
![Gamepage](/assets/img/readme/game.png)

#### Making a guess
To enhance the guessing experience, the input field features autocomplete options. This functionality serves a dual purpose by assisting users in correctly spelling their guesses, crucial for the game, and offering a comprehensive overview of all available options.
![Autocomplete](/assets/img/readme/autocomplete.png)
Upon entering a guess, the game provides feedback to gauge the accuracy of the user's input. The guess is marked red if it is outside the scope of the journey, yellow if the station is along the route but not the sought-after destination, and green to signify a correct guess and victory.
Additionally, when the user inputs a stop that lies along the route, the application dynamically includes information on the remaining time needed to reach the destination being sought.
![Guessing](/assets/img/readme/guess.png)

#### Try Area
All guesses are systematically presented in chronological order at the bottom of the screen. This layout provides users with a visual guide as they navigate through the game, and the list expands with each subsequent guess.
![Try Area](/assets/img/readme/guess-area.png)

#### Win and Trys
Upon entering the correct guess, a pop-up notification informs the user about their victory, displaying the crucial information on the number of guesses required to win the game. The pop-up also includes a button at the bottom, allowing users to easily initiate a new game and try again.
![Pop Up Win](/assets/img/readme/win.png)

### Features Left to Implement

#### Display the journey after win

#### Turning it into a daily guessing game

### Accessibility

#### Fonts and Font Sizes

I tried to choose fonts that are easy to read. The font sizes are coded in em and rem, to make them easily adjustable by the user themselves.

#### Colors

All colours and colour-text-combinations are tested for contrast and visibility. They went through a change due to accessibility concerns after the design phase.

#### Structural HTML

The structure of html makes the website possible to navigate by keyboard. When pressing the tab key, all interactive content can be reached.

## Testing

Full testing was performed on the following devices:

* Laptop:
  * Dell XPS
* Mobile Devices:
  * Iphone 12
  * Motorola Moto G

Each device tested the site using the following browsers:

* Google Chrome
* Safari (mobile only)
* Firefox

### Validator Testing

#### Lighthouse Test
All sites pass the lighthouse test without Problems.
![Lighthouse Test Result Index](/assets/img/readme/lh-index.png)
![Lighthouse Test Result Info](/assets/img/readme/lh-info.png)
![Lighthouse Test Result Game](/assets/img/readme/lh-game.png)

#### Jigsaw CSS Validator
The CSS code was validated using W3C Jigsaw CSS Validator.
![css Test Result](/assets/img/readme/css-test.png)

#### W3C Validator
Every page of the website was validated using the W3C tool. No errors (only one warning) appeared.

![HTML Test Result index](/assets/img/readme/html-check-index.png)
![HTML Test Result game](/assets/img/readme/html-check-game.png)
![HTML Test Result info](/assets/img/readme/html-check-info.png)

#### Accessibility
The result of the WAVE Web Accessibility Evaluation Tool shows 0 Errors.

<img src="/assets/img/readme/wave-index.png" alt="Results WAVE Web Accessibility Evaluation Tool for index" width="300">
<img src="/assets/img/readme/wave-game.png" alt="Results WAVE Web Accessibility Evaluation Tool for game" width="300">
<img src="/assets/img/readme/wave-info.png" alt="Results WAVE Web Accessibility Evaluation Tool for info" width="300">

#### JS Hint
The result of the JSHint Tool shows 0 Errors.
![JS Test Result](/assets/img/readme/js-hint.png)

### Manual Testing

| Feature                                                           | Site       | Expected Outcome                                                                                                                                                 | Testing Performed                                      | Result                                                                                 | Pass/Fail |
|-------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------|-----------|
| Starting the game                                                 | index.html | When clicking the "play"-Button, the user will get to game.html.                                                                                                 | Clicking Button Play.                                  | Got directed to game.html                                                              | Pass      |
| Getting to the Information side                                   | index.html | When clicking the "How to play"-Button, the user will get to info.html.                                                                                          | Clicking Button How to Play.                           | Got directed to info.html                                                              | Pass      |
| Getting to the game from info site                                | info.html  | When clicking the "play"-Button, the user will get to game.html.                                                                                                 | Clicking Button Play.                                  | Got directed to game.html                                                              | Pass      |
| Closing the information site                                      | info.html  | When clicking the cross in the top right, the user should return to index.html                                                                                   | Clicked on cross on the top right                      | Got directed to index.html                                                             | Pass      |
| Closing the game site                                             | game.html  | When clicking the cross in the top right, the user should return to index.html                                                                                   | Clicked on cross on the top right                      | Got directed to index.html                                                             | Pass      |
| Getting from game to info site                                    | game.html  | When clicking the "i" in the top right, the user should return to info.html                                                                                      | Clicked on "i" on the top right                        | Got directed to info.html                                                              | Pass      |
| Game doesn't accept empty input                                   | game.html  | When trying to enter an empty input by pressing the guess button without filling out anything, should return an alert and don't count a guess.                   | Clicking on guess without filling out the input field. | The alert "No valid guess entered. Please only use letters and round brackets." shows. | Pass      |
| Game doesn't accept special characters that aren't round brackets | game.html  | When trying to enter a guess containing a special character that is not a round bracket, an alert should appear.                                                 | Entering "*+~'#!?\"§$%&/=<>\|" as a guess.             | The alert "No valid guess entered. Please only use letters and round brackets." shows. | Pass      |
| Pop Up when player has won                                        | game.html  | When entering the correct result a pop up should open, informing the player about the win.                                                                       | Entering the correct result.                           | A pop up informs about the win.                                                        | Pass      |
| Wrong guess is shown with a red mark                              | game.html  | When entering a completely wrong guess the guess should be displayed at the bottom with the name of the guess and a red indicator.                               | Entering a wrong guess.                                | A new guess appears on the screen with a red rectangle.                                | Pass      |
| Stops are shown with a yellow mark and the time left              | game.html  | When entering a station that's a stop on the journey, the guess should be displayed with a yellow indicator as well as the time left to the correct destination. | Entering a stop.                                       | A new guess appears on the screen with a yellow rectangle and the time left.           | Pass      |


### Testing this project without train knowledge

If you're eager to try the game but have limited knowledge of the German train system, I've got some helpful tips for you.

1. Check if the console shows the js error mention below in the section "bugs". In this case reload the site to get a new game.
2. The Result is stored in the global variable "endStation" and can be returned with a console.log. I suggest to do this in Line 31 in main.js
```js
        console.log("start: " + startStation);
        console.log("end: " + endStation);
```
3. All stops are stored in "stops". I suggest the following console.log in Line 256. When doing this you have to enter one wrong guess and see all the stops in the console.
```js
console.log("Current stop to check : " + stops[i][0]);
```
I hope you still have fun with this project, even though you are not the target audience.

### Unfixed Bugs

#### Loosing the progress when checking the "How to play"-Site
Since the information on how to play is on a different site, the progress of the game gets lost when checking it out mid playing.
In the future this game will be restructured into a daily guessing game, where everyone tries the same riddle each day. To make this possible, the game has to be build on the server site. Then caching the current state is an option that can be implemented to save the current game state.

#### Spaces and Special Characters in Guesses
When entering a guess, the spelling in the Option provided might not fit the name that is returned by the request. Usually that is the case with blank spaces in Names. I tried to handle as many cases as possible by adjusting the Input Option, but there might still be cases left. Since in the long run this will not be needed when changing the system to check IDs instead of names, this was not an issue I focused on.

#### Edgecases in Station Names
Sometimes a stop is not checked correctly due to multiple spelling option.

Known examples:
* Köln Messe/Deutz and Köln Messe/Deutz Gl.11-12
* München Hbf and München Hbf Gl.14-27
* München Hbf and München Hbf (tief)
* Berlin Hbf and Berlin Hbf (tief)
* (and maybe more cases)

In these cases, a step has one unique ID, but multiple names. Instead of handling all Edge cases seperatly, the better option would be to check IDs in the future.

#### Error: "Line.data.line is undefined"
Sometimes, when loading the site the error "Line. data. line is undefined" can be seen in the console.
When this happens, it's not possible to guess any stops on the way and any guesses unless the correct answer is turning red.
[pictures of the error message]

##### The problem
When building this project, I assumed that all 'legs' (the way from a to b) of the request return a specific train, since this is a train journey. But as it turns out: when changing from a regional to a long distance train it can be necessary to change the part of the train station. From Berlin Hbf to Berlin Hbf (tief). Sometimes the tracks are outside or separate from train stations, for Example "Hamburg Hbf" and "Hamburg Hbf (S-Bahn)".
In these edge cases, the journey between the two stops in question is taken by foot and there is no line name and id available. The request throws an error and the array is never filled with the stops and stays empty.

##### How to fix this issue
When getting the id and name there needs to be a check if the value is undefined or empty.
When this is the case, the request for stops should not be sent. Instead, only the current Station, the person is walking to need to be added.

##### Why this isn't fixed yet
Sadly, this issue isn't fixed easily. While checking for undefined or empty values can be easily done, the current system is designed around loops that match the amount of transfers. To exit these loops it's necessary that the names of stations match precisely, which isn't always the case (as seen above). If not, some loops might run forever and break the program. So in the long run this should be fixed by compairing IDs. This would need a complete restructure of the code and isn't possible in the given time.

### Fixed Bugs

#### Empty User Input
Wrong input from the user, like empty input, or non strings like numbers should be handled by the application. Currently, when entering an invalid or empty input, it gets displayed inside the guesses as a wrong guess.

![Wrong input is displayed](/assets/img/readme/bug1-input.png)

##### Solution:
The input needs to be handled and validatet. To validate the input, I wrote a JS function called "validateInput(input)" that is called when pressing the button "guess".

```js
/**
 * function that takes the input, checks if it is valid, and displays the result
 * @param {string} input - a valid ICE train station.
 */
function makeGuess(input) {
    if (validateInput(input)) {
        tryNumber += 1;
        checkGuess(input);
    } else {
         alert('No valid guess entered. Please only use letters and round brackets.');
    }
}
```

The function checks the input with the given regex expression and alerts the user when the input is invalid.

```js
/**
 * function that checks if the input only uses letters and round brackets
 * @param {string} input - a valid ICE train station.
 */
function validateInput(input) {
    let invalidInput = /[^a-zA-Z()\säüöß]/g;
    if (input == "" || input.match(invalidInput)) {
        return false;
    } else {
        return true;
    }
}
```

#### Wrong option when entering input
When selecting the option "Lingen (Ems)", the result fails, even though it's the correct answer.

![Option failed](/assets/img/readme/bug2-option.png)

##### Solution:
This issue happens, due to a different spelling in the data returned and can be easily fixed by removing the blank space in the option in game.html.

```css
<option value="Lingen(Ems)"></option>
```

## Deployment

The Website is deployed to gitpages, by the automatic deploy option github is providing.
Full process can be found in the [Github Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

![Github Pages Workflow](/assets/img/readme/pages.png)


### Local Development

#### How to Clone

1. Click the code button and copy the link of your preferred clone option.
2. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
3. Type 'git clone' into the terminal, paste the link you copied in step 1 and press enter.

More detailed steps are provided by github: [github guide to clone a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)


#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project.
3. Click the Fork button in the top right corner.


## Credits
* Seconds to min and hours by Wilson Lee https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
* Rest API by Jannis https://v6.db.transport.rest/
* https://github.com/derhuerst/db-rest
* Fetching thigs from REST API https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* Zug Image https://www.freeimages.com/de/clipart/train-clip-art-5341311
* close icon https://www.freepik.com/icon/close_2976286#fromView=keyword&term=Close&page=1&position=0
* info icon https://www.freepik.com/icon/information-symbol_16607#fromView=search&term=info&page=1&position=74&track=ais
* modal / Pop up: https://www.youtube.com/watch?v=TAB_v6yBXIE
* add a new div https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
* Markdown Table of Content by [Jon Schlinkert](https://github.com/jonschlinkert/markdown-toc)
