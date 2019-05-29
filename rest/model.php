<?php 
    $_POST = json_decode(file_get_contents("php://input"),true);
    require_once 'rest.php';
	$db = new rest();

if(isset($_POST['method'])){
	switch ($_POST['method']) {
		case 'create':
			$query = "INSERT INTO tbl_name (firstname,lastname) VALUES (?, ?)";
			$type  = "ss";
			$parameters = array($_POST['firstname'], $_POST['lastname']);
			$db->create($query, $type, $parameters);
			break;
		
		default:
			# code...
			break;
	}
}else{
	switch ($_GET['method']) {
		case 'show':
			$query = "SELECT * FROM tbl_name";
			$result = $db->showAll($query);
			echo json_encode($result);

		break;
	}
}

 ?>