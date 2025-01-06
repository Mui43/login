<?php
    include('db.php');
    session_start();
    if(isset($_SESSION['id'])){
        session_destroy();
        session_unset();
        echo json_encode(["message" => "logout successfully"]);
    }else{
        echo json_encode(["message" => "Not logged in"]);
    }
?>