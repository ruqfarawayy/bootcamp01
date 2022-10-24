const alertWarn = (s, color) => {
    // console.log(s);//     
    let btnAlert = document.getElementById("peringatan");
//     let berhasil = "Berhasil Menambahkan";
//     let hapus = "Berhasil Menghapus";
    
    btnAlert.innerHTML = `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
    ${s}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

export {alertWarn}; 