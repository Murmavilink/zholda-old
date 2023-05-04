


const daySwitcher = () => {
    const scheduleWrap = document.querySelector('.area-info__schedule-item-calendar');
    const scheduleColumns = document.querySelectorAll('.area-info__schedule-column');
    const arrowBtnRight = document.querySelector('.area-info__arrow-wrap-right');
    const arrowBtnLeft = document.querySelector('.area-info__arrow-wrap-left');

    let count = 0;


    const showArrow = () => {
        if (count > 0 && arrowBtnLeft.style.display == 'none') arrowBtnLeft.style.display = 'flex';
    }


    const hideArrow = () => {
        count = 0;

        arrowBtnLeft.style.display = 'none';
    }


    const handlerColums = () => {
        let columnCount = 0;

        scheduleColumns.forEach(column => {
            if(!column.classList.contains('hidden')) columnCount++
        });

        columnCount === 15 ? arrowBtnRight.style.display = 'none': columnCount === 16 ? arrowBtnRight.style.display = 'flex': '';
    }


    scheduleWrap.addEventListener('click', (e) => {
        if (e.target.closest('.area-info__arrow-wrap-right')) {
            scheduleColumns[count].classList.add('hidden');

            count++;

            handlerColums();
            showArrow();
        } else if (e.target.closest('.area-info__arrow-wrap-left')) {
            count--;

            count >= 0 ? scheduleColumns[count].classList.remove('hidden') : hideArrow();

            handlerColums();
        }
    });
}


daySwitcher();