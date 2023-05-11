let allTexts = document.querySelectorAll('.text');
{
	let hasPostMessage = false;
	let index = 0;
	while (index < allTexts.length) {
		const text = allTexts[index];
		text.addEventListener('click', (event) => {
			if (!hasPostMessage) {
				let message = document.createElement('div');
				message.classList.add('message');
				message.innerText = 'Post';
				message.style.position = 'fixed';
				message.style.top = '50%';
				message.style.left = '50%';
				document.body.appendChild(message);
				hasPostMessage = true;
			}
		});
		index++;
	}
}
