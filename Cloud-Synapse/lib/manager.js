'use strict'
 
/* 

 Module Name   
   communication-pipe

 Overview

 Feature

 2013.7.2 03:31
*/
exports = module.exports = Manager;

function Manager(){
    this.a = 1;
}

Manager.prototype.connected_hosts = [];

Manager.prototype.add_conn_host = function(client){
    this.connected_hosts.push(client);
};


