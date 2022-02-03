import * as DOM from "./DomTask10.js";

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);


//reads user entered URL and pastes to screen
function read (URL) 
{
    axios.get(URL)
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  //https://reqres.in/

  //1
  //https://reqres.in/api/users?page=2'

  //2
  //https://reqres.in/api/users/2

  //3
  //changing button to use a create function now
  //https://reqres.in/api/users
 function create (URL)
 {
    axios.post(URL, {
      name: `Morpheus`,
      Job : `Leader`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

//4
//https://reqres.in/api/register
//notworking?
function register (URL)
 {
    axios.post(URL, {
      email: `eve.holt@reqres.inheus`,
      password : `pistol`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  //5
  //https://reqres.in/api/login
  //notworking?
  function login (URL)
 {
    axios.post(URL, {
      email: `eve.holt@reqres.inheus`,
      password : `cityslicka`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  button.onclick = () => login(input.value);