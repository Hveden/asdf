function start(){
  ble.scan([], 5, function(device) {
    console.log(JSON.stringify(device));
}, failure);
}

function conn(){
  
}
