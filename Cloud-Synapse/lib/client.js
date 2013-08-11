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

exports = module.exports = Client;

// Host 객체 구현
function Client(_host, _port, _host_name){
    // notice
    var self = this;
    
    self.connect = 
	net.connect( _port , _host , 
		     function(){

			 // Client -> connect(socket) -> Client 객체 재귀 참조
			 self.connect.Client = self;
			 self.socket_handles['connect'](self) // self == client object
		     });
    
    
}


// tcp message handles
Client.prototype.socket_handles = {
    connect : function(self){
	
	// client_handles 메소드로 넘겨줌
	self.
	    client_handles['conn'](self.Client);
	
	console.log('connected to host');

	// 기본 통신 이벤트 등록

	self.connect.on("data", self.socket_handles['data']);
	self.connect.on("error", self.socket_handles['error']);
	self.connect.on("close", self.socket_handles['close']);
	
    },
    close : function(){
	var socket = this;
	
	// client_handles 메소드로 넘겨줌
	socket.
	    Client.
	    client_handles['close'](socket.Client);
	
	console.log('closed client');
    },
    error : function(e){
	var socket = this;
	
	// client_handles 메소드로 넘겨줌
	socket.
	    Client.
	    client_handles['error'](socket.Client, e);
	
    },
    data : function(data){
	var socket = this;
	
	// client_handles 메소드로 넘겨줌
	socket.
	    Client.
	    client_handles['data'](socket.Client, data);
	
    }
};

// 통신 이벤트s
Client.prototype.client_handles = {
    conn : function( self ){
	
    },
    close : function( self ){
	
    },
    error : function( self, e ){
	
    },
    data : function( self, data){
	console.log('receive data');
	console.log(data.toString());
    }
};


// 자바스크립트 클로저
// A객체가 부르는 B객체의 C메소드
// 그럼 그 C메소드가 호출될때 this 는 A객체가 된다.
// 이걸 해결하기 위한 방안..