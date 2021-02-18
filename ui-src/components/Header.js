import Link from 'next/link'

import SearchBox from './SearchBox';

import headerStyles from '../styles/Header.module.scss';

const Header = () => {
  return (
      <header className={headerStyles.header}>
        <div className={headerStyles['header--content']}>
          <Link href='/'>
            <a className={headerStyles['header--logo']}>
              <img
                alt='Mercado Libre logo'
                src={'/logo.png'} />
            </a>
          </Link>
          <SearchBox />
        </div>
      </header>
  )
}

export default Header;
