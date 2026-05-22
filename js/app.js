(function($, document, window){
	$(document).ready(function(){
		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// Map of year classes to specific years for each sermon
		var yearMap = {
			'year-0': 1994,  // August 14, 1994 - The Sun Darkens
			'year-1': 1993,  // July 25, 1993 - New World Disorder
			'year-2': 1992,  // November 9, 1992 - The Judge is At the Door
			'year-3': 1992,  // January 22, 1992 - Annointed By God
			'year-5': 1991   // June 26, 1991 - The Time Has Come!
		};

  		$("[class^=year]").each((i, el) => {
  			var className = el.className;
  			var year = yearMap[className] || 1994;
  			el.innerHTML = year;
  		});

	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	  	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-47278397-5', 'auto');
  		ga('send', 'pageview');
	});
})(jQuery, document, window);
