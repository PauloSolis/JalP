/********************************************
 * REVOLUTION 5.1.6 EXTENSION - PARALLAX
 * @version: 1.3 (14.01.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(e){var a=jQuery.fn.revolution,r=a.is_mobile();jQuery.extend(!0,a,{checkForParallax:function(e,t){var o=t.parallax;if(r&&"on"==o.disable_onmobile)return!1;("3D"==o.type||"3d"==o.type)&&(punchgs.TweenLite.set(t.c,{overflow:o.ddd_overflow}),punchgs.TweenLite.set(t.ul,{overflow:o.ddd_overflow}),"carousel"!=t.sliderType&&"on"==o.ddd_shadow&&(t.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(t.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),t.li.each(function(){var e=jQuery(this);if("3D"==o.type||"3d"==o.type){e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+o.ddd_layer_overflow+';"></div>'),e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var a=e.find(".dddwrapper"),r=e.find(".dddwrapper-layer"),l=e.find(".dddwrapper-layertobggroup");l.appendTo(a),"carousel"==t.sliderType&&("on"==o.ddd_shadow&&a.addClass("dddwrappershadow"),punchgs.TweenLite.set(a,{borderRadius:t.carousel.border_radius})),punchgs.TweenLite.set(e,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(a,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(r,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(t.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}});for(var l=1;l<=o.levels.length;l++)t.c.find(".rs-parallaxlevel-"+l).each(function(){var e=jQuery(this),a=e.closest(".tp-parallax-wrap");a.data("parallaxlevel",o.levels[l-1]),a.addClass("tp-parallax-container")});("mouse"==o.type||"scroll+mouse"==o.type||"mouse+scroll"==o.type||"3D"==o.type||"3d"==o.type)&&(e.mouseenter(function(a){var r=e.find(".active-revslide"),t=e.offset().top,o=e.offset().left,l=a.pageX-o,i=a.pageY-t;r.data("enterx",l),r.data("entery",i)}),e.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(a,r){var l=r&&r.li?r.li:e.find(".active-revslide");if("enterpoint"==o.origo){var i=e.offset().top,s=e.offset().left;void 0==l.data("enterx")&&l.data("enterx",a.pageX-s),void 0==l.data("entery")&&l.data("entery",a.pageY-i);var n=l.data("enterx")||a.pageX-s,d=l.data("entery")||a.pageY-i,p=n-(a.pageX-s),c=d-(a.pageY-i),u=o.speed/1e3||.4}else var i=e.offset().top,s=e.offset().left,p=t.conw/2-(a.pageX-s),c=t.conh/2-(a.pageY-i),u=o.speed/1e3||3;"mouseleave"==a.type&&(p=o.ddd_lasth||0,c=o.ddd_lastv||0,u=1.5);var h=[];if(l.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),a=parseInt(e.data("parallaxlevel"),0),r="3D"==o.type||"3d"==o.type?a/200:a/100,t=p*r,l=c*r;"scroll+mouse"==o.type||"mouse+scroll"==o.type?punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,y:l,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==o.type||"3d"==o.type){var f=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer";"carousel"===t.sliderType&&(f=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"),t.c.find(f).each(function(){var e=jQuery(this),r=o.levels[o.levels.length-1]/200,l=p*r,i=c*r,s=0==t.conw?0:Math.round(p/t.conw*r*100)||0,n=0==t.conh?0:Math.round(c/t.conh*r*100)||0,d=e.closest("li"),h=0,f=!1;e.hasClass("dddwrapper-layer")&&(h=o.ddd_z_correction||65,f=!0),e.hasClass("dddwrapper-layer")&&(l=0,i=0),d.hasClass("active-revslide")||"carousel"!=t.sliderType?"on"!=o.ddd_bgfreeze||f?punchgs.TweenLite.to(e,u,{rotationX:n,rotationY:-s,x:l,z:h,y:i,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==a.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),r&&(window.ondeviceorientation=function(a){var r=Math.round(a.beta||0)-70,l=Math.round(a.gamma||0),i=e.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var s=l;l=r,r=s}var n=e.width(),d=e.height(),p=360/n*l,c=180/d*r,u=o.speed/1e3||3,h=[];if(i.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),a=parseInt(e.data("parallaxlevel"),0),r=a/100,t=p*r*2,o=c*r*4;punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,y:o,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==o.type||"3d"==o.type){var f=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer";"carousel"===t.sliderType&&(f=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"),t.c.find(f).each(function(){var e=jQuery(this),r=o.levels[o.levels.length-1]/200;offsh=p*r,offsv=c*r*3,offrv=0==t.conw?0:Math.round(p/t.conw*r*500)||0,offrh=0==t.conh?0:Math.round(c/t.conh*r*700)||0,li=e.closest("li"),zz=0,itslayer=!1,e.hasClass("dddwrapper-layer")&&(zz=o.ddd_z_correction||65,itslayer=!0),e.hasClass("dddwrapper-layer")&&(offsh=0,offsv=0),li.hasClass("active-revslide")||"carousel"!=t.sliderType?"on"!=o.ddd_bgfreeze||itslayer?punchgs.TweenLite.to(e,u,{rotationX:offrh,rotationY:-offrv,x:offsh,z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==a.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}})),a.scrollTicker(t,e)},scrollTicker:function(e,t){1!=e.scrollTicker&&(e.scrollTicker=!0,r?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){a.scrollHandling(e)},t,!1,1)):jQuery(window).on("scroll mousewheel DOMMouseScroll",function(){a.scrollHandling(e,!0)})),a.scrollHandling(e,!0)},scrollHandling:function(e,t){function o(e,a){e.lastscrolltop=a}e.lastwindowheight=e.lastwindowheight||jQuery(window).height();var l=e.c.offset().top,i=jQuery(window).scrollTop(),s=new Object,n=e.viewPort,d=e.parallax;if(e.lastscrolltop==i&&!e.duringslidechange&&!t)return!1;punchgs.TweenLite.delayedCall(.2,o,[e,i]),s.top=l-i,s.h=0==e.conh?e.c.height():e.conh,s.bottom=l-i+s.h;var p=s.top<0||s.h>e.lastwindowheight?s.top/s.h:s.bottom>e.lastwindowheight?(s.bottom-e.lastwindowheight)/s.h:0;if(e.scrollproc=p,a.callBackHandling&&a.callBackHandling(e,"parallax","start"),n.enable){var c=1-Math.abs(p);c=0>c?0:c,jQuery.isNumeric(n.visible_area)||-1!==n.visible_area.indexOf("%")&&(n.visible_area=parseInt(n.visible_area)/100),1-n.visible_area<=c?e.inviewport||(e.inviewport=!0,a.enterInViewPort(e)):e.inviewport&&(e.inviewport=!1,a.leaveViewPort(e))}if(r&&"on"==e.parallax.disable_onmobile)return!1;var u=new punchgs.TimelineLite;u.pause(),"3d"!=d.type&&"3D"!=d.type&&(("scroll"==d.type||"scroll+mouse"==d.type||"mouse+scroll"==d.type)&&e.c.find(".tp-parallax-container").each(function(a){var r=jQuery(this),t=parseInt(r.data("parallaxlevel"),0)/100,o=p*-(t*e.conh)||0;r.data("parallaxoffset",o),u.add(punchgs.TweenLite.set(r,{force3D:"auto",y:o}),0)}),e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var a=jQuery(this),r=a.data("bgparallax")||e.parallax.bgparallax;if(r="on"==r?1:r,void 0!==r||"off"!==r){var t=e.parallax.levels[parseInt(r,0)-1]/100,o=p*-(t*e.conh)||0;jQuery.isNumeric(o)&&u.add(punchgs.TweenLite.set(a,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:o+"px"}),0)}})),a.callBackHandling&&a.callBackHandling(e,"parallax","end"),u.play(0)}})}(jQuery);