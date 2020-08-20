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
                // ul.append('<li data-url='+el.path+'>' + el.name + '</li>')
            })
        }
        ele.append(group)
    })
    $('ul').eq(0).css({
        display: "block"
    })
});

$('#left').on('click', 'h3', function () {
    $(this).next().slideToggle(300)
})


$('#left').on('click', 'li', function () {
    $('li').removeClass('active')
    $(this).addClass('active')
})

// $('#left').on('click', 'a', function (e) {
//     e.preventDefault();
//     var url = $(this).attr('href')
//     $('#ajax').load(url + ' .wrap')
// })
// function loaddefault() {
//     $('#ajax').load('right_main.html' + ' .wrap')
// }
// loaddefault()
// $('.logo').on('click', loaddefault)