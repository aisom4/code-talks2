const getTodos = () => {
  //an arrow function that completes an http request
  const request = new XMLHttpRequest();
  //creating a Httprequest variable

  request.addEventListener("readystatechange", () => {
    //event listener is added with ready state change
    if (request.readyState === 4 && request.status === 200) {
      //if the readyState is 4 AND status is 200 that means everything is working properly
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      //The request will only occur properly if both of the conditions are true
      console.log("could not fetch the data");
      //This message will print to the console if the request is done but the status is wrong
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //This signifies a get request for a certain site
  request.send();
  //sending the request for data
};

getTodos();
getTodos();
//getTodos function is used to fetch the information
