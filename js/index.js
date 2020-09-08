const commentModal = document.querySelector('#commentModal');
const span = document.querySelector('.close');
const comBtn = document.querySelector('.comment-btn');

comBtn.addEventListener('click', (event) => {
    event.preventDefault();

    commentModal.style.display = 'block';
  });

  span.onclick = () => {
    commentModal.style.display = 'none';
  };
  window.onclick = (event) => {
    if (event.target == commentModal) {
      commentModal.style.display = 'none';
    }
  };