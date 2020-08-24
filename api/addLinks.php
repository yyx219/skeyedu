<?php
    include 'conn.php';

    $isCheck = true;
    $msg = '';

    if(isset($_POST['title']) && $_POST['title'] != ""){
        $title =  $_POST['title'];
        // $regexp = "/^.{2,20}$/";
        // if(!preg_match($regexp,$title)){
        //     $isCheck = false;
        //     $msg = '请输入正确的网站名称,长度在2到20个字符';
        // }
    }else{
        $isCheck = false;
        $msg = '网站名称不能为空';
    }



    if(isset($_POST['url']) && $_POST['url'] != ""){
        $url =  $_POST['url'];
    }else{
        $isCheck = false;
        $msg = '网站地址不能为空';
    }


    if(isset($_POST['status']) && $_POST['status'] != ""){
        $status =  $_POST['status'];
        if($status == '1'){
            if(isset($_POST['imgUrl']) && $_POST['imgUrl'] != ""){
                $imgUrl =  $_POST['imgUrl'];
            }else{
                $isCheck = false;
                $msg = '当状态选中时.图片LOGO信息必填';
            }
        }
    }else{
        $status = 0;
    }


    if(isset($_POST['info']) && $_POST['info'] != ""){
        $info =  $_POST['info'];
    }else{
        $info =  '';
    }

    if(isset($_POST['imgUrl']) && $_POST['imgUrl'] != ""){
        $imgUrl =  $_POST['imgUrl'];
    }else{
        $imgUrl =  '';
    }

    
    if($isCheck){
         $result = mysqli_query($conn,"SELECT * FROM `links` WHERE `title`='$title' || `url`='$url' ");
         if(mysqli_num_rows($result) === 0){
            $sql = "INSERT INTO `links` (`title`, `url`, `info`, `status`, `imgUrl`) VALUES ('$title','$url','$info',$status,'$imgUrl')";

             if(mysqli_query($conn,$sql)){
                $msg = '链接添加成功';
             }else{
                $isCheck = false;
                $msg = '发生了一些错误,填加失败';
             }
         }else{
            $isCheck = false;
            $msg = '当前链接已经存在,不能重复填加';
         }
    }else{
        $isCheck = false;
        $msg = $msg;
    }


    echo json_encode([
        'isCheck'=>$isCheck,
        'msg'=>$msg
    ],JSON_UNESCAPED_UNICODE);