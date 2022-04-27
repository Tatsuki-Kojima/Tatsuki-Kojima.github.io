// HTMLCollectonOf<Element>
let images = document.getElementsByClassName("top-image");

document.body.onload = () => {
    const slide = new Slide(12000);
}

class Slide {
    constructor(interval) {
        this.interval = interval
        this.index = 0;

        setInterval(this.Change.bind(this), this.interval);
    }

    Change() {
        images[this.index % images.length]
            .animate({ "opacity": "0" }, "800", "cubic-bezier(0.5, 1, 0.89, 1)");
        images[(this.index + 1) % images.length]
            .animate({ "opacity": "1" }, "800", "cubic-bezier(0.5, 1, 0.89, 1)");

        const changeToOne = () => {
            images[this.index % images.length].style.opacity = 0;
            images[(this.index + 1) % images.length].style.opacity = 1;
            this.index = this.index + 1;
        }

        setTimeout(changeToOne, 800);
    }
}