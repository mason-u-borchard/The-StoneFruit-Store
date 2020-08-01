# Project Name #
WidgetWay Extreme

## Summary ##
  > WidgetWay Extreme is a fullstack dynamically responsive web application heavily centered on frontend design mastery. The challenging part of creating WidgetWay Extreme was due to one rule: it had to mimic the appearance of any individual application download page at the Google Play Store Website: https://play.google.com/store/apps/details?id=com.whatsapp

  > This application consists of four microservices: the app preview/information and image carousel, the logistics module, the review module, and the suggested apps module. WidgetWay Extreme was built from the ground up using the MERN Stack and a variety of frontend libraries and techniques. The app was deployed via five AWS/EC2 instances - one for each microservice, and one of the proxy server - but has since been taken down due to the cost of maintaining the instances.

## How to run app after cloning from Github ##
  > 1. Run "cd ./app-preview-image-carousel-module"
  > 2. Run "npm install" to install dependencies
  > 3. Run "npm start" to start server
  > 4. Run "npm run seed" to set up database and populate with initial data
  > 5. Run "npm run build" to create bundle.js
  > 6. Run "cd .." and repeat steps 1 - 6 for "logistics-module", "reviews-module", and "suggested-apps-module" directories
  > 7. Run "cd .."
  > 8. Run "cd ./proxy-server"
  > 9. Run "npm install" to install dependencies
  > 10. Run "npm start" to view all four microservices render to one screen at http://localhost:3000

