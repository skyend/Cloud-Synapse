var cloud_synapse = require('./Cloud-Synapse');

var cs = new cloud_synapse();

//console.log("CS object");
//console.log(cs);

// 호스트 생성                                                                                                                                                                   
var host = new cs.Host("test");



host.standby(33333, function(){
    console.log('started host');

});


function move(x,y){

    return x*y;
}
host.forward('move', move);
