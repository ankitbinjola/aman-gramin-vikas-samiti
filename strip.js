/**
 * @author shree
 */

				$.getElementById('heading-2').onmouseover = function () {
					showMenu ($.getElementById('heading-2-menu'));
				};
				
				$.getElementById('heading-2').onmouseout = function () {
					hideMenu ($.getElementById('heading-2-menu'));
				};
				$.getElementById('heading-3').onmouseover = function () {
					showMenu ($.getElementById('heading-3-menu'));
				};
				
				$.getElementById('heading-3').onmouseout = function () {
					hideMenu ($.getElementById('heading-3-menu'));
				};
				$.getElementById('heading-4').onmouseover = function () {
					showMenu ($.getElementById('heading-4-menu'));
				};
				
				$.getElementById('heading-4').onmouseout = function () {
					hideMenu ($.getElementById('heading-4-menu'));
				};
				$.getElementById('heading-5').onmouseover = function () {
					showMenu ($.getElementById('heading-5-menu'));
				};
				
				$.getElementById('heading-5').onmouseout = function () {
					hideMenu ($.getElementById('heading-5-menu'));
				};
				
				
				
		       //////////////////////////		
				function showMenu (el) {
					el.style.display = "block";
					el.onmouseover = function () { showMenu(el); };
				}
				
				function hideMenu (el) {
					el.style.display = "none";
					el.onmouseout = function () { hideMenu(el); };
				}
				
				
	  