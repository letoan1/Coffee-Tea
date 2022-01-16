window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header__content").style.backgroundColor = "white"
        document.querySelector(".header__content").style.boxShadow = "0 20px 50px 0 rgb(0 0 0 / 5%)"
        document.querySelector(".header__content").style.transition = ".5s"
        document.querySelector(".nav").classList.add("scroll")
    } else {
        document.querySelector(".header__content").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.querySelector(".nav").classList.remove("scroll")
    }
}