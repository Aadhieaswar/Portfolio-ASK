let images = document.querySelectorAll('.preview');
let modal = document.querySelector('#preview-modal');
let closeBtn = document.querySelector('.close-btn');

function hideModal() {
  modal.style.display = 'none';
}
closeBtn.onclick = () => { hideModal(); }
modal.onclick = () => { hideModal(); }

for (let i = 0; i < images.length; i++) {
  images[i].onclick = () => {
    modal.style.display = 'block';
    document.getElementById('prev-img').src = images[i].src;
  }
}
