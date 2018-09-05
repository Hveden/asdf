function start(){
  ble.scan([], 5, function(device) {
    document.getElementById("hi").appendChild(JSON.stringify(device));
}, failure);
}

function conn(){

}
