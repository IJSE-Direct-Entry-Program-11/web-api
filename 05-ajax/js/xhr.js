const txtElm = document.querySelector("#txt");
const btnElm = document.querySelector("#btn");

btnElm.addEventListener('click', ()=>{
    
    // 1. Create a new xhr instance
    const xhr = new XMLHttpRequest();

    // 2. Setup the listener
    // xhr.addEventListener('readystatechange', ()=>{
    //     if (xhr.readyState === xhr.DONE){
    //         if (xhr.status === 201){
    //             alert("Task added")
    //         }else{
    //             alert("Failed to add the task");
    //         }
    //     }
    // });
    xhr.addEventListener('load', ()=>{
        if (xhr.status === 201){
            alert("Task added");
            console.log(JSON.parse(xhr.responseText));
        }else if (xhr.status === 400){
            alert("Please add a description");
            txtElm.focus();
            txtElm.select();
        }else{
            alert("Please try again");
        }
    });
    xhr.addEventListener('error', ()=>{
        alert("Failed to add the task, something went wrong");
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