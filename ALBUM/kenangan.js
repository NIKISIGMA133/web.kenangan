// Fungsi untuk menambahkan foto ke gallery
function addImageToGallery(imageData) {
  const gallery = document.getElementById('gallery');
  const imgDiv = document.createElement('div');
  imgDiv.style.position = 'relative';

  const img = document.createElement('img');
  img.src = imageData;
  img.alt = 'Kenangan Foto';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function() {
    imgDiv.remove();
  }

  imgDiv.appendChild(img);
  imgDiv.appendChild(deleteBtn);
  gallery.appendChild(imgDiv);
}

// Mendengarkan perubahan pada input file
document.getElementById('uploadImage').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      addImageToGallery(e.target.result);
    }
    reader.readAsDataURL(file);
  }
});
