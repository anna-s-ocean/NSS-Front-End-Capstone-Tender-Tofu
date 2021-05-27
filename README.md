# Tender Tofu

  Tender Tofu is intended to  take all of the guesswork out of determining where to eat vegetarian cuisine in Nashville. By presenting numerous of the restaurant choices for both users to choose from, Tender Tofu presents the restaurant favorite they have in common for the particular outing.
  

## Table of Contents
  * [Project Requirements and Features List](#project-requirements-and-features-list)
  * [Technologies Used](#technologies-used)
  * [Installing and Launching Tender Tofu](#instructions-for-installing-tender-tofu)
  * [Appendix 1: Planning Documentation](#appendix-1-planning-documentation)
    * [Entity Relationship Diagrams](#entity-relationship-diagram)
    * [Wireframes](#wireframes)
  * [Appendix 2: Set Up Instructions](#appendix-2-set-up-instructions)

## Project Requirements and Features List
### Get Started
When a user first registers/ logs into an account with Tender Tofu they will be presented with a form to select their friend from a drop down and a date for an eatery outign. By selecting the date and friend, the user is then presented with local vegetarian restuarant theat they can accept or pass on. The user contining to select until they have reached the end of the list.
![Get Started GIF](src/images/gif/TenderTofuGIF-downsized.gif)

### Friend's Turn
The friend that the user above has selected now opens the app and navigates to the Friend's Turn to Swipe page and selects the outing with the first user and the agreed upon date. Then the seconnd user is prompted with the same list as list user one. They also select Yummy or Pass as before. Through the use of short polling, once the friend/ second user has selected a restaurant in common a window alert with restaurant that both user like with appear in both user bowsers.  
![Restaurant Gif](src/images/gif/TenderTofuRestaurantPics.gif)

## Technologies Used
  ### Development Languages and Libraries
  <img src="./src/images/ReactLogo.png" width="15%"></img> <img src="./src/images/gitLogo.png" width="10%"></img> <img src="./src/images/CSS3Icon.png" width="7%"></img> <img src="./src/images/ReactCalenderNPMIcon.png" width="10%"></img>

  ### Development Tools
  <img src="./src/images/githubIcon.png" width="10%"></img> <img src="./src/images/DBDiagramIcon.png" width="10%"> <img src="./src/images/VSCodeIcon.png" width="10%"> 

## Instructions for Installing Tender Tofu
  To launch the Tender Tofu app, you will need to have access to command line tools, node package manager, JSON Server. If you do not have access to any of these tools, you can find instructions for installing them in the [Appendix.](#appendix-2-set-up-instructions)

  Clone this repo on you personal machine using the following command
  ```sh
    git clone git@github.com:anna-moore/NSS-Front-End-Capstone-Tender-Tofu.git
  ```

  Install the NPM dependencies for this project using the following commands
  ```sh
    cd front-end-capstone
    npm install
  ```

  From your terminal window, type
  ```sh
    npm start
  ```
  Open another tab in your terminal window and cd into the API directiory, type
  ```sh
  json-server -p 8088 -w database.json
  ```

  Now that the server is up and running, you can open an internet browser and access API of the application
  ```sh
    http://localhost:8080/
  ```

 ### Congratulations you are now experiencing Tender Tofu!

  ## Appendix 1: Planning Documentation

  ### Entity Relationship Diagram
  ![Tender Tofu ERD](/src/images/TenderTofuERD.png)

  ### Wireframes
  <img src="./src/images/Wireframe1.png" width="60%"></img> 
  <img src="./src/images/WireFrame2.png" width="60%"></img> 
  <img src="./src/images/WireFrame3.png" width="60%"></img> 
  


  ## Appendix 2: Set Up Instructions

  You will need to have command line tools installed for your computer to use terminal commands.

  Linux/ Windows users, please visit the [Git page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the instructions for set up

  Mac users follow the instructions below

  Open your terminal and type
  ```sh
    git --version
  ```

  You will now need to configure your git account. In the terminal window, type:
  ```sh
    git config -global user.name "Your Name"
    git config -global user.email "Your Email"
  ```

  If you do not have Node.js installed on your machine, visit the [Node.js Download Page](https://nodejs.org/en/download/) and  follow the instructions. To ensure that it is installed correctly, in your terminal window, type
  ```sh
    echo $PATH
  ```
  Ensure that the result has the following in the $PATH
  ```sh
    /usr/local/bin
    or
    /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
  ```

  Now you can follow the [installation instructions](#instructions-for-installing-simplified-supper) to get Tender Tofu up and running on your machine.

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

