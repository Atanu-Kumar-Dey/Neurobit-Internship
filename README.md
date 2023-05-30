
# Chat Screen Progressive Web Application (PWA)

This project is a react based web application that allows users to store their settings in a tabular form. The user's data is stored in the local storage in real time, ensuring that their settings are preserved even if they close the browser and revisit the application. The project is built using React JS framework with the state management handled by Redux. Material UI is used as the design framework for creating a visually appealing user interface.


## Features
- Real-time data/state management using Redux
- Local storage integration to save channel configurations
- Created upon __React JS__ and __Material UI__ framework.
- Given Schema is used for fetching channels
- Custom Loader and go to bottom button



## Run Locally

Unzip the folder 

```sh
  Neurobit-Internship
```

Go to the project directory

```sh
  cd PWA-Chat-Application
```

Install dependencies

```sh
  npm install
```

Start the server

```sh
  npm run start
```


## Deployment

This application is also deployed to Vercel[&nbsp;Live Demo](https://neurobit-internship-obfr.vercel.app/)


## Tech Stack

**Client:** React,Interesction Observer,Material UI
**Design:** Figma


## Screenshots

<img width="960" alt="Screenshot 2023-05-30 182549" src="https://github.com/DominateAi/Dominate-AI/assets/83961023/bb7c7360-5549-4b0f-a711-3650147dadb2">
<img width="960" alt="Screenshot 2023-05-30 182522" src="https://github.com/DominateAi/Dominate-AI/assets/83961023/116ec8de-d342-4e00-818d-81d2418d10b7">
<img width="960" alt="Screenshot 2023-05-30 182450" src="https://github.com/DominateAi/Dominate-AI/assets/83961023/7e8528a7-6b6f-4e39-8321-537061483e3c">
<img width="960" alt="Screenshot 2023-05-30 182428" src="https://github.com/DominateAi/Dominate-AI/assets/83961023/91770abd-5e9e-4096-960a-2267c2df58fb">


## Assumptions  

The provided API uses HTTP, which is not secure. When the app is deployed on a website using HTTPS, a mixed content error occurs because the browser blocks insecure requests. Although the assignment suggests opening the API link in a new tab and allowing access, it doesn't resolve the mixed content issue. In the deployed link, the API request fails due to the same error.
