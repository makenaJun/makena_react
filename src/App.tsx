import React from 'react';
import styles from './App.module.scss'
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className={styles.wrapperApp}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
