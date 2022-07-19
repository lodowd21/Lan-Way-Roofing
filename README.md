# Lan-Way Roofing

## Introduction


Lan-Way Roofing is a roofing company specializing in multi million dollar commercial and industrial projects for major clients. Lan-Way is a privately owned and operated business founded in 1967 by Wayne Eidson, currently presided by Brownie Eidson. Lan-Way Roofing engaged me to work with them to build and design a new modern website. The current website has not been updated since 2012, much of the information is out of date including critical information such as contact details. The website is no longer maintained and lacks basic features. The owner believes that business is being lost as contact requests submitted via the website are not being delivered reliably and securely. 

The application encompasses front-end and back-end development to provide a complete and functional web application for customers and employees to interact. The website provides utilities that handle quote requests and functions that allow administrators to update dynamic content on the webpage, and more. The user interface is designed based on input and feedback from company employees. The goal of the front-end development is to have a professional and aesthetic user interface where customers can learn more about the company's history, mission, roofing techniques, and see featured projects. Back-end development includes a database that stores employee and customer information and operations that implement the application's functional requirements. The website was developed with security, scalability, and performance in mind. This is an azure cloud solution with all the benefits of the cloud such as laaS, PaaS, CI/CD, IaC (infrastructure as code).

![LanWay_Architecture](https://user-images.githubusercontent.com/60274768/161867950-4f70588c-b2e4-405e-8096-ca95894051ac.jpg)


**Built with:** 
<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" />


## URLS

The below URLs are no longer active. Please kick on the link to watch a demo video of the website starting at 12:38.
https://drive.google.com/file/d/15rr7U3J1I88idliRFrDYgVNb3Dd7bCDV/view?usp=sharing

Main Page:
https://victorious-sand-018f36a0f.azurestaticapps.net/
<br/>

Admin Login:
(Test username: TestAdmin Test password: csci481)
https://victorious-sand-018f36a0f.azurestaticapps.net/admin.html
This is also accessible on the main page, at the very bottom there is a link that says "Admin" in dark blue to the right of the American flag.


Admin Functions:
https://victorious-sand-018f36a0f.azurestaticapps.net/admin_functions.html

The above urls are non-production urls used for testing. Once the legacy website is retired, the urls will be updated in dns to https://www.lanwayroofing.com/*

## Azure
This projects implements the Lan-Way website on Azure using Azure Static Web Apps which provides a serverless deployment environment and ability to serve dynamic content via APIs: https://azure.microsoft.com/en-us/services/app-service/static/

## Logic Apps
The logic_app_workflows folder contains all the apis used on the web application.

- lanway-la-admin-login: When a user is logging on this api is called to validate that their username and password is in the database.
- lanway-la-createEmployee: This api is used when an admin is creating a new employee, it will insert the data into the employee table in the database.
- lanway-la-createUser: This api is used when a new admin is being created, it will insert the data into the user table in the database.
- lanway-la-delete-employee: An employee ID will be passed in and will then that row will be deleted from the employee table.
- lanway-la-get-contact-card: This is called when the web application is loaded and dynamically retrieves the contanct information from the ContactCard table.
- lanway-la-get-quotes-by-email: A customer email will be passed in and then it will retrieve all of their quote messages and display them in a table. Use the email "102@unca.edu" to see an example.
- lanway-la-getEmployeeInfo: This will display all employee information after their ID has been submitted.
- lanway-la-quote-email2: After a customer submits the form to request a quote this api will automatically send an email to the company email, add the customer information to the Customer table, and add their email, message, and time it was submitted to the Quote table. 
- lanway-la-update-contact-card: Called when an admin updates company information such as address.
- lanway-la-update-employee: This api is called when employee data needs to be updated such as their phone number. 

## Database
This is an azure postgres managed database. The database stores customer and employee information. The SQL code to create the tables is in the postgres_database folder.

Link to my github repo that contains a driver file and java program used for testing to see if a connection to the database was established. https://github.com/lodowd21/Lan-Way-Roofing-DB

## Postman
The postman_api_test_collection folder contains a JSON script of the all the requests that were used to test the apis.

## CI/CD Pipeline
The pipeline is an azure DevOps pipeline that is triggered when the code is pushed into github via visual studio code or eclipse. A webhook on this github repo is configured to run the pipeline. The pipeline verifies the build and deploys the website to the runtime stack. In the event of a pipeline failure an email is sent with details on the fail. Pipeline invocations can also be viewed via the azure portal. 

## Author
Liam O'Dowd
