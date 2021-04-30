import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BlogPage } from './Pages/BlogPage/BlogPage';
import { HomePage } from './Pages/HomePage/HomePage';
import { MaterialsPage } from './Pages/MaterialsPage/MaterialsPage';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className={styles.wrapperApp}>
      <Header />
      <Menu />
      <div className={styles.contentBox}>
        <main className={styles.mainContent}>
          <Switch>
            <Route exact path={'/'} render={() => <HomePage />} />
            <Route path={'/blog'} render={() => <BlogPage />} />
            <Route path={'/materials'} render={() => <MaterialsPage />} />
            <Route path={'*'} render={() => <NotFoundPage />} />
          </Switch>
        </main>
        <Sidebar htmlCss={161}
        nativJs={199}
        reactJs={192}
        typeScript={88}
        otherTopicsIt={88}
        totalProgress={728}
        elapsedTime={177}
        dayOfStudy={'дней'}
        updateDate={'29.04.2021'} />
      </div>
      <Footer />
    </div>
  );
};


export const MakenaApp: FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
};
