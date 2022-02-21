const openModal = document.querySelector('.open-modal');
const container = document.querySelector('body');


openModal.addEventListener('click', () => {
    let modalBox = document.createElement('div');
    modalBox.setAttribute("class", "modal-box")
    container.appendChild(modalBox);
    modalBox.textContent = "THIS IS MODAL BOX.";
   
    

    let closeModal = document.createElement('button');
    closeModal.setAttribute('class', 'close-modal');
    modalBox.appendChild(closeModal);
    closeModal.textContent = "X";
})

const closeBtn = document.querySelector('.close-modal');

closeBtn.addEventListener('click')