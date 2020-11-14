// Find all the images

const imagesToLoad = document.querySelectorAll('img[data-src]');

// Add image load options

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 20px 0px"
};

// Change image source from src to data-src OR change data-src to src 

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// Load images

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
    
    if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);}
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    } 
    
    else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}