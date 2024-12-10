function saveTask()
{
    console.log('saving task');
    //get values
    const title = $("#txtTitle").val();
    const descript = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,descript,color,date,status,budget);
    //build an object
    let taskToSave = new Task(title, descript, color, date, status, budget);
    console.log(taskToSave);

    //save to server
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response) {
        console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });

    //display the task
    //displayTask(taskToSave);
}

function displayTask(task)
{
    console.log(task);
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
        </div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>`        
        ;

    $(".list").append(syntax);
}

function testRequest(){
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net/", 
        success: function(response){
            console.log(response);
        },
        error: function(error)
        {
            console.log(error)
        }
                
    });
}

function loadTask(){
$.ajax({
    type: "get",
    url: "http://fsdiapi.azurewebsites.net/api/tasks",

    success:function(response){
        console.log(response);
        let data = JSON.parse(response);
        for(let i= 0; i<data.length;i++){
            let task = data[i];
            if (task.name === "Adrian53"){
                displayTask(task);
            }
        }
        console.log(data);
    },
    error:function(error){
        console.log(error);
    }    
})
}
// from the object returned, get only messages that were created by you.
// tip 1. Modify the class to include your user.
// tip 2. use a for loop
// tip 3. Then an if statement

function init() {
    console.log("task manager");
    //load data
    loadTask();

    //hook the events
    $("#btnSave").click(saveTask);
}

window.onload = init;