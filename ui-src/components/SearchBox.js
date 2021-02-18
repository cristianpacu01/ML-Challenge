import searchBoxStyles from '../styles/SearchBox.module.scss';

const SearchBox = () => {
  return (
      <div className={searchBoxStyles['search-box']}>
        <form action='/items' method='GET'>
          <input
            className={searchBoxStyles['search-box--input']}
            aria-label='Ingresa lo que quieras encontrar'
            placeholder='Nunca dejes de buscar'
            maxLength={120}
            name='key-words'
            required />
          <button
            className={searchBoxStyles['search-box--submit-btn']}
            type='submit'>
              <img
                className={searchBoxStyles['search-box--search-icon']}
                alt='Buscar'
                src={'/search.png'} />
          </button>
        </form>
      </div>
  )
}

export default SearchBox;
