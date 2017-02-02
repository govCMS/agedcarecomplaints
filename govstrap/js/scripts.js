jQuery(function($) {

// Document ready...
    $(document).ready(function(){

        // Table Row Zebra stripes
        $("table tr:odd").addClass("zebra");

        // Add the Mobile Navigation show/hide expanders
        $('#mov-nav .sf-main-menu ul > li').each(function() {
            if ($(this).children('ul').length > 0) {
                $(this).prepend('<a href="javascript:void(0)" class="show-hide"><span class="offleft">Show/hide children</span></a> ');
            }
        });
        // and hide them for now
        $('#mov-nav .sf-main-menu .show-hide').hide();

        // Mobile Navigation show/hide expanders
        $('.show-hide').click(function(){
            if($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $(this).parent('li').children('ul').slideUp(800,'easeOutExpo');
            }
            else {
                $(this).addClass('expanded');
                $(this).parent('li').children('ul').slideDown(1000,'easeOutExpo');
            }
        });

        // Change the Gravity Forms required asterix into text
        $('.gfield_required').each(function() {
            $(this).html(' (required)');
        });

        // Remove the tabindex attribs off Gravity Form inputs
        $(':input').each(function() {
            $(this).removeAttr('tabindex');
        });

        // Remove cols attrib off GF textareas
        $('.gfield .textarea').removeAttr('cols');

        //Validate search form
        $('.search-form input[type="submit"]').click(function(e){
            if($('.search-form .search-field').val() == '') {
                e.preventDefault();
                if($('.search-form-error').length === 0){
                    $('.search-form').append('<div class="search-form-error">Keyword field cannot be empty</div>');
                    $('.search-form-error').fadeIn('slow');
                }
            }
        });

        // Fieldset expanders
        $('#gform_wrapper_5 fieldset fieldset').each(function() {
            $(this).children('legend').append('<a href="javascript:void(0)" class="show-hide-field"><span class="tri"></span><span class="offleft">Show/hide children</span></a> ');
        });

        // Fieldset expanders
        $('.show-hide-field').click(function(){
            if($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $(this).parent('legend').parent('fieldset').children('ul').slideUp(800,'easeOutExpo');
            }
            else{
                $(this).addClass('expanded');
                $(this).parent('legend').parent('fieldset').children('ul').slideDown(1000,'easeOutExpo');
            }
        });

        if ($('.gfield_error').length) {
            $('#gform_5 fieldset fieldset > ul').addClass('error-show');
            $('.show-hide-field').addClass('error-show-hide');
        }

    }); // End Document ready

//Main Menu hover
    $('#menu-main li').hoverIntent({
        over: makeTall,
        timeout: 300,
        out: makeShort
    });
    function makeTall(){$(this).children('.sub-menu').slideDown(300, 'easeInSine');}
    function makeShort(){$(this).children('.sub-menu').slideUp(200, 'easeInSine')}

// Mobile Navigation
    $('#_navigation').click(function(){
        if($('#mob-nav').hasClass('active')) {
            $(this).removeClass('active');
            $('#mob-nav').slideUp(500, 'easeInSine', function(){
                $(this).removeClass('active');
                $('#mob-nav li ul').removeClass('mob-sub-menu').addClass('sub-menu');
                $('#mov-nav .sf-main-menu .show-hide').hide();
            });
        }
        else {
            $(this).addClass('active');
            $('#mob-nav li ul').removeClass('sub-menu').addClass('mob-sub-menu');
            $('#mov-nav .sf-main-menu .show-hide').show();
            $('#mob-nav').addClass('active').slideDown(500, 'easeInSine');
        }
    });

// FAQs, pseudo accordion.
    $(document).ready(function(){
        //$('.faqs dt a').first().addClass('active');
        $('.faqs dd').each(function() {
            $(this).hide();
        });
        //$('.faqs dd').first().show();
    });
    $('.faqs dt a').click(function(event){
        event.preventDefault();
        var tarhash = $(this).attr('href');
        if(tarhash) {
            $('.faqs dd').slideUp(500, 'easeInSine');
            $(tarhash).slideDown(500, 'easeInSine');
        }
        $('.faqs dt a').removeClass('active');
        $(this).addClass('active');
    });

//Sitemap, pseudo accordion.
    $(document).ready(function(){
        $('.site-map ul > li').each(function() {
            if ($(this).children('ul').length > 0) {
                $(this).prepend('<a href="javascript:void(0)" class="smshow-hide"><span class="offleft">Show/hide children</span></a> ');
                $(this).children('ul').hide();
            }
        });
        $('.smshow-hide').click(function(){
            if($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $(this).parent('li').children('ul').slideUp(800,'easeOutExpo');
            }
            else {
                $(this).addClass('expanded');
                $(this).parent('li').children('ul').slideDown(1000,'easeOutExpo');
            }
        });
    });

//turn on fitvids
    $(document).ready(function(){
        // Target your .container, .wrapper, .post, etc.
        $("#content").fitVids();
    });

//Get zindexing for iframes to work
    $(document).ready(function () {
        $('iframe').each(function(){
            var url = $(this).attr("src");
            $(this).attr("src",url+"?wmode=transparent&rel=0");
        });
    });

//Front page slider
    $('.slider-container').cycle({
        fx: 'fade',
        speed:  4000,
    });

// Remove the tabindex attribs off Gravity Form inputs
    $(':input').each(function() {
        $(this).removeAttr('tabindex');
    });


});