'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу
        if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
        *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
        *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
        *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
        *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
        *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
        *       3.2. Нет: Конец
        *   4. Конец
        */

        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        })

    }
});

/* Фильтрация карточек */
  
  const buttons = document.querySelectorAll(".lists__btn");
  const cardsFilter = document.querySelectorAll(".lists__item");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter"); 
      cardsFilter.forEach((card) => {
                if (filter === "all") {
                    card.classList.remove("hidden");
                } else {
                    if (card.classList.contains(filter)) {
            card.classList.remove("hidden");
                    } else {
            card.classList.add("hidden");
                    }
                }
            });
        });
    });

    /* 2. Динамический вывод карточек тегов. Часть 1 (Используем массив с данными) */
    const wordsContainer = document.querySelector(".words");

    if (wordsContainer) {

        const dataTitleWords = ['服装', '保护', '哪儿'];

        const TitleWords = wordsContainer.querySelectorAll('.words__word--word');

        TitleWords.forEach((item, index) => {
            item.textContent = dataTitleWords[index];
        });

    }

    /* 3. Появление форм */
    const formButtonModal = document.querySelector(".header__button");
    const modalForm = document.querySelector(".forms");
if (formButtonModal && modalForm) {
    formButtonModal.addEventListener("click", () => {
        modalForm.removeAttribute("hidden");
    });
}
window.addEventListener("click", (event) => {
    if (event.target === modalForm) {
        modalForm.setAttribute("hidden", true);
    }
});

/* 4. динамический вывод карточек*/
const cardsLists = document.querySelector('.lists');
if (cardsLists) {
    const listsList = cardsLists.querySelector('.lists__list');
    const cardsListsData = {
        lists1: {
            name: 'HSK 1',
            description: 'Количество слов:',
            wordcount: '51',
            button: 'Смотреть список',
        },
        lists2: {
            name: 'HSK 2',
            description: 'Количество слов:',
            wordcount: '63',
            button: 'Смотреть список',
        },
        lists3: {
            name: 'Еда',
            description: 'Количество слов:',
            wordcount: '250',
            button: 'Смотреть список',
        },
        lists4: {
            name: 'Животные',
            description: 'Количество слов:',
            wordcount: '60',
            button: 'Смотреть список',
        },
        lists5: {
            name: 'HSK 3',
            description: 'Количество слов:',
            wordcount: '76',
            button: 'Смотреть список',
        },
        lists6: {
            name: 'НПККЯ 1',
            description: 'Количество слов:',
            wordcount: '751',
            button: 'Смотреть список',
        },
        lists7: {
            name: 'НПККЯ 2',
            description: 'Количество слов:',
            wordcount: '340',
            button: 'Смотреть список',
        },
        lists8: {
            name: 'НПККЯ 3',
            description: 'Количество слов:',
            wordcount: '456',
            button: 'Смотреть список',
        }
    }
        const createCard = (name, description, wordcount, button) => {
        const card = `
        <li class="lists__item">
            <p class="lists__name">${name}</p>
            <p class="lists__description">${description}</p>
            <p class="lists__wordcount">${wordcount}</p>
            <button class="lists__button button>${button}</button>
        </li>
        `;
            return card;
        }
        for (const cardKey in cardsListsData) {
            const card = cardsListsData[cardKey];
            const cardElement = createCard(card.name, card.description, card.wordcount, card.button);
            listsList.insertAdjacentHTML('beforeend', cardElement);
        }
}