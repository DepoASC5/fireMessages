const database=firebase.database().ref();
database.on("child_added",displayMessageOnBoard)

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";
const UserData= {
    NAME:username,
    MESSAGE:message, 
};
 database.push(UserData);
    console.log(username + " : " + message);

    //Update database here

}

// Set database "child_added" event listener here
function displayMessageOnBoard(rowData){
    const row=rowData.val();
    const messagebox=document.querySelector(".allMessages");
    const newLine=document.createElement('br');
const name = document.createTextNode(row.NAME);
const message = document.createTextNode(row.MESSAGE);

messagebox.appendChild(name);
messagebox.appendChild(message);
messagebox.appendChild(newLine);

const pElement = document.createElement("p");
pElement.innerText = `${name}: ${message}`;
messageContainer.appendChild(pElement);
}