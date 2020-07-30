<?php
include 'database.php';

$id = $_POST['id'];
$password = $_POST['password'];

$hashed = md5($password);

$sql = "UPDATE cfltc_login SET cfltc_login.password = '$hashed' WHERE cfltc_login.cfltc_id = '$id'";


if (mysqli_query($conn, $sql)) 
{
  if(mysqli_affected_rows($conn)==1)
  {
  echo json_encode(array("statusCode" => 200));
  }
  else
  {
    echo json_encode(array("statusCode" => 201));
  }
  
} else 
{
  echo json_encode(array("statusCode" => 201, "error" => mysqli_error($conn)));
}


mysqli_close($conn);

?>