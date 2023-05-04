const tabs = () => {

    let parentBlock;

    let tabBtns = document.querySelectorAll('.tabs__top-btn');
    let tabContents = document.querySelectorAll('.tabs__content-item');
    
    let dateItems = document.querySelectorAll('.cards__day');
    let contentItems = document.querySelectorAll('.cards__place-wrap');
    let arrowBtns = document.querySelectorAll('.cards__circle-arrow');



    const removeClassActive = (items, btnActiveClass, contents, contentActiveClass) => {
        for (let i = 0; i < contents.length; i++) {
            items[i].classList.remove(btnActiveClass);

            contents[i].classList.remove(contentActiveClass);
        }
    };

    
    const addClassActive = (item, proporty, btnClassActive, contentActiveClass) => {
        const id = item.dataset[proporty];
        const content = parentBlock.querySelector('#' + id);

        item.classList.add(btnClassActive);
        content.classList.add(contentActiveClass);
    };


    const overwritingElements = (e, parentClass) => {
        parentBlock = e.target.closest(parentClass);

        dateItems = parentBlock.querySelectorAll('.cards__day');
        contentItems = parentBlock.querySelectorAll('.cards__place-wrap');
    };


    const handlerClickArrow = (idNum) => {
        if (idNum < dateItems.length) {
            dateItems[idNum].classList.add('cards__day--active');
            contentItems[idNum].classList.add('cards__place-wrap--active');
        } else {
            dateItems[0].classList.add('cards__day--active');
            contentItems[0].classList.add('cards__place-wrap--active');
        }
    };


    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            overwritingElements(e, '.tabs');

            removeClassActive(tabBtns, 'tabs__top-btn--active', tabContents, 'tabs__content-item--active');
            addClassActive(btn, 'item', 'tabs__top-btn--active', 'tabs__content-item--active');
        });
    });


    dateItems.forEach(item => {
        item.addEventListener('click', (e) => {
            overwritingElements(e, '.cards__right');

            removeClassActive(dateItems, 'cards__day--active', contentItems, 'cards__place-wrap--active');
            addClassActive(item, 'day', 'cards__day--active', 'cards__place-wrap--active');
        });
    });


    arrowBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            overwritingElements(e, '.cards__right');
            const idNum = parentBlock.querySelector('.cards__day--active').dataset.day.substring(14);

            removeClassActive(dateItems, 'cards__day--active', contentItems, 'cards__place-wrap--active');
            handlerClickArrow(idNum);
        });
    });


};


tabs();