/*
	Vortex by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$header = $('#header'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350,
			baseZIndex: 100000
		});

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle">Menu</a>')
			.appendTo($header);

		$(	'<div id="navPanel">' +
				'<nav>' +
					$('#nav') .navList() +
				'</nav>' +
				'<a href="#navPanel" class="close"></a>' +
			'</div>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

})(jQuery);


// POP UP TRIAL


// function PopupManager(specialtyNumber) {
// 	let lastOpenedPopup = null;
  
// 	this.openPopup = function (triggerElement) {
// 	  // Close the last opened pop-up
// 	  if (lastOpenedPopup) {
// 		lastOpenedPopup.style.display = 'none';
// 	  }
  
// 	  const popup = document.getElementById(`popup${specialtyNumber}`);
// 	  const rect = triggerElement.getBoundingClientRect();
// 	  popup.style.top = rect.bottom + 'px';
// 	  popup.style.left = rect.left + 'px';
// 	  popup.style.display = 'block';
  
// 	  // Set the current pop-up as the last opened pop-up
// 	  lastOpenedPopup = popup;
// 	};
  
// 	this.closePopup = function () {
// 	  const popup = document.getElementById(`popup${specialtyNumber}`);
// 	  popup.style.display = 'none';
  
// 	  // Reset the lastOpenedPopup variable when closing the pop-up
// 	  lastOpenedPopup = null;
// 	};
//   }
  
//   const popupManagers = [];
  
//   // Create PopupManager instances for specialties 1 to 9
//   for (let i = 1; i <= 9; i++) {
// 	popupManagers[i] = new PopupManager(i);
//   }
  
function PopupManager(specialtyNumber) {
	this.togglePopup = function () {
	  const popup = document.getElementById(`popup${specialtyNumber}`);
	  popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
	  closeOtherPopups(specialtyNumber);
	};
  }
  
  // Helper function to close other pop-ups
  function closeOtherPopups(currentSpecialty) {
	for (let i = 1; i <= 9; i++) {
	  if (i !== currentSpecialty) {
		const otherPopup = document.getElementById(`popup${i}`);
		otherPopup.style.display = 'none';
	  }
	}
  }
  
  const popupManagers = [];
  
  // Create PopupManager instances for specialties 1 to 9
  for (let i = 1; i <= 9; i++) {
	popupManagers[i] = new PopupManager(i);
  }
  


// Example event listeners for buttons
for (let i = 1; i <= 9; i++) {
    const button = document.getElementById(`button${i}`);
    button.addEventListener('click', () => popupManagers[i].openPopup());
}


// Example usage
// To open the pop-up for the first specialty
// popupManagers[1].openPopup();

// // To close the pop-up for the second specialty
// popupManagers[2].closePopup();

// THE FOLLOWING SECTION IS ALL SEPARATE FUNCTIONS WITHOUT A CONSTRUCTOR FUNCTION

// Get the button and the pop-up elements
// function openPopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'block';
// }

// function closePopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'none';
// }

// function openPopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'block';
// }

// function closePopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'none';
// }
// function openPopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'block';
// }

// function closePopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'none';
// }

// function openPopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'block';
// }

// function closePopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'none';
// }
// function openPopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'block';
// }

// function closePopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'none';
// }

// function openPopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'block';
// }

// function closePopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'none';
// }
// function openPopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'block';
// }

// function closePopup1() {
//     const popup = document.getElementById('popup1');
//     popup.style.display = 'none';
// }

// function openPopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'block';
// }

// function closePopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'none';
// }

// function openPopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'block';
// }

// function closePopup2() {
//     const popup = document.getElementById('popup2');
//     popup.style.display = 'none';
// }
// window.addEventListener('click', (event) => {
//     // Close the pop-up if the user clicks outside the pop-up
//     if (event.target.classList.contains('popup')) {
//         event.target.style.display = 'none';
//     }
// });