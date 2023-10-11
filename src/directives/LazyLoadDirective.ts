
const loadImage = (el: any) => {
    const image = new Image();
    image.src = el.dataset.src!;
    image.onload = () => {
        el.src = image.src;
    }
};

const observed = new Map();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            loadImage(image);
            observer.unobserve(image);
            observed.delete(image);
        }
    });
});

export default {
    mounted(el: HTMLImageElement, binding: any) {
        el.setAttribute('data-src', binding.value);
        el.src = '';
        observed.set(el, binding.value);
        observer.observe(el);
    },
    unmounted(el: HTMLImageElement) {
        if (observed.has(el)) {
            observer.unobserve(el);
            observed.delete(el);
        }
    }
}
