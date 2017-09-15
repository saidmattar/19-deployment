### Documentation  

### <a name="whatthisprojectdoes"></a>What this project does:  

Today we are practicing deploying through Heroku, using travis CI (Continuous Integration) to listen for changes on a branch.  

The final goal for this project is to create a mock version of instagram. We're calling it CF gram. CF gram is an app that can let users sign up, sign in, create galleries, and then add images that belong to those galleries. We will be using Amazon Web Services (AWS) as our database to store these images.  

We are now using Bearer to allow the user to make updates/changes to their login information.  


### <a name="learningobjectives"></a>Learning Objectives:  


### <a name="stepsforme"></a>Steps for me to complete:  
* create an AWS account
--> DONE
* create an AWS Access Key and Secret
  * add the Access Key and Secret to your `.env` file
  --> Created a bucket, set properties, set permissions
  * **DO NOT SHARE THESE KEYS, AND DO NOT COMMIT THEM**
  --> BY ADDING THE KEY TO THE .env FILE IT SHOULD NEVER BE COMMITTED
* create a new model that represents a file type that you want to store on AWS S3
  * ex: `.mp3`, `.mp4`, `.png`, etc
  -->
* create a test that uploads one of these files to your route
-->
* use the `aws-sdk` to assist with uploading
-->
* use `multer` to parse the file upload request
-->

### <a name="devsteps"></a>How another dev could 'get started' with my api on their own:  
  * How do you clone this project?  
      1. First click on the Fork button in the upper right hand corner to make a copy of my repository.  
      2. That will automatically take you to your github. Then click on the green 'clone or download' button to copy the URL to your machines clipboard.  
      3. In terminal navigate to wherever you want this clone to live, type 'git clone <this is where you paste the URL you just copied>', you should see a 'master' branch appear.  
      4. Then type 'git checkout -b <branch name of your choosing> to create a fresh branch to work from.  
  * How do you start using this project?  
      1. You will need to have NodeJS installed on your machine.  
      2. You will need to install httpie in one terminal window to test HTTP requests.  
      3. Then start type nodemon or node server.js in a separate terminal window to get your server running.  
      4. You will need to npm i to install node modules.  
      5. But you do not want to commit theses large module files, so you must create an `.eslintignore` file that includes nodemodules.
      It looks like this within the file:  
      ```
      **/node_modules/*
      ```

### <a name="mongosteps"></a>Mongo database steps:  
1. Create db folder within data folder.  

2. Upper right window (within lab-maddy folder)  
```
mongod --dbpath ./data/db
```
3. Lower right window (within lab-maddy folder)  
```
mongo
```
4. Upper left side terminal window (within lab-maddy folder)  
```
npm run start:watch
```
5. Lower left window - POST, GET, PUT, DELETE requests  

#### To see what's in your database:  
````
show dbs
````
#### Open a database:  
```
use <db_name>
```
#### Show collections:  
```
show collections
```
#### To open the collection you're working with:  
```
use cf-gram-dev
```
#### To delete the data in the collection:  
```
drop cf-gram-dev
```

### To test POST, GET, PUT and DELETE an object on the server, use these requests in terminal (we're able to do this with the http client superagent):  


### Example POST(sign up) request in Postman:  
```
localhost:4000/api/signup
```

### Scott's Example Requests  
* **POST /api/toy** (requires bearer auth token)  
`https://localhost:8080/api/toy`
```
js
<!-- Example Body -->
{
  "name": "barney,
  "desc": "purple dino"
}
```
### Example GET(sign in) request in Postman:  
```
localhost:4000/api/signin
```

### Example POST gallery request:  
```
http POST localhost:3000/api/gallery name=name desc=password
```

### Example PUT request:  


### Example DELETE request:  


### <a name="packages"></a>Packages and commands to remember:
#### New packages (introduced for this project):
* npm install jsonwebtoken (For jwt (JSON web tokens); this is what makes it possible for us to create user tokens)
* npm i bcrypt (For hashing user passwords)
* npm install dotenv (This is for... )

