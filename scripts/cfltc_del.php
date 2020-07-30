<?php
include 'database.php';


$id = $_POST['id'];
$password = $_POST['password'];

$hashed = md5($password);

$sql = "DELETE ccc_table,cfltc_login FROM ccc_table INNER JOIN cfltc_login ON ccc_table.center_id=cfltc_login.cfltc_id 
        WHERE ccc_table.center_id='$id' AND cfltc_login.password='$hashed'";


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