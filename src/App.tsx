import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PostsPage } from './Pages/PostsPage/PostsPage';
import { HomePage } from './Pages/HomePage/HomePage';
import store from './redux/store';
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
            <Route path={'/blog'} render={() => <PostsPage page={'BLOG'} />} />
            <Route path={'/materials'} render={() => <PostsPage page={'MATERIALS'} />} />
            <Route path={'*'} render={() => <NotFoundPage />} />
          </Switch>
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}


export const MakenaApp: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
};
