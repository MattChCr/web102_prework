# WEB102 Prework - *Sea Monster Website*

Submitted by: **Matthew Chavez Cruz**

**Sea Monster Website** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **9** hours spent in total 

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] Changed the browser icon so the website's tab is easily identifiable.
* [x] Adjusted some of the colors on the website to be more appealing.
* [x] Changed the hover lightbox from affecting the stats-container to a single stats-card so the user
can follow along easier.
* [x] Added a navigation bar that scrolls with you, it allows users to go the top of the page, the stats
section or the games section regardless of where they are on the page.
* [x] Added the hover lightbox effect to the filtering buttons so users can more easily tell which one they are going to choose.
* [x] Added the amount remaining till the funding goal is reached when filtering for unfunded games.
* [x] Added live search bar to help users in finding a specific game.
* [x] Fixed issue where GAMES_JSON would always remain sorted (now when showing all games it matches the original order the page initially loaded).
* [x] Added interactive game titles on the game card - these would link to a site to either buy the game or to help fund it (currently the game's provided image is acting as a placeholder).


## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='walkthrough.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows


## Notes

* When I was first creating the game-cards, the images would expand past the white rectangles, at first I was extremely lost because I had followed the instructions fine but in the end I just had to adjust the CSS.

* Creating the navigation bar was tricky since I wanted to allow it to follow the user without the entire header doing the same. I had to play with the CSS quite a bit to get it to look the way I wanted while not looking out of place on the website.

* I had a small issue with the navigation bar creating new tabs when navigating to an element on the same page, I didn't realize that using '_self' with an element id would produce the opposite effect that i wanted. After a bit of research I was able to resolve issue easily.

* The most difficult thing for me was the search bar, I haven't had much practice creating something like it for a website but I knew I could use the filter method to get the desired function. There was a lot of trial and error in connecting the html and javascript, specficially with the eventListeners, but it works exactly as I wanted it to now.

## License

    Copyright [2024] [Matthew Chavez Cruz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
