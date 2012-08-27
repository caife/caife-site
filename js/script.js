$(document).ready(function() {

	/* Twitter Widget */
	$("footer .twitter-feed").tweet({
		join_text : "",
		count : 1,
		loading_text : "carregando tweets...",
		username : 'caifesoftware',
		template : "{text}{join}{time}"
	});

	/* Form Submission */
	$('form').submit(function() {
		
		var form_data = $(this).serialize();

		if (validateEmail($('input[name=email]').attr('value')))
		{
			
			if (typeof ajax_form !== "undefined" && ajax_form === true)
			{
				
				$.post($(this).attr('action'), form_data, function(data) {
					$('form').fadeOut('slow', function() { $(this).after('<p class="form-msg">' + data + '</p>'); });
	  				$('.spam').html('&nbsp;');
				});
				
				return false;
				
			}
			
		}

		else
		{
			$('p.spam').text('E-mail inserido é inválido').effect("pulsate", { times:3 }, 1000);
			return false;
		}
		
	});


});


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 