document.addEventListener(`DOMContentLoaded`, () => {

    const navButons = document.querySelectorAll(`nav button`);
    console.log(navButons);
    for (let button of navButons){
        button.addEventListener(`click`, () => {
            console.log(button);
        });
    };
});