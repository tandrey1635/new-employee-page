const showAllAccordeon = (selectorWrapper, parentSelector) => {
    const accordeonWrapper = document.querySelector(selectorWrapper)
    if (!accordeonWrapper) return

    accordeonWrapper.addEventListener('click', (e) => {

        const accordeonItem = e.target.closest(parentSelector)
        if (!accordeonItem) return

        const accordeonDescription = accordeonItem.nextElementSibling
        if (!accordeonDescription) return

        accordeonItem.classList.toggle('accordeon-active-icon')
        accordeonDescription.classList.toggle('accordeon-active')
    })
}

showAllAccordeon('.contacts__wrapper', '.accordeon__item')
showAllAccordeon('.organisations__wrapper', '.accordeon__item')
showAllAccordeon('.dress__code__wrapper', '.accordeon__item')