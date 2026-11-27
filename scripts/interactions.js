const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.save-dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});

// The supplied like.js owns the animation state. Keep its accessible label in sync.
document.querySelectorAll('.card').forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const buttons = card.querySelectorAll('.card__icon-button, .card__like-button');

  const syncPressedState = () => {
    const isLiked = heart.classList.contains('is-liked');
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(isLiked));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', syncPressedState);
  });
});

document.querySelector('.save-dialog__button').addEventListener('click', () => {
  saveDialog.close();
});
