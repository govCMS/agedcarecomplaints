function moveSidebarMenu(){var o=jQuery("div.title-block").height();o>1&&(o+=70,jQuery(window).width()>=768?(jQuery("div.region-sidebar-second").css("margin-top","-"+o+"px"),0==jQuery("div.sidebar-corner").length&&jQuery("div.region-sidebar-second").after('<div class="sidebar-corner"></div>')):(jQuery("div.region-sidebar-second").css("margin-top","0px"),0==jQuery("div.sidebar-corner").length&&jQuery("div.region-sidebar-second").after('<div class="sidebar-corner"></div>')))}function footnote(){try{var o=window.location.hash;if("#fn-"==o.substr(0,4)){var e=o.split("-");if(3==e.length){var t=e[1];footnote_show(t)}}}catch(n){}}function footnote_show(o){jQuery("#footnotes-"+o+" ol").show(),footnote_updatelabel(o)}function footnote_togglevisible(o){return jQuery("#footnotes-"+o+" ol").toggle(),footnote_updatelabel(o),!1}function footnote_updatelabel(o){jQuery("#footnotes-"+o+" ol").is(":visible")?jQuery("#footnotes-"+o+" .footnoteshow").hide():jQuery("#footnotes-"+o+" .footnoteshow").show()}!function(o,e){"use strict";e.behaviors.govstrap={attach:function(o,e){moveSidebarMenu(),jQuery(window).resize(function(){moveSidebarMenu()}),footnote()}}}(jQuery,Drupal);