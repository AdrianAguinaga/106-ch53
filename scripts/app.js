function saveTask()
{
    console.log('saving task');
}

function init() {
    console.log("task manager");
    //load data

    //hook the events
    $("#btnSave").click(saveTask);
}

window.onload = init;