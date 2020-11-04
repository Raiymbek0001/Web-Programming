const viewImage = document.createElement('div');
viewImage.id = 'view';
document.body.appendChild(viewImage);

const img = document.querySelectorAll('img');
img.forEach(image => {
	image.addEventListener('click', e => {
		viewImage.classList.add('active');
		const view = document.createElement('img');
		view.src = image.src;
		while(viewImage.firstChild){
			viewImage.removeChild(viewImage.firstChild);
		}
		viewImage.appendChild(view);
	})
});

viewImage.addEventListener('click', e => {
	if(e.target !== e.currentTarget)
		return;
	viewImage.classList.remove('active');
});