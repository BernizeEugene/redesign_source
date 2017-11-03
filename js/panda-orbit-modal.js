(function(){
    window.initPandaOrbitModal = function(elementPath) {
        $(elementPath).each(function(index){
            //add class name to each element
            $(this).addClass('panda-img-' + index);
            $(this).attr('data-open', 'panda-modal');

            //create orbit slide for each element
            var $newSlide = $('<li/>').addClass('orbit-slide');
            var $figure = $('<figure/>').addClass('orbit-figure');
            var img = $(this).find('img').clone();
            $figure.append(img);
            var captionText = $(this).find('p').html();
            var caption = $('<figcaption/>').addClass('orbit-caption').html(captionText);
            $figure.append(caption);
            $newSlide.append($figure);
            $('ul.orbit-container').append($newSlide);

            //add nav button for each element
            var $navBtn = $('<button/>').attr('data-slide', index);
            var $navBtnSpan = $('<span/>').addClass("show-for-sr").html(captionText);
            $navBtn.append($navBtnSpan);
            $('nav.orbit-bullets').append($navBtn);
        });

        //change image on click
        $(elementPath).click(function(){
            var index = $(this).attr('class').replace(/.*panda-img-(\d+).*/, '$1');
            $('#orbit').foundation('changeSlide', true, $('ul.orbit-container li[data-slide=' + index + ']'), index);
        });
    };

    //trigger resize event when modal opened and force orbit to resize from hidden
    $(window).bind('open.zf.reveal', function() {
        window.dispatchEvent(new Event('resize'));
    });
    $(window).bind('slidechange.zf.orbit', function(){
        window.dispatchEvent(new Event('resize'));
    });
})();
