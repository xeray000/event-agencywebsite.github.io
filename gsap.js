gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(element, {
    // начальное состояние
    opacity: 0,
    y: 50
}, {
    // конечное состояние
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: element, // элемент, который запускает анимацию
        start: "top 80%", // когда верх элемента достигает 80% высоты окна
        end: "bottom 20%", // когда нижняя часть элемента достигает 20% высоты окна
        toggleActions: "play none none reverse" // действия: при входе, при выходе, при повторном входе, при повторном выходе
    }
});
