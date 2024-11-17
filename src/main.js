import("./main.scss");

document.querySelectorAll(".navigation-list__button").forEach((el) => {
    el.addEventListener("click", (e) => {
        document.querySelectorAll(".active").forEach((item) => {
            item.classList.remove("active");
        })
        el.classList.add('active');
    })

})

