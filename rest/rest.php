<?php
/**
 * 
 */
require_once 'db.php';
class rest extends db{
	function __construct(){
		parent::__construct();
	}

	function showAll($query){
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		$result = $stmt->get_result();

		$result_arr = array();
		while($row = $result->fetch_object()){
			$result_arr[] = $row;
		}

		return $result_arr;

		$stmt->close();
		$this->conn->close();
	}

	function create($query, $type, $parameters){
		$stmt = $this->conn->prepare($query);
		$stmt->bind_param($type, ...$parameters);
		$stmt->execute();

		$stmt->close();
		$this->conn->close();
	}
}

?>