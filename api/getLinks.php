<?php
    include 'conn.php';
    $links = "";
    $sql = "SELECT * FROM `links`";
    $result = mysqli_query($conn,$sql);
    $links = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array("links"=>$links));