 <?php
    include 'database.php';

    $id = $_POST['dat'];

    $sql = "UPDATE `referals` SET `status` = '2' WHERE `referals`.`refer_id` = $id";

    if (mysqli_query($conn, $sql))
    {
        echo json_encode(array("statusCode" => 200));
    } 
    else 
    {
        echo json_encode(array("statusCode" => 201));
    }
    mysqli_close($conn);
    ?>