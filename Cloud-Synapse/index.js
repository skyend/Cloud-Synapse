'use strict'
 
/* 

 Module Name   
   Cloud-Synapse

 Overview

 Feature

 2013.7.1 03:41
*/

var core_client = require('./lib/client'),
core_host = require('./lib/host'),
core_manager = require('./lib/manager');



/*
  실제 Cloud-Synapse 객체 구현

*/

function Core (host_name){
    var self = this;
    
    console.log("provides " + host_name);
    
    // host list 에서 검색해서 객체 제공
    
    // 테스트 객체 리턴
    return { 
	move : function(x,y){ 
	    console.log( "move to ("+x+","+y+")") 
	}, 
    };
    
};

// host 생성자 
Core.Host = core_host;


/*
  Methods
*/

Core.use_host = function(_host, _port, _host_name){
    // 호스트를 연결하고 호스트 객체 생성하는 루틴이 포함됨
    
    var client = new core_client(_host, _port, _host_name);
    //console.log(Core.manager);
    this.manager.add_conn_host(client);
    
};


// manager 생성
Core.manager = new core_manager();



// 모듈의 생성자
// Core 객체 리턴
module.exports = (function(){
    
    return Core;
});

