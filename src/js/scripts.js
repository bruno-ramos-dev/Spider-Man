function handleMouseEnter () {
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave () {
    this.classList.remove('s-card--hovered')
    document.body.id = ''
}

const addEventListenersToCards = () => {
    const cardElements = document.getElementsByClassName('s-card')

    for (const card of cardElements) {
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

// document.addEventListener('DOMContentLoaded', addEventListenersToCards, false)
addEventListenersToCards()

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id
    const carousel = document.querySelector('.s-cards-carousel')
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
    let rotateYDeg = 45 * (Number(selectedItem) - 1)
    if (selectedItem == 3) {
        rotateYDeg = -45
    }
    const newTransform =  transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
    
    carousel.style.transform = newTransform

    const activeButtonElement = document.querySelector('.s-controller__button--active')
    activeButtonElement.classList.remove('s-controller__button--active')
    selectedButtonElement.classList.add('s-controller__button--active')
}