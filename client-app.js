var cloud_synapse = require('./Cloud-Synapse');

var cs = new cloud_synapse();

// CP 객체 정보 출력
//console.log("cs object");
//console.log(cs);

cs.use_host('localhost',33333,'world');

// 호스트의 move 메소드 콜
//CP("world").move(3,1);
