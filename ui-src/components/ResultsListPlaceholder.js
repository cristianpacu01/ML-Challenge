import placeholderStyles from '../styles/ResultsListPlaceholder.module.scss';
import resultsStyles from '../styles/ResultsList.module.scss';
import itemStyles from '../styles/ResultsListItem.module.scss';

const ResultsListPlaceholder = () => (
  <div className={resultsStyles['results']}>
    <section className={resultsStyles['results--results-list']}>
      <div className={itemStyles['list-item']}>
        <div className={[
          placeholderStyles['results-list-placeholder--list-item-picture'],
          placeholderStyles['results-list-placeholder--block']
        ].join(' ')} />
        <div className={itemStyles['list-item--content']}>
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-price'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__long'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__short'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
        </div>
      </div>
      <div className={itemStyles['list-item']}>
        <div className={[
          placeholderStyles['results-list-placeholder--list-item-picture'],
          placeholderStyles['results-list-placeholder--block']
        ].join(' ')} />
        <div className={itemStyles['list-item--content']}>
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-price'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__long'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__medium'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
        </div>
      </div>
      <div className={itemStyles['list-item']}>
        <div className={[
          placeholderStyles['results-list-placeholder--list-item-picture'],
          placeholderStyles['results-list-placeholder--block']
        ].join(' ')} />
        <div className={itemStyles['list-item--content']}>
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-price'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__short'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__medium'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
        </div>
      </div>
      <div className={itemStyles['list-item']}>
        <div className={[
          placeholderStyles['results-list-placeholder--list-item-picture'],
          placeholderStyles['results-list-placeholder--block']
        ].join(' ')} />
        <div className={itemStyles['list-item--content']}>
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-price'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__short'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
          <div className={[
            placeholderStyles['results-list-placeholder--list-item-description'],
            placeholderStyles['results-list-placeholder--list-item-description__long'],
            placeholderStyles['results-list-placeholder--block']
          ].join(' ')} />
        </div>
      </div>
      <div className='shimmer' />
    </section>
  </div>
);

export default ResultsListPlaceholder;
