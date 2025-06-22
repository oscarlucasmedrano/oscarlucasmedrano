document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentPage = 0;

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
    }

    function flipPage(direction) {
        if (direction === 'next' && currentPage < pages.length - 1) {
            pages[currentPage].classList.add('flipped');
            pages[currentPage].classList.remove('active');
            currentPage++;
            pages[currentPage].classList.add('active');
        } else if (direction === 'prev' && currentPage > 0) {
            pages[currentPage].classList.remove('active');
            currentPage--;
            pages[currentPage].classList.remove('flipped');
            pages[currentPage].classList.add('active');
        }
        updateButtons();
    }

    prevButton.addEventListener('click', () => flipPage('prev'));
    nextButton.addEventListener('click', () => flipPage('next'));

    // Swipe support for touch devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.book').addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.querySelector('.book').addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) flipPage('next');
        if (touchEndX > touchStartX + 50) flipPage('prev');
    });

    // Set initial active page
    pages[0].classList.add('active');
    updateButtons();
});
Medrano, Oscar-Lucas
​Medrano, Oscar-Lucas​
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Hevetica Neue', Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.book-container {
    perspective: 1500px;
    max-width: 1000px;
    width: 100%;
    padding: 20px;
}

.book {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 500px;
    margin: 0 auto;
    transform-style: preserve-3d;
    background: #fff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 10px 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.page {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    transform-origin: left;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
}

.page-content {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid #eee;
}

.page-content.back {
    transform: rotateY(180deg);
}

.page.active {
    z-index: 10;
}

.page.flipped {
    transform: rotateY(-180deg);
}

.pdf-embed {
    width: 90%;
    height: 300px;
    border: none;
    margin: 10px 0;
}

h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
}

h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
}

p {
    color: #666;
    text-align: center;
    font-size: 1rem;
    max-width: 80%;
}

.controls {
    text-align: center;
    margin-top: 20px;
}

button {
    background: none;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
    padding: 10px 20px;
    transition: color 0.3s;
}

button:hover {
    color: #007bff;
}

button:disabled {
    color: #ccc;
    cursor: not-allowed;
}

@media (max-width: 768px) {
    .book {
        height: 400px;
    }

    .pdf-embed {
        height: 200px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }
}