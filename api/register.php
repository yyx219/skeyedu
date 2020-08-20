<?php
include 'conn.php';
$isCheck = true;
$msg = "";

if (isset($_POST['username']) && $_POST['username'] != "") {
    $username = trim($_POST['username']);
    $regexp = "/^[a-zA-Z]+[a-z0-9A-Z_]{1,10}$/";
    if (!preg_match($regexp, $username)) {
        $isCheck = false;
        $msg = "用户名必须首字符必须是英文开头其后可以是字母下划线及数字包含1到10个字符";
    }
} else {
    $isCheck = false;
    $msg = "用户名不存在或不能为空";
}

if (isset($_POST['password']) && $_POST['password'] != "") {
    $password = trim($_POST['password']);
    if (isset($_POST['checkpassword']) && $_POST['checkpassword'] != "") {
        $checkpassword = trim($_POST['checkpassword']);
        if ($password != $checkpassword) {
            $isCheck = false;
            $msg = "初始密码和确认密码不符";
        }
    }else{
        $isCheck = false;
        $msg = "确认密码不能为空";
    }
} else {
    $isCheck = false;
    $msg = "初始密码不能为空";
}

if (isset($_POST['gender']) && $_POST['gender'] != "") {
    $gender = $_POST['gender'];
} else {
    $gender = 1;
}

if ($isCheck) {
    $sql = "SELECT * FROM `users` WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) === 0) {
        $sqlsave = "INSERT INTO `users`(`username`, `password`, `gender`) VALUES ('$username','$password','$gender')";
        if (mysqli_query($conn, $sqlsave)) {
            $msg = '注册成功';
        } else {
            $isCheck = false;
            $msg = "注册失败";
        }
    } else {
        $isCheck = false;
        $msg = "用户名已经存在";
    }
} else {
    $isCheck = false;
    $msg = $msg;
}


echo json_encode(["ischeck" => $isCheck, "msg" => $msg], JSON_UNESCAPED_UNICODE);