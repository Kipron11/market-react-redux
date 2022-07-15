import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.header__box}>
          <div className={styles.header__logo}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={() => navigate('/')}>LOGO</a>
          </div>
          <div className={styles.header__options}>
            <div>
              <select name="languages" id="languages">
                <option value="eng">
                  ENG
                </option>
                <option value="lv">
                  LV
                </option>
              </select>

              <button className={styles.header__button} onClick={() => navigate('/cart')}>
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
