/**
 * custom init
 */
(function() {
  $('#svg-sprite').load('./sprite.html');
})();

/*
    Init Avatar Mobile Aside
*/
(function(){
	var $ttToggleAside = $('#tt-pageContent .tt-toggle-aside'),
		$body = $('body'),
		$html = $('html'),
		$jsAside = $('#js-aside');

	$body.on('click', '#tt-pageContent .tt-toggle-aside', function(e){
		var ttScrollValue = $body.scrollTop() || $html.scrollTop();
        $jsAside.toggleClass('column-open');
        $body.css("top", - ttScrollValue).addClass("no-scroll").append('<div class="modal-filter"></div>');
        var modalFilter = $('.modal-filter').fadeTo('fast',1);
        if (modalFilter.length) {
            modalFilter.on('click', function(){
                $btnClose.trigger('click');
            })
        }
		return false;
	});
	$body.on('click', '.tt-list-avatar .tt-item',  function(e){
		$jsAside.removeClass('column-open');
		var top = parseInt($body.css("top").replace("px", ""), 10) * -1;
		$body.removeAttr("style").removeClass("no-scroll").scrollTop(top);
		$html.removeAttr("style").scrollTop(top);
		$(".modal-filter").off().remove();
		return false;
	});
	$(window).resize(function(e){
      $('.tt-list-avatar .tt-item').trigger('click');
    });
})();

/*
    Init Avatar List(*custom scroll)
*/
(function(){
  var ttSearchWrapper = $('#tt-pageContent .js-init-scroll');
  if (ttSearchWrapper){
     ttSearchWrapper.perfectScrollbar();
  };
})();

