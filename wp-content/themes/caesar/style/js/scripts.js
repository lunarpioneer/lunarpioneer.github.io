jQuery(document).ready(function(){
	
	//WordPress Stuff
	jQuery('.main-nav li').addClass('popup-item');
	
	//Code highlighting
	jQuery('pre').each( function() {
		hljs.highlightBlock( this );
	});
	
	//Caesar main config
	var config = {
		"dribbble" : {
			"data" : {
				"per_page" : wp_data.dribbble_per_page,
			},
			"url" : wp_data.dribbble_url
		},
		"instagram" : {
			"data" : {
				"access_token" : wp_data.instagram_api,
				"count" : wp_data.instagram_per_page,
			},
			"url" : wp_data.instagram_url
		},
		"share" : {
			"data" : {
				"apikey" : wp_data.share_count_api
			}
		},
		"post" : {
			"overlay" : false,
			"wideContent" : true
		}
	};
	
	//Start caesar main
	jQuery(function() {
		caesar.start( config );
	});
	
});