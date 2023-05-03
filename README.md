# MyIceCreamShop

1. Project's Title
   Node js express REST API web-application called: MyIceCreamShop

2. Project Description
   This project allows a user to access information from a database and make CRUD - calls to view, post, update and delete data.

I used express web application framework in this project, because it provides many features like useful middleware with it. I created my own database in mongodb, and used mongoose to be able to enforce the schemas I made at the application layer.
The dotenv package was installed to help me keep sensitive information safe. I Chose to use Joi when I wanted to validate the user input in post and put requests and asyncHandler to make error handling easier and more efficient.

I wanted to have my own id in addition to the id the database creates for each item in my database. I use a method to count the amount of flavours in my database, and it updates if you post or delete flavours. I had challenges in getting the counting method to work properly for deleting operations, but managed to fix it.
This project does not have a GUI, but I wish to build one soon.
