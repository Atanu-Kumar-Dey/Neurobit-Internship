
# React Web Application For Storing Settings

This project is a react based web application that allows users to store their settings in a tabular form. The user's data is stored in the local storage in real time, ensuring that their settings are preserved even if they close the browser and revisit the application. The project is built using React JS framework with the state management handled by Redux. Material UI is used as the design framework for creating a visually appealing user interface.


## Features
- Real-time data/state management using Redux
- Local storage integration to save channel configurations
- Created upon __React JS__ and __Material UI__ framework.
- Given Schema is used for fetching channels
- Custom Loader and go to bottom button



## Run Locally

- Unzip the folder 


- Install dependencies

```sh
  npm install
```

- Start the server

```sh
  npm run dev
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

As per the instruction I have implemented the web solution, but in some cases I have taken some assumption. When the user suddenly closes the window then also his settings will be stored into the local storage, when an old user comes whose previous data are stored, he/she gets a welcome/reminder message of the previous saved data and one more thing that in the assignment nothing was told about delete button though I have implemented the preliminary functionality of the delete button, but user can find some anomaly or malfunctional with the delete button...