#### For Mongo:
* npm install mongodb into your project directory (To install Mongo)
* mongod (To start the MongoDB process)
* mongo (To start the MongoDB shell)

#### For Mongoose:
* npm install mongoose (To install mongoose)

#### General:
  * In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",
  * npm install express -
  * npm i or npm install (For node modules)

###### HTTP requests:
  * node server.js or just nodemon (to start a command line server)
  * rs (restart, if needed)
  * ^C (control-C to stop node server)
  * npm install httpie (A command line HTTP client, to be able to test making http requests. An alternative is postman.)
  * npm install superagent (To be able to make http requests)
  * npm install uuid (For creating unique user ids)
  * npm install -D jest (To be able to run tests)
    - npm test (To actually run the jest test)

###### TESTS:
  * run run start:watch (This option won't tell what is wrong with your code)
  * npm run start:debug - (Then attempt a POST and this option will tell you where you are wrong)
  * npm run debugger (Not sure what makes this one different or special yet...)

###### Not needed for every project:
  * npm install bluebird (sets this as a dependency in package.json. Bluebird is a promise library)
  * npm install faker (this gives provides us with fake data for testing things like user info- names, addresses, phone numbers, etc) - DONE
  * npm install --save multer (for uploading files)-- DONE
  * npm install aws-sdk (for interacting with AWS) --DONE

#### <a name="generalnotes"></a>General notes/changes made from previous projects:
* How to configure this labs' .env file:
  - Note: The angle brackets are just placeholders and should not be included in your code.

```
PORT='8000'
MONGODB_URI='mongodb://localhost/<db_name>'
APP_SECRET='yourdbsecret'
AWS_BUCKET='<your_bucket_name>'
AWS_ACCESS_KEY_ID='<your_key>'
AWS_SECRET_ACCESS_KEY='<your_key>'
```

* In package.json, within scripts add the '--runInBand' to the 'test: jest.' This will make sure all tests run sequentially.
```
"test": "jest --runInBand",
```
* I copied my work from lab 17 into this lab.
* Create an AWS account
* Created `.env` & `.test.env` files
* Isaiah recommended adding this as an additional test command in package.json-    
```
 "testtwo": "jest -i",
 ```
 * Signed up for AWS
 * FYI, if anyone wants to keep using httpie, here's a sample request to show how you would format to use a token for auth:
 ```
`http GET :5000/api/gallery/1234-5678   'Authorization:Bearer myWonderfulToken'`
```
* New package: aws-sdk - allows our app to interact with AWS.
* New package: del - creates binary representation of an image, del deletes that stuff after hte image is in allows
* New package: multer- allows us to have a form where we can upload an image and it's going to get sent as form data not raw json cause we can't translate a raw image as raw json we have to send it as ....breaks it down. its middleware. uses binary data to upload to s3 then deletes that binary file.
* In server.js we 'server.stop = () => {'' the server and .close() the mongoConnection.
* Bucket name: cf-401-maddybucket
* Signed up for billing email notifications, for the 1% off chance that someone gets ahold of my AWS key.
* Added a .travis.yml file- I think of the .travis.yml file as the package.json for travis. It's how we want our builds to be executed.

#### 9/14:
* ADDED a .travis.yml file with the following:
```
language: node_js
node_js:
  - 'stable'
services:
  - mongodb
addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - gcc-4.8
      - g++-4.8
env:
  - CXX=g++-4.8
sudo: required
before_script: npm i
script:
  - npm test:lint
  ```

#### How to make an AWS bucket:  
1. create bucket- 401-travisbucket1
  Heroku staging bucket- 401-lab19-staging   
2. console home  
3. users  
4. Add user - cd-401-secondary, check programatic access  
5. Create group- 401-s3, check amazonS3FullAccess (with this people can't create EC2 instances! This is good!)  
6. Click Next  
7. Click Create User  
8. Should see a green 'Success'  
9. Click the next button, should see Access Key ID and Secret access key  


#### <a name="resources"></a>Any resources that helped me complete this project:  
* AWS  
* Travis  

### <a name="collaborators"></a>Collaborators:
Michelle, Madeline and Isaiah.
