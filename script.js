$(function(){
    var $menu_item1 = $('#menu-item-1'),
        $menu_item2 = $('#menu-item-2'),
        $menu_item3 = $('#menu-item-3'),
        $content = $('#dynamic');

    $menu_item1.click(function(){
        $content.text("lonely");
    });

    $menu_item2.click(function(){
        $content.text("generous");
    });

    $menu_item3.click(function(){
        $content.text("gossip");
    });
});
