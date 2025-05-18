## HTTP methods

HTTP methods are the different types of requests a client can make to the server. They allow the backend to recognize what type of response the clients expect.

### 1. GET
The GET method is used to fetch data from a specified source.  For example: `/users` fetchs an array of user data.

### 2. POST
The POST method is used to send or create new data on a specified source. POST: `/users` can contain a body which consists of necessary data.

### 3. PUT
The PUT method is used to update an existing data on the server. PUT: `/user` can contain a body with user data that needs to be updated.

### 4. DELETE
The DELETE method is used to remove existing data from a specified source. DELETE: `/user` can have additional `/$user_id` to specify which user data to remove or it may also contain a body that takes multiple user ids.

---

## HTTP Status codes

HTTP Status codes are numeric values sent by the server to the client. 

### 1. 2xx: Success
These status codes are used when the request was successfull and server is responding properly.

### 2. 4xx: Client Error
These status codes are used when there was something wrong in the client side.  
For example:  
- 400 means that the validation was failed  
- 401 indicates unauthorized request  
- 404 tells that the requested data is not found

### 3. 5xx: Server Error
These status codes indicate that the problem is in the server side.  
- 500 code just means a generic server error  
- 503 means that server is temporarily unavailable

## CSS selectors
These are used to add styling to the selected tags.
1.  **Universal selector (*)**: Selects all elements:

    ```css
    *{
        margin: 0;
        padding: 0;
    }
    ```

2. **Type selector**: Selects all the elements of given type.
    ```css
    p{
        color: blue;
    }
    ```

3. **Class selector**: Selects all the elements of specified class.
    ```css
    .operator-button{
        background-color: red;
    }
    ```

4. **ID selector**: Selects the element with the given id.
    ```css
    #scaffold{
        font-size: 2em;
    }
    ```

## Git Basics
1. **init**: This command is used at the beginning of the project. This is neccessary because this command creates a hidden file `.git` which helps in tracking changes.
    ```bash
    git init
    ```

2. **add**: This command is used to add changed files and folders. `git add .` adds all changed files or mentioning file names will only add specfic files.
    ```bash
    git add fileName
    ```

3. **commit**: This command saves a permanent snapshot with a message. It lets Git know what changed and when.
    ```bash
    git commmit -m "commit message"
    ```

4. **push**: This command sends the local commit to a remote repository. It uploads the changes to the git repository.
    ```bash
    git push
    ```

5. **pull**: This command is use to fetch changes from the the git repository. 
    ```bash
    git pull origin branch-name
    ```

6. **clone**: This command is used when creating a copy of an existing repository.
    ```bash
    git clone repository-url
    ```

7. **branch**: In Git, branches are the copies of a project where multiple people can work together without affecting one another. `git branch` is used to create a new branch.
    ```bash
    git branch branch-name
    ```

## Callback Function
A callback function is a function that is passsed as an argument to another function.

## Higher Order Function
A higher order function is a function that accepts another function as a parameter or returns a function.

## Array Methods
1. **filter()**: Retruns a new array that pass certain condition.

2. **map()**: Iterates through each elements of the array, applies a function to the element and returns a new array.

3. **forEach()**: Runs a function for each item and does not return a new array

4. **push()**: Adds a new element to the end of an array.

5. **pop()**: Removes the last element of an array and return it.