import Meta from '../components/Meta';
import ResultsItem from '../components/ResultsItem';

import resultsStyles from '../styles/ResultsList.module.scss';

const ResultsList = ({ items, keywords }) => {
  const getAmount = () => `${items.length} resultado${!items.length || items.length > 1 ? 's' : ''}`;
  const getTitle = () => (keywords && items.length ? `${keywords} | ` : '') + 'Mercado Libre';

  return (
    <>
      <Meta title={getTitle()} />
      <div className={resultsStyles['results']}>
        <div className={resultsStyles['results--heading']}>
          <h1 className={resultsStyles['results--heading-title']}>{ keywords }</h1>
          <p className={resultsStyles['results--heading-amount']}>{ getAmount() }</p>
        </div>
        <section className={resultsStyles['results--results-list']}>
          { items.map(item => <ResultsItem item={item} key={item._id} />) }
        </section>
      </div>
    </>
  )
};

export default ResultsList;
