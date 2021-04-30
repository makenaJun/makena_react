import React, { FC } from 'react';
import { Delimiter } from '../../components/common/Delimiter/Delimiter';
import styles from '../Pages.module.scss';

export const BlogPage: FC = () => {
    return (
        <div>
            <div className={styles.newsTitle}>Блог</div>
          <div className={styles.newsContent}>
            <b>29.04.2021</b>
            <p>
              [#] Сделал рефакторин кода чата и выложил на <a href="https://github.com/makenaJun/Let-s-Chat" title="Let's Chat - GitHub" target="_blank">Let's Chat - GitHub</a>.
            </p>
            <p>
              [#] Есть интерес развернуть чат на сервере, но придется заказать VPS. 2 мая оформлю VPS и буду пробывать сделать deploy.
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=jRDV5hXxFu8&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=17" title="#03 Night Show by Dimych 2020-09-16" target="_blank">#03 Night Show by Dimych 2020-09-16</a>
            </p>
            <p>
              [#] Начал переписывать данный блог на React используя TypeScript. <a href="https://github.com/makenaJun/makena_react" title="Makena blog react - GitHub" target="_blank">Makena blog react - GitHub</a>. Если честно, стало напряжно обновлять блог, так как при добавлении новости надо делать сдвиг новостей вручную, а это на данный момент 9 страниц и они растут с каждым днем)) Буду реализовывать автоматизацию данного процесса!
            </p>
            <p>
              [#] За сегодня добавил шапку и меню. Подключил и начал использовать SCSS.
            </p>
            <Delimiter />
            <b>28.04.2021</b>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=xBqyVr8L1Pc&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=19" title="#02 Night Show by Dimych 2020-09-16" target="_blank">#02 Night Show by Dimych 2020-09-16</a>
            </p>
            <p>
              [#] Ссылки на видео по которым был реализован Backend, Frontend реализовал с подключением доп. библиотек (Formik, uuid, Yup). Очень было интересно реализовывать Backend, так как это совсем другой мир ;) <br />
                <a href="https://www.youtube.com/watch?v=5uES64gckVQ" title="#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#1: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
                <br />
                <a href="https://www.youtube.com/watch?v=hWJlIJ_WSt0&t=10964s" title="#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)" target="_blank">#2: Разработка простого чата на ReactJS + NodeJS + Socket.IO (for Junior)</a>
            </p>
            <Delimiter />
            <b>27.04.2021</b>
            <p>
              [#] Чат осталось немного допилить. Завтра точно доделаю!
            </p>
            <p>
              [#] Посмотрел <a href="https://www.youtube.com/watch?v=5UWux8WtR0c&list=PLcvhF2Wqh7DOjApuSClDESOjVt5_qKjoZ&index=27" title="#01 Night Show by Dimych 2020-09-09" target="_blank">#01 Night Show by Dimych 2020-09-09</a>
            </p>
          </div>
        </div>
    )
};