import React, { FC } from 'react';
import { Delimiter } from '../../components/common/Delimiter/Delimiter';
import styles from '../Pages.module.scss';

export const MaterialsPage: FC = () => {
    return (
        <div>
             <div className={styles.newsBlock}>
                <div className={styles.newsTitle}>Материалы для обучения</div>
                <div className={styles.newsContent}>
                   <h3>Материалы по HTML&CSS:</h3>
                   <p>
                    Книга <b>Head First HTML and CSS</b> <i>[Э. Робсон, Эрик Фримен, 2019]</i>
                    </p>
                    Список YouTube каналов: 
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UCn-P_F0tfY21cfnkyv2lsRQ" title="Просто: разработка" target="_blank">Просто: разработка</a></li>
                        <li><a href="https://www.youtube.com/channel/UCn5wduCq2Mus0v85QZn9IaA" title="Анна Блок" target="_blank">Анна Блок</a></li>
                        <li><a href="https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA" title="Фрилансер по жизни - IT и фриланс" target="_blank">Фрилансер по жизни - IT и фриланс</a></li>
                    </ul>
                    <p>
                    Сайт справочник: <del>htmlbook.ru</del> <a href="https://webref.ru/" title="webref.ru" target="_blank">WebRef</a>
                   </p>
                   <Delimiter />
                   <h3>Материалы по JavaScript:</h3>
                   <p>
                    Книга <b>Выразительный JavaScript. Современное веб-программирование. 3-е издание</b> <i>[Хавербеке Марейн, 2019]</i> (Новичкам не советую)
                    <br />
                    Всю основную информацию изучаю на сайте: <a href="https://learn.javascript.ru/" title="learn.javascript.ru" target="_blank">learn.javascript.ru</a>
                    </p>
                    Список YouTube каналов: 
                    <ul>
                        <li><a href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g" title="IT-KAMASUTRA" target="_blank">IT-KAMASUTRA</a></li>
                        <li><a href="https://www.youtube.com/channel/UCY4WgAvms_JMiN_vsjH4EKQ" title="EasyCode" target="_blank">EasyCode</a></li>
                        <li><a href="https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA" title="Фрилансер по жизни - IT и фриланс" target="_blank">Фрилансер по жизни - IT и фриланс</a></li>
                        <li><a href="https://www.youtube.com/channel/UCBKVLoV7qzE_zkX8dMKvcXw/videos" title="Василий Муравьев" target="_blank">Василий Муравьев</a></li>
                         <li><a href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw" title="Владилен Минин" target="_blank">Владилен Минин</a></li>
                    </ul>
                   <Delimiter />
                   <h3>Материалы по React:</h3>
                   <p>
                    В ознокомительных целях взял книгу <b>Изучаем React. 2-е издание</b> <i>[Кирупа Чиннатамби, 2019]</i><br />
                    Далее пройти Путь Самурая от <a href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g" title="IT-KAMASUTRA" target="_blank">IT-KAMASUTRA</a>
                   </p>
                    <Delimiter />
                   <h3>Общие темы IT:</h3>
                   <p>
                      Гарвардский курс CS50: <a href="https://www.youtube.com/watch?v=Sy_wba7l1UU&list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5" title="Основы программирования" target="_blank">Основы программирования</a> 
                      <br />
                      Заряжающий чувак - Егор Малькевич, поднимает обшие темы по поводу входа в IT: <a href="https://www.youtube.com/channel/UCu5rhLxjbCD2qP9lJu9ygdA" title="Minsk JSON" target="_blank">Minsk JSON</a>, 
                      <a href="https://www.youtube.com/channel/UCOoZWIvTu-onaFbm0YUyY0A" title="Egor Malkevich" target="_blank">Egor Malkevich</a>
                    <br />
                    Книга <b>Грокаем алгоритмы</b> <i>[Адитья Бхаргава, 2019]</i><br />
                    Книга <b>Компьютерные сети 5-ое издание</b> <i>[Дэвид Уэзеролл, Эндрю Таненбаум, 2020]</i> (Просто интересно как устроены сети изнутри)(тяжела для прочтения!)
                   </p>                   

                </div>             
            </div>
        </div>
    )
};