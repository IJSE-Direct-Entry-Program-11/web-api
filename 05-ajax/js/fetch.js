const txtElm = document.querySelector("#txt");
const btnElm = document.querySelector("#btn");

btnElm.addEventListener('click', ()=>{
    const promise = fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({description: txtElm.value})
    });
    promise.then(res => {
        if (res.ok){            // 200-299
            alert("Task added");
            res.text().then(console.log);

            // res.text().then(responseText => console.log(JSON.parse(responseText)));
            // res.json().then(console.log);
        }else if (res.status === 400){
            alert("Description can't be empty");
            txtElm.focus();
            txtElm.select();
        }else{
            alert("Failed to add the task, try again");
        }
    }).catch(err => {
        alert("Something went wrong, try later");
    });

});