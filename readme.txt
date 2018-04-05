How to run the Project

1-      Download Node Js => https://nodejs.org/dist/v6.11.5/node-v6.11.5-x64.msi


2-      Open cmd inside the project folder “Angular cli location”.

3-      Download npm using = > “ npm install download “ command.

4-      download libraries using =>  “ npm install “ command, you will find a new folder with name node_modules.

5-      Now you can start the project using  http://localhost:4210

 

Notes: 

·         If you want to change the port you can go to angular cli file, inside defaults object you will find serve object, you can change the port from it, but to use the app by a new port you have to stop the app by clicking " ctrl + c " in command line  then run “ npm start “ command again. After that, you will see the project hosted by a new port.

·         If you want to deploy the project  " for responsive case " you have to run “ npm run build “ command then you will find a folder called dist inside the project path created, then set the physical path in IIS on it. Note: this folder always deleted when running “ npm start “ command.


Let me know if you need any help,
 
Best regards