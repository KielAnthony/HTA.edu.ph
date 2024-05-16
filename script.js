
var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right  = "-200px";
        }


document.addEventListener('DOMContentLoaded', () => {
	const dropdownToggle = document.querySelector('.dropdown-toggle');
	const dropdownMenu = document.querySelector('.dropdown-menu');

	dropdownToggle.addEventListener('click', (event) => {
		event.preventDefault(); 
		dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
	});

	
	document.addEventListener('click', (event) => {
		if (!event.target.closest('.dropdown')) {
			dropdownMenu.style.display = 'none';
		}
	});
});

