# Dizplai-Web-Task

Welcome to the Dizplai web application, an application designed to make voting for your favourite player easy.

Technologies Used:

Backend: Built with Node.js using the Express framework for creating API endpoints.
Frontend: Developed with React.js, providing a responsive and intuitive user interface.
Routing: React Router is used for seamless navigation between different views in the application.

Getting Started - To get started with the Dizplai web application, follow these simple steps:

Clone the Repository: Start by cloning this repository to your local machine using the following command - `git clone https://github.com/adil-10/Dizplai-Web-Task.git`
Install Dependencies: Navigate to the project folder and install the required dependencies - `cd Dizplai-Web-Task`, `npm i`.
Start the App: Firstly run the command `cd client`, once completed run the application with the following command - `npm start`.
Explore the App: Open a web browser and navigate to http://localhost:3002 to start exploring and using the Dizplai voting page.
Start the server: Firstly run the command `cd server`, once completed run the server with the following command - `npm run devStart`.
The server should be running on http://localhost:3003. If set up correctly, it should now display 'Hello'.

During the course of this project, I successfully developed a functional voting platform. The web application smoothly guides users through its various pages, providing clear explanations of the questions they are answering and presenting a user-friendly interface for selecting options. Additionally, the platform displays the voting results in the form of percentages, showcasing the popularity of each player based on user votes.

While the project accomplished many functionalities and endpoints, a feature I aimed to implement was the ability to display ordered votes in descending order—ranking the most voted player to the least. Due to time constraints, further research and learning would be required to address this challenge and fulfill all specified requirements.

Given more time, I envisioned incorporating a separate page that lists all available polls for users to participate in. This enhancement would significantly enhance the interactive user experience by offering a variety of polls to choose from, even if all other polls weren't populated with data.

Lastly, an animation would add a dynamic touch to the results page. The animation would activate as the user navigates to the results, featuring a gradual bar fill-up representing the result percentages. Integrating such visual elements would contribute to a more engaging and visually appealing user interface.


To further enhance the project's capabilities, functionality, and security, I explored a couple of options. Firstly, the consideration of implementing a straightforward yet effective database solution surfaced. Opting for a MySQL database would facilitate the secure storage of data, allowing developers to incorporate multiple layers of security into the project.

Additionally, I contemplated the adoption of Google Firebase. This cloud-based platform offers a range of functionalities, including hosting capabilities and built-in methods for seamless data transmission and retrieval. Moreover, it features an enhanced NoSQL database and hosting capabilities allowing for developers to host their website live, along with viewing previous iterations of the website. Given that Google Firebase is developed by Google, it inherently provides a fundamental level of security, surpassing the current implementation's capacity. Furthermore, it empowers users to augment the existing security measures with additional layers of their own.

As of the current implementation, the poll data is stored within the local storage. This implementation makes it very susceptible to attacks such as cross-site scripting (XSS) attacks. Storing sensitive information, like voting data, locally exposes it to unauthorised access and manipulation.  

To ensure the application was running seamlessly without erros, continuous manual testing was involved during the creation of the application. Exploring the user interface continuously to identify and address any potential issues. Along side this I then also got other users to test the application giving feed back on what could have been improved upon. This is a simple yet effective method as it ensures the applcation is continuusly evolving and being improved based upon what actual users have told me.

On the backend, a multifaceted testing strategy was used, encompassing unit testing and integration testing. Unit tests meticulously scrutinised individual functions or methods in isolation, validating their correctness. Integration tests delved into the interaction between diverse components, ensuring seamless collaboration.

Additionally, tools like Postman were deployed for the meticulous assessment of API endpoints, submitting diverse requests and validating responses ensuring consistent execution of tests with every code change.
