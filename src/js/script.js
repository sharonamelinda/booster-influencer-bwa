function toggleImage(checkbox, type, color) {
    const imgBlack = `assets/images/icons/${type}-${color}-outline.svg`;
    const imgWhite = `assets/images/icons/${type}-white-outline.svg`;
    const imgElements = checkbox.closest('label').querySelectorAll('img');

    if (checkbox.checked) {
        imgElements[0].src = imgWhite; // Ganti ke ikon putih
        imgElements[1].src = imgBlack; // Opsional: sembunyikan ikon hitam
    } else {
        imgElements[0].src = imgBlack; // Kembali ke ikon hitam
        imgElements[1].src = imgWhite; // Opsional: tampilkan ikon putih
    }
}
