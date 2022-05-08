window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
    //Linha alvo
    const targetLine = scrollY + innerHeight / 2

    //o topo da seção
    const sectionTop = services.offsetTop

    //a altura da seção
    const sectionHeight = home.offsetHeight
    
    //o topo da seção chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informacoes
    console.log('O topo da seção chegou o passou da linha?' , sectionTopReachOrPassedTargetline)

    //verificar se a base está abaixo da linha alvo
    c


}

function showNavOnScroll() {
    if (scrollY > 0 ) {
        navigation.classList.add('scroll')
        
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400 ) {
        backToTopButton.classList.add('show')
        
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);