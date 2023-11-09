# Auto Mail ![](https://i.imgur.com/fe85aVR.png)

The Auto Mail is an open-source automated email sending application that enables easy mass email sending. With just a few configurations, you can define an email with a standard subject and text, which can also include attachments, and effortlessly send them to a predefined contact list. The project is built using Node.js and is part of my attempt to create projects that cater to my everyday needs.

Screenshots
----

![Screenshot](https://github.com/Mr-nobody2001/AutoMail/blob/main/assets/Captura%20de%20tela%20de%202023-11-04%2020-08-54.jpg)

Installation
----

Preferably, you can download Auto Mail by cloning the [Git](https://github.com/Mr-nobody2001/AutoMail) repository:


> git clone git@github.com:Mr-nobody2001/AutoMail.git
    

Usage
----
1. Open the configuration file located in the "config" folder and fill in the necessary information.

2. In the same "config" folder, place the text you wish to send in the email in the "text.txt" file.
   
4. Insert the recipients into the recipients_list.txt file.

5. To enable authentication, create an application-specific password on Google and include it in the configuration file. You can find the steps to create the application-specific password [here](https://support.google.com/accounts/answer/185833?hl=pt-BR).

6. If you have email attachments, place the attachment files in the "attachments" folder within the project.

7. In the terminal, run the command "node ./app.js" from your project's directory. Make sure you are in the root directory of the project when running the command. Finally, execute the command npm install in the terminal.

Important
----

* It is necessary to have a Google account for the proper functioning of the application. 

* To ensure the application works correctly, the configuration and attachment files should be placed in their respective folders. In the case of configuration files, they should not be deleted to maintain the application's functionality.

