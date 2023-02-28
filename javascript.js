const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menulinks = document.getElementsByClassName('menu-links')[0]

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    menulinks.classList.toggle('active')

})