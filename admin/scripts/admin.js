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


    function getConfig(fn) {
        $.get('config/config.json', function (res) {
            fn(res)
        })
    }

    getConfig(function leftMenu(res) {
        var ele = $('#left');
        res.menu.forEach(element => {
            var group = $('<div class="group"></div>');
            var ul = $('<ul></ul>');
            group.append('<h3>' + element.name + '</h3>')
            group.append(ul);
            if (element.children.length > 0) {
                element.children.forEach(function (el) {
                    ul.append('<li><a href=' + el.path + ' target="_right_main">' + el.name + '</a></li>')
                })
            }
            ele.append(group)
        })
    });



    $('#left').on('click', 'h3', function () {
        $(this).next().slideToggle(300)
    })

    getConfig(function system(res) {
        $('title').html(res.webName);
        $('head').append('<meta name="description" content=' + res.description + '/>')
        $('head').append('<meta name="Keywords" content=' + res.keywords + '/>')
    });



    //     Menu(function(res){
    //        console.log(res);
    //    })

})()
