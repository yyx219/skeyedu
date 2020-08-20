const ajax = {
    xhr:function(){
        var xhr = new XMLHttpRequest();
        return xhr;
    },
    post:function(url,data){
        var xhr = this.xhr()
        xhr.open('post',url,true)
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange=function(){

        }
    },
    get:function (url,data,success) {
        var data = data==='undefined'?null:data
        var xhr = this.xhr()
        var formData
        if(data){
            formData = url+'?'+data
        }else{
            formData = url;
        }

        xhr.open('get',formData,true)
        xhr.send()
        xhr.onreadystatechange=function(){
            success(this.responseText,this,this.readyState)
        }
    }
}