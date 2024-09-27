# WhereIsFrontEnd

This project is the frontend of a "Where's Waldo" style game, created as part of an activity for [The Odin Project](https://www.theodinproject.com/). The application uses a Rails API backend that provides background images and handles the game's data, including the registration of games and results. The goal of the game is to find specific characters hidden within a large, detailed image, challenging the player's observational skills and speed.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Game Logic](#game-logic)
- [Challenges Faced](#challenges-faced)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Gameplay:** Players click on characters hidden within a large, complex image.
- **Leaderboard System:** Tracks and displays the best times for finding all the characters.
- **Dynamic Backgrounds:** Images are fetched from the Rails API backend, allowing for a variety of levels.
- **Responsive Design:** Optimized for different screen sizes to provide a smooth user experience.

## Tech Stack

- **Frontend:** React, JavaScript, CSS
- **Backend:** Ruby on Rails API
- **API Integration:** RESTful API calls to fetch game data and register results


## Game Logic

The game presents a large image with hidden characters that players need to find. The core logic revolves around:

- **Image Loading:** The background images are fetched dynamically from the backend, allowing for a varied gameplay experience.

- **Character Detection:** Players click on the image to select a potential character location. The backend verifies whether the click is accurate based on predefined coordinates.

- **Scoring System:** Time tracking is implemented to record how quickly players can find all characters, adding a competitive aspect with a leaderboard.

- **Feedback Mechanism:** If the player clicks correctly, the character is marked as found; otherwise, they are prompted to try again.

## Challenges Faced

- **API Integration:** Coordinating between the React frontend and the Rails backend required careful handling of asynchronous data fetching and error management.

- **Coordinate Precision:** Detecting clicks on the exact coordinates of characters was challenging, especially accounting for varying screen sizes and responsive design issues.

- **Performance Optimization:** Large images and frequent API requests posed performance challenges, requiring optimization strategies to maintain smooth gameplay.

- **CORS Issues:** Integrating the backend and frontend involved troubleshooting CORS errors to ensure seamless data flow between the two applications.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
