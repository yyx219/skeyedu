
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
    getConfig(function system(res) {
        $('title').html(res.webName);
        $('.logo a').html(res.siteName);
        $('head').append('<meta name="description" content=' + res.description + '/>')
        $('head').append('<meta name="Keywords" content=' + res.keywords + '/>')
    });

