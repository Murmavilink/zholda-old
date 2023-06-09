const tabs = () => {

    let parentBlock;

    let tabBtns = document.querySelectorAll('.tabs__top-btn');
    let tabContents = document.querySelectorAll('.tabs__content-item');
    
    let dateItems = document.querySelectorAll('.cards__day');
    let contentItems = document.querySelectorAll('.cards__place-wrap');
    let arrowRightBtns = document.querySelectorAll('.cards__circle-arrow-right');
    let arrowLeftBtns = document.querySelectorAll('.cards__circle-arrow-left');

    let count = 0;

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


    const handlerBtn = () => {
        const arrowBtnRight = parentBlock.querySelector('.cards__circle-arrow-right');

        let dateCount = 0;

        dateItems.forEach(date => {
            if(!date.classList.contains('hidden')) dateCount++;
        });


        if(dateCount === 7) {
            arrowBtnRight.style.display = 'none';
        } else if(dateCount === 8) {
            arrowBtnRight.style.display = 'flex';
        }

    };



    const hideArrow = () => {
        const arrowBtnLeft = parentBlock.querySelector('.cards__circle-arrow-left');
        
        count = 0;

        arrowBtnLeft.style.display = 'none';
    };



    const showArrow = (parentBlock) => {
        const arrowBtnLeft = parentBlock.querySelector('.cards__circle-arrow-left');


        if (count > 0 && arrowBtnLeft.style.display == 'none') arrowBtnLeft.style.display = 'flex';
    };


    arrowRightBtns.forEach(btn => {
        
        btn.addEventListener('click', (e) => {
            parentBlock = e.target.closest('.cards__right');
            dateItems = parentBlock.querySelectorAll('.cards__day');

            
            dateItems[count].classList.add('hidden');
            
            count++;

            console.log(parentBlock);
            console.log(dateItems);
           
            showArrow(parentBlock);
            handlerBtn();
        });

    });


    arrowLeftBtns.forEach(btn => {
        
        btn.addEventListener('click', (e) => {
            overwritingElements(e, '.cards__right');
            count--;
            
            count >= 0 ? dateItems[count].classList.remove('hidden') : hideArrow();

            handlerBtn();
        });

    });


};


tabs();