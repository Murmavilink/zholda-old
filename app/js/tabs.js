const tabs = () => {
    const tabBtns = document.querySelectorAll('.tabs__top-btn');
    const tabContents = document.querySelectorAll('.tabs__content-item');
    const dateItems = document.querySelectorAll('.cards__day');
    const contentItems = document.querySelectorAll('.cards__place-wrap');
    const arrowBtn = document.querySelector('.cards__circle-arrow');


    const removeClassActive = (items, btnActiveClass, contents, contentActiveClass) => {
        for (let i = 0; i < contents.length; i++) {
            items[i].classList.remove(btnActiveClass);

            contents[i].classList.remove(contentActiveClass);
        }
    }

    const addClassActive = (item, proporty, btnClassActive, contentActiveClass) => {
        const id = item.dataset[proporty];
        const content = document.getElementById(id);

        item.classList.add(btnClassActive);
        content.classList.add(contentActiveClass);
    }

    const handlerClickArrow = (idNum) => {
        if (idNum < dateItems.length) {
            dateItems[idNum].classList.add('cards__day--active');
            contentItems[idNum].classList.add('cards__place-wrap--active');
        } else {
            dateItems[0].classList.add('cards__day--active');
            contentItems[0].classList.add('cards__place-wrap--active');
        }
    }



    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeClassActive(tabBtns, 'tabs__top-btn--active', tabContents, 'tabs__content-item--active');
            addClassActive(btn, 'item', 'tabs__top-btn--active', 'tabs__content-item--active');
        });
    })


    dateItems.forEach(item => {
        item.addEventListener('click', () => {
            removeClassActive(dateItems, 'cards__day--active', contentItems, 'cards__place-wrap--active');
            addClassActive(item, 'day', 'cards__day--active', 'cards__place-wrap--active');
        })
    });


    arrowBtn.addEventListener('click', () => {
        const idNum = document.querySelector('.cards__day--active').dataset.day.substring(14);

        removeClassActive(dateItems, 'cards__day--active', contentItems, 'cards__place-wrap--active');
        handlerClickArrow(idNum);
    });

}


tabs();