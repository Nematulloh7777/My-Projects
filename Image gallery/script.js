function showImage(index) {
    let modal = document.querySelector('.modal');
    let modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = document.querySelectorAll('.thumbnails img')[index].src;
  }
  
  function closeModal() {
    document.querySelector('.modal').style.display = 'none';
  }
  