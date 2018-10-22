        window.onload = function() {
            var body = document.getElementsByTagName('body')[0];
            body.addEventListener("click", openFullPage, false);
            
            function openFullPage(e) {
                if(e.target && e.target.nodeName == 'IMG') {    
                    var fullpage = document.createElement('div');
                    body.appendChild(fullpage);
                    fullpage.style.backgroundImage = 'url("' + e.target.src + '")';
                    fullpage.style.backgroundSize = 'contain';
                    fullpage.style.backgroundRepeat = 'no-repeat';
                    fullpage.style.backgroundColor = '#EEEEEE';
                    fullpage.style.width = '100%';
                    fullpage.style.height = '100%';
                    fullpage.style.backgroundPosition = 'center center';
                    fullpage.style.position = 'absolute';
                    fullpage.style.top = body.scrollTop + 'px';
                    fullpage.style.left = '0';
                    fullpage.addEventListener("click", closeFullPage, false);
                }
            }
            function closeFullPage(e) {
                body.removeChild(e.target);
            }
        };



(function() {
    var App = {

        ui: {},

        scroll_top: 100,

        initialize: function () {
            var hash = window.location.hash,
                anchor = $('.js_nav-element[href="' + hash +'"]');

            App.createElements();
            App.attachEvents();

            if (anchor[0]) {
                App.open(anchor.attr('data-toggle'));
            }
        },

        createElements: function () {
            App.ui.nav_elements = $('.js_nav-element');
            App.ui.information = $('.information');
            App.ui.scroll = $('.scroll-top');
            App.ui.body = $('body');
        },

        attachEvents: function () {
            App.ui.nav_elements.on('click', App.onAnchorClick);
            App.ui.scroll.on('click', App.onScrollClick);
        },

        bindScroll: function () {
            $(window).on('scroll', App.onBodyScroll);
        },

        close: function () {
            $('.active').removeClass('active');
            App.ui.information.addClass('hide');
            App.scroll_top = 0;
            $(window).off('scroll', App.onBodyScroll);
            App.ui.scroll.addClass('hide');
        },

        open: function (toggle_value, is_project) {
            var anchors = App.ui.nav_elements.filter('[data-toggle="' + toggle_value + '"]'),
                information = App.ui.information.filter('[data-toggle="' + toggle_value + '"]'),
                node_top = App.ui.nav_elements.filter('[data-toggle="' + toggle_value + '"][data-node]').position().top - 40;

            if (is_project) {
                anchors.push(App.ui.nav_elements.filter('.header_nav[data-project]')[0]);
            }

            App.ui.body.animate({
                scrollTop: node_top
            }, 600);
            anchors.addClass('active');
            information.removeClass('hide');
            App.scroll_top = node_top;
            App.bindScroll();
        },

        onAnchorClick: function (e) {
            var anchor = $(e.currentTarget),
                toggle_value = anchor.attr('data-toggle'),
                is_project = !!anchor.attr('data-project');

            e.preventDefault();

            if (anchor.hasClass('active')) {
                App.close();
            } else {
                App.close();
                App.open(toggle_value, is_project);
            }
        },

        onScrollClick: function (e) {
            e.preventDefault();

            App.ui.body.animate({
                scrollTop: App.scroll_top
            }, 500);
        },

        onBodyScroll: function () {
            if (App.ui.body.scrollTop() > (App.scroll_top + 150)) {
                App.ui.scroll.removeClass('hide');
            } else {
                App.ui.scroll.addClass('hide');
            }
        }
    };

    $(document).ready(function() {
        App.initialize();
    });

})();