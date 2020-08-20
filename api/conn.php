<?php
header("content-type:text/html;charset=utf-8");
date_default_timezone_set('Asia/Shanghai');
$conn = new mysqli('localhost','root','123456','dllm');
mysqli_query($conn,"set character set utf8");
mysqli_query($conn,"set names utf8");
if($conn->connect_error){
    die('数据连接失败' . $conn->connect_error);
}
?>
