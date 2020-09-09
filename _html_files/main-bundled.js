(function($) {
	var body, navigation;

	var navToggle = function(e) {
		if (body && body.length) body.toggleClass('nav-open')
		if (navigation && navigation.length) navigation.toggleClass('nav-open')
		$(e.currentTarget).toggleClass('nav-open')
		e.preventDefault()
	}

	var setCookie = function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	var getCookie = function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	var updateCookie = function(e) {
		setCookie('snajd', true, 30);
		checkCookie();
		e.preventDefault();
	}

	var checkCookie = function() {
		getCookie('snajd') === '' ? $('.cookie').removeClass('hidden') : $('.cookie').addClass('hidden');
	}

	var checkForms = function() {
		var form = $(this);
		var text = form.find('.wpcf7-text, .wpcf7-textarea');
		var checkbox = form.find('input[type=checkbox]');

		text.each(toggleInput);
		text.on('change, keydown, keyup', toggleInput); 

		checkbox.each(toggleCheckbox);
		checkbox.on('change', toggleCheckbox);
	}

	var toggleInput = function() {
		var input = $(this);
		var val = input.val();

		val ? input.addClass('has-input') : input.removeClass('has-input');
	};

	var toggleCheckbox = function() {
		var input = $(this);
		var p = input.closest('.wpcf7-list-item');
		var checked = input.is(':checked');

		checked ? p.addClass('has-input') : p.removeClass('has-input');
	}

	var init = function(){
		body = $('body');
		navigation = $('#mobile-navigation');

		$('.block-click').on('click', function (e) { e.preventDefault() })
		$('.nav-toggle, .cross').on('click', navToggle);
		$('.cookie').on('click', 'button', updateCookie);
		$('.wpcf7-form').each(checkForms);

		checkCookie();
	}
	$(init)
}) (jQuery);
