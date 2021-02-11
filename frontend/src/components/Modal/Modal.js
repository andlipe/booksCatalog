import './Modal.scss'
class Modal {
    mount() {
        const modalContainer = `
            <div id="modal">
                <div id="modalContent">
                </div>
            </div>
        `

        return modalContainer;
    }

    handleCloseModal() {
        document.getElementById('modal').addEventListener('click', (e) => {
            const modalContent = document.getElementById('modalContent');
            if(!modalContent.contains(e.target)) {
                document.getElementById('modal').style.display = 'none';
            }
        })
    }
}

export default Modal;