(function () {

    function getItem(item) {
        return localStorage.getItem(item)
    }

    function setItem(key, value) {
        return localStorage.setItem(key, value)
    }

    function removeItem(key) {
        return localStorage.removeItem(key)
    }

    function section() {
        sectionHeight = $(document).innerHeight() - $('#top').height();
        $('#wrap').css({
            height: sectionHeight + 'px'
        })
        return sectionHeight;
    }
    section()
    $(window).on('resize', function () {
        section()
    })


    function getConfig() {
        let config = {}
        if (!getItem('config')) {
            $.get('config/config.json', function (res) {
                setItem('config', JSON.stringify(res))
                config = JSON.parse(getItem('config'))
            })
        } else {
            config = JSON.parse(getItem('config'))
        }
        document.title = config.webName;
        if ($('#copyright').length > 0) {
            $('#copyright').html(config.copyRight)
        }

        if (config.description !== undefined) {
            $('head').append('<meta name="description" content=' + config.description + '/>');
        }
        console.log(1);
        return config
    }
    getConfig()


    // 代码中  解藕  
    function Menu(ele,fn) {
        let menuList
        if (!getItem('config')) {
            throw new Error('基本配置信息不存在,请重置本地配置文件')
        } else {
            menuList = JSON.parse(getItem('config')).menu;
            fn(ele,menuList)
        }
    }

    var leftMenu
    setTimeout(function(){
        leftMenu = Menu;
         leftMenu('#left',function (ele,res) {
            var ele = $(ele);
            res.forEach(element => {
                var group = $('<div class="group"></div>');
                group.append('<h3>'+element.name+'</h3>')
                if(element.children.length>0){
                    element.children.forEach(function(el){
                        group.append('<div>'+el.name+'</div>')
                    })
                    
                }
                ele.append(group)
            });
        })
    },0)


    $('#updateLeft').on('click',function(){
        if(getItem('config')){
           removeItem('config')
        }
        setTimeout(function(){
            getConfig();
        },0)
        location.reload(true)
   })




    //     Menu(function(res){
    //        console.log(res);
    //    })

})()
