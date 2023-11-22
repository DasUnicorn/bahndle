# BAHNdle
Bahndle *('Bahn'- german for train)* is a german train journey guessing game with real time train Data.
Provided with a start locatiion, the time needed to reach the searched destination as well as the number of transfers the journey takes, the user has to find the destination.
The goal is to find the destination in as few guesses as possible. A challenge targetted to the Train-Nerd-Community, that like me, take all her travels through the country only on public transport and have a good knowledge of the train network in general.

This project uses HTML/CSS/Vanilla JavaScript to display a fully responsive web experience. And uses the [Rest API by Jannis](https://v6.db.transport.rest/) for live data.

![Lighthouse Test Result Game](/assets/img/readme/mockup.png)


## Technologies Used

* GitHub – storage and deployment
* Sublime Text - Editor

### Languages Used

HTML, CSS, Java Script

### Frameworks, Libraries & Programs Used

Github

## Design
My design is isnpired by the actual [color scheme](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Farbe) and [typography](https://marketingportal.extranet.deutschebahn.com/marketingportal/Marke-und-Design/Basiselemente/Typografie) of the Deutsche Bahn. For Copyright reasons I try to find an simular asthetic without copien the design or fonts directly.

## Features 

### Existing Features

#### Logo
<img src="/assets/img/readme/logo.png" width="300px">

#### Start Page
![Startpage](/assets/img/readme/index.png)

#### Help Page
![Infopage](/assets/img/readme/info.png)

#### Game Area
![Gamepage](/assets/img/readme/game.png)

#### Making a guess
![Autocomplete](/assets/img/readme/autocomplete.png)
![Guessing](/assets/img/readme/guess.png)

#### Try Area
![Try Area](/assets/img/readme/guess-area.png)

#### Win and Trys
![Pop Up Win](/assets/img/readme/win.png)


### Features Left to Implement

#### Display the journey after win

#### Turning it into a daily guessing game

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

### Manual Testing


### Testing as Tutor / Grading Person


### Unfixed Bugs

#### Loosing the progress when checking the "How to play"-Site
Since the information on how to play is on a seperate site, the progress of the game gets lost when checking it out mid playing.
In the future this game will be restructured into a daily guessing game, where everyone tries the same riddle each day. To achive this the game need to be build on the server site. Then caching the current state is an option that can be implemented to save the current game state.

#### Spaces and Special Characters in Guesses
When entering a guess, the spelling in the Option provided might not fit the name that is returned by the request. Usually that is the case with blank spaces in Names.

I tried to handle as many cases as possible by adjusting the Input Option, but there might still be cases left. Since in the long rung this will get obsulent by changing the system to check IDs instead of names, this was not an issue I focused on.

#### Edgecases in Station Names
Sometimes a stopp is not checked correctly due to multiple spelling option.

Known examples:
* Köln Messe/Deutz and Köln Messe/Deutz Gl.11-12
* München Hbf and München Hbf Gl.14-27
* München Hbf and München Hbf (tief)
* Berlin Hbf and Berlin Hbf (tief)
* (and maybe more cases)

In these cases a stopp has one unique ID, but multplie names. Instead of handling all Edgecases seperatly the better option would be to check IDs in the future.

#### Error: "Line.data.line is undefined"
Sometimes, when loading the site the error "Line.data.line is undefined" can be seen in the console.
When this happens it's not possible to guess any stopps on the way and any guesses unless the correct answer is turning red.
[pictures of the error message]

##### The problem
When building this project I assumed that all 'legs' (the way from a to b) of the request return a specific train, since this is a train journey. But as it turns out: when changing from a regional to a long distance train it can be neccessary to change the part of the train station. From Berlin Hbf to Berlin Hbf (tief). Sometimes tracks are outside or seperatied from train stations, for Example "Hamburg Hbf" and "Hamburg Hbf (S-Bahn)".
In these edge cases the journey between the two stops in question is taken by foot and there is no line name and id avalable. The request throws an error and the array is never filled with the stops and stays empty.

##### How to fix this issue
When getting the id and name there needs to be a check if the value is undefinied or empty.
When this is the case the request for stops should not be send. Instead only the current Station the person is walking to need to be added.

##### Why this isn't fixed yet
Sadly this issue isn't fixed easily. While checking for undefined or empty values can be easily done, the current system is designt around loops that match the amount of transfers. To exit these loops it's nececery that the names of stations match precisely, which isn't always the case (as seen above). If not, some loops might run forever and break the prograg. So in the long run this should be fixed by compairing IDs. This would need a complete restruchture of the code and isn't possible in the given time.

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
