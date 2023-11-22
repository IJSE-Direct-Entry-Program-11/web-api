const txtElm = document.querySelector("#txt");
const btnElm = document.querySelector("#btn");

btnElm.addEventListener('click', ()=>{
    
    // 1. Create a new xhr instance
    const xhr = new XMLHttpRequest();

    // 2. Setup the listener
    xhr.addEventListener('readystatechange', ()=>{
        console.log("Aaawa... aawa.. response eka aawaa...!");
    });

    // 3. Initialize the request
    xhr.open('POST', 'http://localhost:8080/tasks');

    // 4. (Optional) Set request headers and set up request data
    xhr.setRequestHeader("Content-Type", "application/json");
    const task = {
        description: txtElm.value
    };

    // 5. Send the request [with data]
    xhr.send(JSON.stringify(task));

});