# wake-spot-map-app
My final project for React course Feb. 2025 @SoftUni

# The Wake Spot Map



## About the project
The Web Spot Map is an application that lists wakeboard parks and locations around the world in one place for users to browse. 



## Built with
__Front-end:__ 
- React.js 
- HTML & CSS


__Back-end:__ SoftUni Practice Server 

Link to the documentation of the server [here](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md#softuni-practice-server)



## STARTING the project
To start the project you need to:
- clone the repository - downloading it to your computer;
- open the project folder (in an integrated development environment (IDE), like VS Code); 
- to start the server:
  - right-click on the server folder and select the Open in an integrated terminal option;
  - start the server by typing in the terminal the command: ```node server```.
    (The server runs on port 3030.)
- To start the app: 
  - open a second terminal and navigate to the client folder (type ```cd client```); 
  - install the dependencies by typing the command: ```npm install```;
  - start the app by typing: ```npm run dev```;
    (The client runs on port 5173 by default.)
    You can open the project in your browser by clicking on the http://localhost:5173 link in the terminal (Ctrl + click), or by typing/pasting http://localhost:5173 in your browser. 



## Key features
The application has __Public Part__ (accessible to guests without authentication) and __Private Part__ (available for registered users). 

Guests can view the __Home__, __Wake Parks__ (catalogue with all parks) and __Deatils__ pages. They can __register__ with an email, username and password, and __login__ with an email and password for more functionality. 

Registered users can __comment__ on existing wake parks, __add new wake parks__, as well as __edit__ and __delete__ wake parks they have added. 



## Public part
The part for non-registered users, gives access to:
- Home Page - links to the Wake Parks page; shows a list of the 3 last added parts.
- Wake Parks Page - a catalog of all available wake parks with brief information about them. When you move your cursor over the design image, you can choose to go to design details page. 
- Wake park Details Page - shows more detailed information about the selected wake parks and functionalites for authenticated users. You can go to the details page by clicking on the See more button of the corresponding wake park on the Home Page and/or Wake Parks Page.
- Login - shows when you click on the Login link in the header or if you try to  reach the Add a Park Page. 
- Register - you can reach the Register form when you click on the register link on the Login page.

## Private part
Registered users have access to:
- Comments functionality- you can comment a wakepark by wriing a comment and clicking on the Add a comment button on the Details Page. 
- Add a Wakepark - this page contains a form for adding a new wake park.
You can go to Design Details by clicking on them.

Registered users who have added a wake park have acces to:
- Edit Page - You can go to the Edit page by clicking on the Edit button on the Deatails page if you were the one who added the wake park. The Edit page shows a form for editting the information about the selected wake park. Save the edits by click on the Edit button.
- Delete - You can delete the wake park by clicking on the Delete button on the Deatails page (after a confirmation) if you were the one who added the wake park. 

Admins (initialized on the server, which can be used for immediate demo testing):
    - admin@abv.bg : admin
    - peter@abv.bg : 123456
    - george@abv.bg : 123456
