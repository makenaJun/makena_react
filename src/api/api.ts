import {PagesType} from "../redux/PageReducer";

export type PageContentType = Array<ContentType>
type ContentType = {
    title: string,
    content: string
}

const materialsContent: PageContentType = [
    {
        title: 'Материалы по HTML&CSS:',
        content: `<p>
        Книга <b>Head First HTML and CSS</b> <i>[Э. Робсон, Эрик Фримен, 2019]</i>
    </p>
    Список YouTube каналов:
    <ul>
        <li><a href="https://www.youtube.com/channel/UCn-P_F0tfY21cfnkyv2lsRQ"
            title="Просто: разработка" target="_blank">Просто: разработка</a></li>
        <li><a href="https://www.youtube.com/channel/UCn5wduCq2Mus0v85QZn9IaA"
            title="Анна Блок" target="_blank">Анна Блок</a></li>
        <li><a href="https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA"
            title="Фрилансер по жизни - IT и фриланс" target="_blank">Фрилансер по жизни - IT и фриланс</a></li>
    </ul>
    <p>
        Сайт справочник: <del>htmlbook.ru</del> <a href="https://webref.ru/"
            title="webref.ru" target="_blank">WebRef</a>
    </p>`
    },
    {
        title: 'Материалы по JavaScript:',
        content: `<p>
        Книга <b>Выразительный JavaScript. Современное веб-программирование. 3-е издание</b>
        <i>[Хавербеке Марейн, 2019]</i> (Новичкам не советую)
    <br />
            Всю основную информацию изучаю на сайте: <a href="https://learn.javascript.ru/"
            title="learn.javascript.ru" target="_blank">learn.javascript.ru</a>
    </p>
    Список YouTube каналов:
    <ul>
        <li><a href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g"
            title="IT-KAMASUTRA" target="_blank">IT-KAMASUTRA</a></li>
        <li><a href="https://www.youtube.com/channel/UCY4WgAvms_JMiN_vsjH4EKQ"
            title="EasyCode" target="_blank">EasyCode</a></li>
        <li><a href="https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA"
            title="Фрилансер по жизни - IT и фриланс" target="_blank">Фрилансер по жизни - IT и фриланс</a></li>
        <li><a href="https://www.youtube.com/channel/UCBKVLoV7qzE_zkX8dMKvcXw/videos"
            title="Василий Муравьев" target="_blank">Василий Муравьев</a></li>
        <li><a href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw"
            title="Владилен Минин" target="_blank">Владилен Минин</a></li>
    </ul>`
    },
    {
        title: 'Материалы по React:',
        content: `<p>
        В ознокомительных целях взял книгу <b>Изучаем React. 2-е издание</b>
        <i>[Кирупа Чиннатамби, 2019]</i><br />
            Далее пройти Путь Самурая от <a href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g"
            title="IT-KAMASUTRA" target="_blank">IT-KAMASUTRA</a>
    </p>`
    },
    {
        title: 'Общие темы IT:',
        content: `<p>
        Гарвардский курс CS50: <a href="https://www.youtube.com/watch?v=Sy_wba7l1UU&list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5" title="Основы программирования" target="_blank">Основы программирования</a>
        <br />
                    Заряжающий чувак - Егор Малькевич, поднимает обшие темы по поводу входа в IT:
                    <a href="https://www.youtube.com/channel/UCu5rhLxjbCD2qP9lJu9ygdA" title="Minsk JSON" target="_blank">Minsk JSON</a>,
                 <a href="https://www.youtube.com/channel/UCOoZWIvTu-onaFbm0YUyY0A"
            title="Egor Malkevich" target="_blank">Egor Malkevich</a>
        <br />
                        Книга <b>Грокаем алгоритмы</b> <i>[Адитья Бхаргава, 2019]</i><br />
                            Книга <b>Компьютерные сети 5-ое издание</b>
        <i>[Дэвид Уэзеролл, Эндрю Таненбаум, 2020]</i>
                              (Просто интересно как устроены сети изнутри)(тяжела для прочтения!)
    </p>`
    }
];
const blogContent: PageContentType = [
    {
        title: '07.05.2021',
        content: `<p>
              [#] Сегодня целый день изучал материалы по работе IT-INCUBTOR-а. Решил тестовое, 
              и оплатил первый взнос за обучение в инкубаторе. Решил пойти учиться в инкубатор
               из-за чувства, незнания что конкретно учить и начинаю распыляться на левые штучки.
                Ссылки на материалы к сожалению не могу скидывать, но вкратце буду описывать 
                учебный процесс. Старт обучения уже 24 МАЯ 2021!
            </p>`
    },
    {
        title: '06.05.2021',
        content: `<p>
              [#] Дописал функционал запроса и получения постов, надо сделать pagination и sidebar.
            </p>
             <p>
            [#] Посмотрел <a href="https://www.youtube.com/watch?v=x5YssUtaynM" title="10. Вайтишный стрим - куда 
            пропал, про планы, будет ли дальше контент" 
            target="_blank">10. Вайтишный стрим - куда пропал, про планы, будет ли дальше контент</a>
            </p>`
    },
    {
        title: '05.05.2021',
        content: `
        <p>
        [#] Написал фэйковый API, все отлично функционирует остается настроить визуал.
         </p>
         `
    },
    {
        title: '04.05.2021',
        content: `
        <p>
        [#] Продолжил написание BLL, добавил redux-thunk и React-Html-Parser, думаю за 2 дня закончу BLL.
      </p>
      <p>
      [#] Посмотрел <a href="https://www.youtube.com/watch?v=B3tF12UWIsQ&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=15" 
      title="#06 Night Show by Dimych 2020-10-15" target="_blank">#06 Night Show by Dimych 2020-10-15</a>
      </p>
      `
    },
    {
        title: '03.05.2021',
        content: `
        <p>
        [#] Начал написание BLL, добавил redux, react-redux, а также пришлось обновить модуль node-sass из-за обновления nodejs.
        Первым делом создал store, закомбайнил пока один) reducer, добавил селекторы и обернул провайдером всё приложение.
        </p>
        <p>
        [#] Посмотрел <a href="https://www.youtube.com/watch?v=Qu-oyzWIpjI" 
        title="Как запускать Node.js приложения на своем сервере VDS" 
        target="_blank">Как запускать Node.js приложения на своем сервере VDS</a>
        </p>
      `
    },
    {
        title: '02.05.2021',
        content: `
        <p>
              [#] Сегодня переустанавливал Windows. Перешел на 10-ку. Установил все нужные программы самых свежих версий [mongodb, nodejs]
              без проблем. Буду потихоньку привыкать)).
            </p>
            <p>
              [#] А также сегодня купил второй монитор для более быстрой разработки.
            </p>
            <p>
              [#] Надо продумать Архитектуру блога, и завтра продолжить разработку.
            </p>
            <p>
            [#] Посмотрел <a href="https://www.youtube.com/watch?v=052og_Ics30&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=16" 
            title="#05 Night Show by Dimych 2020-10-08" target="_blank">#05 Night Show by Dimych 2020-10-08</a>
            </p>
        `
    },
    {
        title: '01.05.2021',
        content: `<p>
              [#] Сегодня начал пробовать mongodb, но столкнулся с совместимостью с windows 7, завтра буду переходить на windows 10.
            </p>
            <p>
            <b>Итоги Апреля 2021 года [часов]: HTML & CSS [0], JavaScript [0], React.js [25], 
            TypeScript [79], общие познания IT [20] => Всего [124]</b>
            </p>`
    },
    {
        title: '30.04.2021',
        content: `<p>
              [#] Перевел всю верстку на React, а данные заHARDCODил, завтра уже буду заниматься BLL.
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=N9cXLf3oL-M&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=17"
               title="#04 Night Show by Dimych 2020-09-30" target="_blank">#04 Night Show by Dimych 2020-09-30</a>
            </p>`
    },
    {
        title: '29.04.2021',
        content: `<p>
              [#] Сделал рефакторин кода чата и выложил на <a href="https://github.com/makenaJun/Let-s-Chat" 
              title="Let's Chat - GitHub" target="_blank">Let's Chat - GitHub</a>.
            </p>
            <p>
              [#] Есть интерес развернуть чат на сервере, но придется заказать VPS. 2 мая оформлю VPS и буду пробывать сделать deploy.
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=jRDV5hXxFu8&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=17" 
              title="#03 Night Show by Dimych 2020-09-23" target="_blank">#03 Night Show by Dimych 2020-09-23</a>
            </p>
            <p>
              [#] Начал переписывать данный блог на React используя TypeScript. 
              <a href="https://github.com/makenaJun/makena_react" title="Makena blog react - GitHub"
               target="_blank">Makena blog react - GitHub</a>. 
               Если честно, стало напряжно обновлять блог, так как при добавлении новости надо делать сдвиг 
               новостей вручную, а это на данный момент 9 страниц и они растут с каждым днем)) Буду реализовывать 
               автоматизацию данного процесса!
            </p>
            <p>
              [#] За сегодня добавил шапку и меню. Подключил и начал использовать SCSS.
            </p>`
    },
    {
        title: '28.04.2021',
        content: `<p>
              [#] Допилил чат! Завтра закину на GitHub, а сегодня только скриншоты.
              </p>
              <details class="details">
              <summary>Скриншоты Let's Chat</summary>
              Тут будут изображения
            </details>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=xBqyVr8L1Pc&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=19" title="#02 Night Show by Dimych 2020-09-16" target="_blank">#02 Night Show by Dimych 2020-09-16</a>
            </p>
            <p>
              [#] Ссылки на видео по которым был реализован Backend, Frontend реализовал с подключением доп. библиотек (Formik, uuid, Yup). Очень было интересно реализовывать Backend, так как это совсем другой мир ;) <br />
                <a href="https://www.youtube.com/watch?v=5uES64gckVQ" title="#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
                <br />
                <a href="https://www.youtube.com/watch?v=hWJlIJ_WSt0&t=10964s" title="#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
            </p>`
    },
    {
        title: '27.04.2021',
        content: `<p>
              [#] Чат осталось немного допилить. Завтра точно доделаю!
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=5UWux8WtR0c&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=27" 
              title="#01 Night Show by Dimych 2020-09-09" target="_blank">#01 Night Show by Dimych 2020-09-09</a>
            </p>`
    },
    {
        title: '07.05.2021',
        content: `<p>
              [#] Сегодня целый день изучал материалы по работе IT-INCUBTOR-а. Решил тестовое, 
              и оплатил первый взнос за обучение в инкубаторе. Решил пойти учиться в инкубатор
               из-за чувства, незнания что конкретно учить и начинаю распыляться на левые штучки.
                Ссылки на материалы к сожалению не могу скидывать, но вкратце буду описывать 
                учебный процесс. Старт обучения уже 24 МАЯ 2021!
            </p>`
    },
    {
        title: '06.05.2021',
        content: `<p>
              [#] Дописал функционал запроса и получения постов, надо сделать pagination и sidebar.
            </p>
             <p>
            [#] Посмотрел <a href="https://www.youtube.com/watch?v=x5YssUtaynM" title="10. Вайтишный стрим - куда 
            пропал, про планы, будет ли дальше контент" 
            target="_blank">10. Вайтишный стрим - куда пропал, про планы, будет ли дальше контент</a>
            </p>`
    },
    {
        title: '05.05.2021',
        content: `
        <p>
        [#] Написал фэйковый API, все отлично функционирует остается настроить визуал.
         </p>
         `
    },
    {
        title: '04.05.2021',
        content: `
        <p>
        [#] Продолжил написание BLL, добавил redux-thunk и React-Html-Parser, думаю за 2 дня закончу BLL.
      </p>
      <p>
      [#] Посмотрел <a href="https://www.youtube.com/watch?v=B3tF12UWIsQ&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=15" 
      title="#06 Night Show by Dimych 2020-10-15" target="_blank">#06 Night Show by Dimych 2020-10-15</a>
      </p>
      `
    },
    {
        title: '03.05.2021',
        content: `
        <p>
        [#] Начал написание BLL, добавил redux, react-redux, а также пришлось обновить модуль node-sass из-за обновления nodejs.
        Первым делом создал store, закомбайнил пока один) reducer, добавил селекторы и обернул провайдером всё приложение.
        </p>
        <p>
        [#] Посмотрел <a href="https://www.youtube.com/watch?v=Qu-oyzWIpjI" 
        title="Как запускать Node.js приложения на своем сервере VDS" 
        target="_blank">Как запускать Node.js приложения на своем сервере VDS</a>
        </p>
      `
    },
    {
        title: '02.05.2021',
        content: `
        <p>
              [#] Сегодня переустанавливал Windows. Перешел на 10-ку. Установил все нужные программы самых свежих версий [mongodb, nodejs]
              без проблем. Буду потихоньку привыкать)).
            </p>
            <p>
              [#] А также сегодня купил второй монитор для более быстрой разработки.
            </p>
            <p>
              [#] Надо продумать Архитектуру блога, и завтра продолжить разработку.
            </p>
            <p>
            [#] Посмотрел <a href="https://www.youtube.com/watch?v=052og_Ics30&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=16" 
            title="#05 Night Show by Dimych 2020-10-08" target="_blank">#05 Night Show by Dimych 2020-10-08</a>
            </p>
        `
    },
    {
        title: '01.05.2021',
        content: `<p>
              [#] Сегодня начал пробовать mongodb, но столкнулся с совместимостью с windows 7, завтра буду переходить на windows 10.
            </p>
            <p>
            <b>Итоги Апреля 2021 года [часов]: HTML & CSS [0], JavaScript [0], React.js [25], 
            TypeScript [79], общие познания IT [20] => Всего [124]</b>
            </p>`
    },
    {
        title: '30.04.2021',
        content: `<p>
              [#] Перевел всю верстку на React, а данные заHARDCODил, завтра уже буду заниматься BLL.
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=N9cXLf3oL-M&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=17"
               title="#04 Night Show by Dimych 2020-09-30" target="_blank">#04 Night Show by Dimych 2020-09-30</a>
            </p>`
    },
    {
        title: '29.04.2021',
        content: `<p>
              [#] Сделал рефакторин кода чата и выложил на <a href="https://github.com/makenaJun/Let-s-Chat" 
              title="Let's Chat - GitHub" target="_blank">Let's Chat - GitHub</a>.
            </p>
            <p>
              [#] Есть интерес развернуть чат на сервере, но придется заказать VPS. 2 мая оформлю VPS и буду пробывать сделать deploy.
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=jRDV5hXxFu8&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=17" 
              title="#03 Night Show by Dimych 2020-09-23" target="_blank">#03 Night Show by Dimych 2020-09-23</a>
            </p>
            <p>
              [#] Начал переписывать данный блог на React используя TypeScript. 
              <a href="https://github.com/makenaJun/makena_react" title="Makena blog react - GitHub"
               target="_blank">Makena blog react - GitHub</a>. 
               Если честно, стало напряжно обновлять блог, так как при добавлении новости надо делать сдвиг 
               новостей вручную, а это на данный момент 9 страниц и они растут с каждым днем)) Буду реализовывать 
               автоматизацию данного процесса!
            </p>
            <p>
              [#] За сегодня добавил шапку и меню. Подключил и начал использовать SCSS.
            </p>`
    },
    {
        title: '28.04.2021',
        content: `<p>
              [#] Допилил чат! Завтра закину на GitHub, а сегодня только скриншоты.
              <details class="details">
              <summary>Скриншоты Let's Chat</summary>
              Тут будут изображения
            </details>
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=xBqyVr8L1Pc&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=19" title="#02 Night Show by Dimych 2020-09-16" target="_blank">#02 Night Show by Dimych 2020-09-16</a>
            </p>
            <p>
              [#] Ссылки на видео по которым был реализован Backend, Frontend реализовал с подключением доп. библиотек (Formik, uuid, Yup). Очень было интересно реализовывать Backend, так как это совсем другой мир ;) <br />
                <a href="https://www.youtube.com/watch?v=5uES64gckVQ" title="#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
                <br />
                <a href="https://www.youtube.com/watch?v=hWJlIJ_WSt0&t=10964s" title="#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
            </p>`
    },
    {
        title: '27.04.2021',
        content: `<p>
              [#] Чат осталось немного допилить. Завтра точно доделаю!
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=5UWux8WtR0c&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=27" 
              title="#01 Night Show by Dimych 2020-09-09" target="_blank">#01 Night Show by Dimych 2020-09-09</a>
            </p>`
    }
];

type ResponseObjectType = {
    items: [] | Array<ContentType>,
    totalCount: number
}

const contentToDisplay = (page: PagesType, pageSize: number, currentPage: number) => {
    const responseObject: ResponseObjectType = {
        items: [],
        totalCount: 0
    }
    switch (page) {
        case 'BLOG':
            return {
                ...responseObject,
                items: blogContent.filter((content, index) => {
                    const from = pageSize * (currentPage - 1);
                    const to = pageSize * currentPage;
                    if (index >= from && index < to){
                        return content;
                    } else {
                        return null;
                    }
                }),
                totalCount: blogContent.length
            }
        case "MATERIALS":
            return {
                ...responseObject,
                items: [...materialsContent],
                totalCount: materialsContent.length
            }
        default:
            return responseObject;
    }
};


export const contentAPI = {
    getContent(page: PagesType, pageSize = 10, currentPage = 1) {
        return new Promise<ResponseObjectType>((resolve) => {
                setTimeout(() => {
                    resolve(contentToDisplay(page, pageSize, currentPage))
                }, 1000)
            }
        )
    }
};