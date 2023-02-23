const shareOpen = document.getElementById('share-open');
const shareClose = document.getElementById('share-close');
const share = document.getElementById('share')

shareOpen.addEventListener('click', () => {
  share.classList.toggle('share-reveal');
})

shareClose.addEventListener('click', () => {
  share.classList.remove('share-reveal');
})