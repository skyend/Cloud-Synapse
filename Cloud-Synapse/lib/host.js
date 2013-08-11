'use strict'
 
/* 

 Module Name   
   Cloud-Synapse / host

 Author
   jinwoong han

 Overview

 Feature

 2013.7.1 05:06
*/

var net = require('net');

exports = module.exports = Host;

// Host 객체 구현
function Host(my_name){
    // notice
    console.log('host naem by \"'+my_name+'\" created.');
    
    // Properties

    this.name = my_name;
    this.client_rules = {};
    this.forward_func_list = [];
    this.server;
    this.udp_server;
    this.port = 8081;
    
};

Host.prototype.set_accept_rules = function( rules ){
    
};

Host.prototype.forward = function( func_name, func_ref ){
    
};

Host.prototype.forward_to = function( func_name, func_ref, target_rules ){
    
};

// 작동 대기
Host.prototype.standby = function( port, start_callback ){

    // closer 속에서의 this 가 다르다 그렇기 때문에 현재 host 자기자신을 self 라는
    // 변수에 보관한다
    var self = this;

    this.port = port;

    this.server = 
	net
	.createServer( function(socket){

	    // host 의 속성을 이용하기 위해 host를 넣어준다.
	    // self = host, socket = connected client socket
	    self.ssocket_handler(self, socket);
	});
    
    // 서버 시작
    this.server.listen(this.port, "localhost");
    
    // 서버 작동 공지
    console.log('- [stand by] Host :', this.name, 'on <'+this.port+'> port' );
    
    // 서버 실행 완료후
    start_callback(this.port);
};

// tcp server socket handler function
Host.prototype.ssocket_handler = function(self, socket){
    

    socket.on( "connect" , this.socket_handles['connect'] );
    socket.on( "close"   , this.socket_handles['close']   );
    socket.on( "data"    , this.socket_handles['data']    );
    
};


// tcp message handles
Host.prototype.socket_handles = {
    connect : function(socket){
	console.log('connected client');
	console.log(this);
	this.write('hello \r\n');
    },
    close : function(){
	console.log('closed client');
    },
    data : function(data){
	console.log('received data : ');
	console.log(data.toString());
    }
};