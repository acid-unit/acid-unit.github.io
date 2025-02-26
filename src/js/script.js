// noinspection JSUnusedGlobalSymbols,JSUnresolvedReference

(() => {
    const magentoElement = document.querySelector('.magento'),
        flaskElement = document.querySelector('.flask'),
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (magentoElement) {
        new Typed('.magento', {
            strings: ['Adobe Commerce'],
            startDelay: 2000,
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            onComplete: typed => {
                typed.cursor.classList.replace('typed-cursor', 'hide');

                setTimeout(() => {
                    document.querySelector('.acid .bar, .acid .typed-cursor--blink').remove();
                    document.querySelector('.acid .typed-cursor--blink').remove();
                    magentoElement.classList.add('color-red');
                }, 400);
            },
            onBegin: typed => {
                typed.insertCursor();
                typed.cursor.classList.add("typed-cursor--blink");
            },
        });
    }

    if (flaskElement) {
        flaskElement.addEventListener('click', event => {
            event.target.classList.add('shake');

            setTimeout(() => {
                event.target.classList.remove('shake');
            }, 800);
        });
    }

    if (isSafari) {
        document.querySelector('html').classList.add('is-safari');
    }
})();