/*
	Button switching
*/
(function(){
	var ttJsActiveBtn= $('#tt-pageContent .tt-js-active-btn');
	if (ttJsActiveBtn.length){
		ttJsActiveBtn.on('click', '.tt-button-icon', function(e){
			$(this).closest(ttJsActiveBtn).find('.tt-button-icon').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	};
})();

/*
 Desktop Menu
*/
(function(){
  var location = window.location.href,
    $ttDesctopMenu = $('#tt-header .tt-desktop-menu');

  if(!$ttDesctopMenu) return;

  // $ttDesctopMenu.find('li').each(function(){
  //     var link = $(this).find('a').attr('href');

  //     if (location.indexOf(link) !== -1){
  //         $(this).addClass('active');
  //     }
  // });

  $ttDesctopMenu.find('ul li').on("mouseenter", function() {
      var $ul = $(this).find('ul:first');
      $(this).find('a:first').addClass('is-hover');
      if ($ul.length){
          var windW = window.innerWidth,
              ulW = parseInt($ul.css('width'), 10) + 20,
              thisR = this.getBoundingClientRect().right,
              thisL = this.getBoundingClientRect().left;

          if (windW - thisR < ulW){
              $ul.addClass('right-popup');
          } else if (thisL < ulW) {
            $ul.removeClass('right-popup');
          };

      }
  }).on('mouseleave', function() {
    $(this).find('a:first').removeClass('is-hover');
  });
})();

/*
	Init magnific popup
*/
(function(){
	$('#tt-pageContent .tt-gallery-layout').each(function(){
        $(this).magnificPopup({
        	delegate: 'a',
			type: 'image',
			gallery:{
			    enabled:true
			},
			mainClass: 'mfp-with-zoom',
		});
    });
})();

/*
	Mobile Menu
*/
(function (){
	var delay_tab = 300,
		delay_show_mm = 300,
		delay_hide_mm = 300;

	$("body").append(getFullscreenBg());
	$.fn.initMM = function() {
		var mmpanel = {
			$mobilemenu: $(".panel-menu"),
			external_con: 'externaf',
			mm_close_button: 'Close',
			mm_back_button: 'Back',
			mm_breakpoint: 768,
			mm_enable_breakpoint: false,
			mm_mobile_button: false,
			remember_state: false,
			second_button: false, // class
			init: function($button, data){
				var _this = this;
				if(!_this.$mobilemenu.length){
					console.log('You not have <nav class="panel-menu mobile-main-menu">menu</nav>. See Documentation')
					return false;
				}

				arguments[1] != undefined && _this.parse_arguments(data);
				_this.$mobilemenu.parse_mm(mmpanel);//_this.mm_close_button, _this.mm_back_button);
				_this.$mobilemenu.init_mm(mmpanel);
				_this.mm_enable_breakpoint && _this.$mobilemenu.check_resolution_mm(mmpanel);//_this.mm_breakpoint);
				$button.mm_handler(mmpanel);
			},
			parse_arguments: function(data){
				var _this = this;
				if(Object(data).hasOwnProperty("menu_class")) _this.$mobilemenu = $("."+data.menu_class);

				$.each(data, function( k, v ) {
					switch(k) {
					case 'right':
						v && _this.$mobilemenu.addClass("mm-right");
						break;
					case 'close_button_name':
						_this.mm_close_button = v;
						break;
					case 'back_button_name':
						_this.mm_back_button = v;
						break;
					case 'width':
						_this.$mobilemenu.css("width", v);
						break;
					case 'breakpoint':
						_this.mm_breakpoint = v;
						break;
					case 'enable_breakpoint':
						_this.mm_enable_breakpoint = v;
						break;
					case 'mobile_button':
						_this.mm_mobile_button = v;
						break;
					case 'remember_state':
						_this.remember_state = v;
						break;
					case 'second_button':
						_this.second_button = v;
						break;
					case 'external_container':
						v && _this.$mobilemenu.addClass(_this.external_con);
						break;
					};
				});
			},
			show_button_in_mobile: function($button){
				var _this = this;
				if(_this.mm_mobile_button) {
					window.innerWidth > _this.mm_breakpoint ? $button.hide() : $button.show();
					$(window).resize(function(){
						window.innerWidth > _this.mm_breakpoint ? $button.hide() : $button.show();
					})
				}
			}
		}
		mmpanel.init($(this), arguments[0]);
		mmpanel.show_button_in_mobile($(this));
	}
	$.fn.check_resolution_mm = function(mmpanel) {
		var _this = $(this);
		$(window).resize(function(){
			if(!$("body").hasClass("mm-open") || !_this.hasClass("mmitemopen")) return false;
			window.innerWidth > mmpanel.mm_breakpoint && _this.closemm(mmpanel);
		});
	}
	$.fn.mm_handler = function(mmpanel){
		$(this).click(function(e){
			e.preventDefault();
			mmpanel.$mobilemenu.openmm();
		});

		if(mmpanel.second_button != false){
			$(mmpanel.second_button).click(function(e){
				e.preventDefault();
				mmpanel.$mobilemenu.openmm();
			});
		};
	}
	$.fn.parse_mm = function(mmpanel) {
		var $mm_curent = $(this).clone(),
			$mm_new = $(get_mm_parent()),
			$mm_block = false,
			count = 0,
			_this = false,
			$btnBack = false,
			$ul;
		$(this).empty();

		$mm_curent.find('a').each(function(){
			_this = $(this);
			$ul = _this.parent().find("ul").first();
			if($ul.length) {
				count++;
				$ul.prepend("<li></li>").find("li").first().append(_this.clone().addClass("mm-original-link"));
				_this.attr("href", "#mm"+count).attr("data-target", "#mm"+count).addClass("mm-next-level");
			}
		});
		$mm_curent.find('ul').each(function(index){
			$btnBack = false;
			$mm_block = $(get_mm_block()).attr("id", "mm"+index).append($(this));
			if (index == 0) {
				$mm_block.addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden");
				$btnBack = getButtonClose($mm_curent.find(".mm-closebtn").html(), mmpanel.mm_close_button);

				mmpanel.$mobilemenu.hasClass(mmpanel.external_con) && $mm_block.find('ul').first().append(getExternalContainer());

				$mm_block.find("ul").first().prepend($btnBack);
			}
			else {
				$btnBack = getButtonBack($mm_curent.find(".mm-backbtn").html(), mmpanel.mm_back_button);
				$mm_block.find("ul").first().prepend($btnBack);
			}
			$mm_new.append($mm_block);
		});

		$(this).append($mm_new);
	}
	$.fn.init_mm = function(mmpanel) {
		var _parent = $(this);
		_parent.find("a").each(function(){
			$(this).click(function(e){
				var _this = $(this);
				var $panel = false;
				var $currobj = false;
				var lv = '';
				if(_this.hasClass("mm-next-level")){
					e.preventDefault();
					lv = _this.attr("href");
					$currobj = _parent.find(".mmcurrent");
					$currobj.addClass("mmsubopened").removeClass("mmcurrent");
					_parent.find(lv).removeClass("mmhidden");
					setTimeout(function(){_parent.find(lv).scrollTop(0).addClass("mmcurrent").addClass("mmopened");}, 0);
					setTimeout(function(){$currobj.addClass("mmhidden")}, delay_tab);
					return false;
				}
				if(_this.hasClass("mm-prev-level")){
					e.preventDefault();
					lv = _this.attr("href");
					$currobj = _parent.find(".mmcurrent");
					$currobj.removeClass("mmcurrent").removeClass("mmopened");
					_parent.find(".mmsubopened").last().removeClass("mmhidden").scrollTop(0).removeClass("mmsubopened").addClass("mmcurrent");
					setTimeout(function(){$currobj.addClass("mmhidden")}, delay_tab);
					return false;
				}
				if(_this.hasClass("mm-close")){
					_parent.closemm(mmpanel);
					return false;
				}
			})
		});
		$(".mm-fullscreen-bg").click(function(e){
			e.preventDefault();
			_parent.closemm(mmpanel);
		});
	}
	$.fn.openmm = function(){
		var _this = $(this);
		_this.show();
		setTimeout(function(){$("body").addClass("mm-open");_this.addClass("mmitemopen");$(".mm-fullscreen-bg").fadeIn(delay_show_mm);}, 0);
	}
	$.fn.closemm = function(mmpanel){
		var _this = $(this);
		_this.addClass("mmhide");
		$(".mm-fullscreen-bg").fadeOut(delay_hide_mm);
		setTimeout(function(){ mm_destroy(_this, mmpanel); }, delay_hide_mm);
	}
	function mm_destroy(_parent, mmpanel){
		if(!mmpanel.remember_state) {
			_parent.find(".mmpanel").toggleClass("mmsubopened mmcurrent mmopened", false).addClass("mmhidden");
			_parent.find("#mm0").addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden");
		}
		_parent.toggleClass("mmhide mmitemopen", false).hide();
		$("body").removeClass("mm-open");
	}
	function get_mm_parent(){
		return '<div class="mmpanels"></div>';
	}
	function get_mm_block(){
		return '<div class="mmpanel mmhidden">';
	}
	function getButtonBack(value, _default) {
		value = value == undefined ? _default : value;
		return '<li><a href="#" data-target="#" class="mm-prev-level">'+value+'</a></li>';
	}
	function getButtonClose(value, _default) {
		value = value == undefined ? _default : value;
		return '<li class="mm-close-parent"><a href="#close" data-target="#close" class="mm-close">'+value+'</a></li>';
	}
	function getFullscreenBg() {
		return '<div class="mm-fullscreen-bg"></div>';
	}
	function getExternalContainer() {
		return '<li id="entrypoint-objects"></li>';
	}
})();

var toggleMobileMenu = $('.toggle-mobile-menu'),
	$ttDesctopMenu = $('.tt-desktop-menu'),
	$ttMobilepMenu = $('#mobile-menu');


if ($ttDesctopMenu && toggleMobileMenu){
    var ttDesktopMenu = $ttDesctopMenu.find('ul').first().children().clone();

    $ttMobilepMenu.find('ul').append(ttDesktopMenu);
    toggleMobileMenu.initMM({
        enable_breakpoint: true,
        mobile_button: true,
        breakpoint: 1025
    });
};

(function($){
  function initnewsLetterObj(valueData, $obj){
          setTimeout(function() {
            $obj.modal('show');
          }, valueData);
     };
     $('.modal').each(function(){
         var $obj = $(this);
         if($obj.attr("data-pause")){
             var valueData = $(this).attr('data-pause');
             initnewsLetterObj(valueData, $obj);
         }
     });
 })(jQuery);

 /*
	Button switching
*/
(function(){
	var ttPopupSettings= $('#js-settings-btn');
	if (ttPopupSettings.length){
		 ptToggleCol();
	};
	function ptToggleCol() {
		var $body = $('body'),
			$html = $('html'),
			$popupSettings = $('#js-popup-settings'),
			$btnClose = $('.tt-btn-col-close');

        $('#js-settings-btn').on('click', function (e){
            e.preventDefault();
            if($(this).hasClass('column-open')){
                $btnClose.trigger('click');
                return false;
            };
            $(this).addClass('column-open');
            var ptScrollValue = $body.scrollTop() || $html.scrollTop();
            $popupSettings.toggleClass('column-open').perfectScrollbar();
            $body.css("top", - ptScrollValue).addClass("no-scroll").append('<div class="modal-filter"></div>');
            var modalFilter = $('.modal-filter').fadeTo('fast',1);
            if (modalFilter.length) {
                modalFilter.on('click', function(){
                    $btnClose.trigger('click');
                })
            };
            return false;
        });
        $btnClose.on('click', function(e){
            e.preventDefault();
            ttPopupSettings.removeClass('column-open');
            $popupSettings.removeClass('column-open').perfectScrollbar('destroy');
            var top = parseInt($body.css("top").replace("px", ""), 10) * -1;
            $body.removeAttr("style").removeClass("no-scroll").scrollTop(top);
            $html.removeAttr("style").scrollTop(top);
            $(".modal-filter").off().remove();
            return false;
        });
    };
})();

/*
    *messages-compose.html
*/
(function(){
  var ttComposeResults = $('#tt-pageContent .tt-search-compose .tt-search-results');
  if (ttComposeResults){
     ttComposeResults.perfectScrollbar();
  };
})();

/*
    Search popup
*/
(function(){
  var ttSearchWrapper = $('#tt-header .tt-search'),
      ttSearchToggle = ttSearchWrapper.find('.tt-search-toggle'),
      ttSearchResults = ttSearchWrapper.find('.search-results'),
      ttSearchInput = ttSearchWrapper.find('.tt-search__input');

  if (ttSearchInput.length && ttSearchResults.length){
       ttSearchInput.on("input",function(ev){
          if($(ev.target).val()){
              ttSearchResults.fadeIn("200");
              ttSearchResults.find('.tt-search-scroll').perfectScrollbar();
          };
      });
      ttSearchInput.blur(function(){
        ttSearchResults.fadeOut("200");
      });
  };
})();
