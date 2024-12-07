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

    //display the task
    displayTask(taskToSave);
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
        url: "http://fsdiapi.azurewebsites.net", 
        success: function(response){
            console.log(response);
        },
        error: function(error)
        {
            console.log(error)
        }
                
    });
}

function init() {
    console.log("task manager");
    //load data

    //hook the events
    $("#btnSave").click(saveTask);
}

window.onload = init;