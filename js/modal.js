const showModal = () => {
	const modal = document.querySelector('.rules__modal')
	const modalBtn = document.querySelector('.btn_rules')
	const modalBtnClose = document.querySelector('.rules__modal__close')
	if (!modalBtn) return

	modalBtn.addEventListener('click', (e)=> {
		e.preventDefault()
		modal.classList.add('active-modal')
		document.body.classList.add('overflow')
	})

	document.addEventListener('click', (e) => {
        if (!modal.contains(e.target) && e.target !== modalBtn && modal.classList.contains('active-modal') || e.target == modalBtnClose) {
            modal.classList.remove('active-modal')
            document.body.classList.remove('overflow')
        }
    })
}

showModal()