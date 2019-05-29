<?php
class db{

	protected $conn;
    protected $server;
    protected $userName;
    protected $password;
    protected $dbName;

    function __construct(){
        $this->server = "localhost";
        $this->userName = "root";
        $this->password = "";
        $this->dbName = "ReactDB";

        $this->conn = new mysqli($this->server, $this->userName, $this->password, $this->dbName);

        if($this->conn->connect_errno){
        	die("Problem in connection");
        }
    }

}?>