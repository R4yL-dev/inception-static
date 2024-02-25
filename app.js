document.addEventListener('DOMContentLoaded', function() {
	var headerLeft = document.querySelector('.header__left h1');
	var names = ['Luca Ray', 'R4yL-dev'];
	var randomName = names[Math.floor(Math.random() * names.length)];
	headerLeft.textContent = randomName;
	var otherName = names[0] === randomName ? names[1] : names[0];
	headerLeft.addEventListener('mouseover', function() {
		headerLeft.classList.add('fade-out');
		setTimeout(function() {
			headerLeft.textContent = otherName;
			headerLeft.classList.remove('fade-out');
		}, 300);
	});
	headerLeft.addEventListener('mouseout', function() {
		headerLeft.classList.add('fade-out');
		setTimeout(function() {
			headerLeft.textContent = randomName;
			headerLeft.classList.remove('fade-out');
		}, 300);
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var headerRight = document.querySelector('.header__right');
	var overlay = document.querySelector('.overlay_img');
	var images = ['assets/images/lray.jpg', 'assets/images/capybara.png'];
	var randomImage = images[Math.floor(Math.random() * images.length)];
	headerRight.style.backgroundImage = 'url("' + randomImage + '")';
	var overlayImage = images[0] === randomImage ? images[1] : images[0];
	overlay.style.backgroundImage = 'url("' + overlayImage + '")';
	headerRight.addEventListener('mouseover', function() {
		overlay.style.opacity = '1';
	});
	headerRight.addEventListener('mouseout', function() {
		overlay.style.opacity = '0';
	});
});
