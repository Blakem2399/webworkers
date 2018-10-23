let w;
function startWorker() {
    if (typeof(Worker) !== "undefined") { //IF the browser knows what a worker is
        if(typeof(w) === "undefined"){//IF w has been assigned to an instance of a worker
            w = new Worker("webworker.js"); //creating a new worker
        }
        w.onmessage = function (event) {
            document.getElementById('output').innerHTML = event.data;
        }
    }
    else{
        document.getElementById('output').innerHTML = "<h1>Hey, Grandpa! Internet explorer is terrible, use chrome!</h1>" +
            "<a href='https://www.google.com/chrome/'>Chrome</a>"
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}
