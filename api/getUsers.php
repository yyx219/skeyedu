<?php
    include 'conn.php';
    $isCheck = true;
    $msg = "";
    $users = "";

    if(isset($_GET['id']) && is_numeric($_GET['id'])){
        $id = $_GET['id'];
        $sql = "SELECT `id`, `username`, `gender` FROM `users` WHERE id = ".$id;
    }else{
        $sql = "SELECT `id`, `username`, `gender` FROM `users`";
    }


    $result = mysqli_query($conn,$sql);
    $users = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array("isCheck"=>$isCheck,'msg'=>$msg,"users"=>$users));