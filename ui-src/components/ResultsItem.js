import Link from 'next/link';

import freeShippingIcon from '../assets/images/icons/free-shipping.png';

import itemStyles from '../styles/ResultsListItem.module.scss';

const ResultsItem = ({ item }) => {
  const renderImage = (pictureData) => {
    if (!pictureData) {
      return null;
    }

    const { description, img: imgData } = pictureData;

    if (imgData) {
      const { contentType, data } = imgData;

      return (
        <img
          alt={description}
          src={`data:${contentType};base64, ${data}`} />
      )
    }

    return null;
  };

  const getFormattedPrice = (price) => Intl.NumberFormat({style: 'currency', currency: 'COP'}).format(price);

  const renderPrice = ({ amount, decimals, currency }) => (
    <p>{`$${getFormattedPrice(amount)}${decimals ? `.${decimals}` : '' } ${currency}`}</p>
  );

  return (
    <Link href='/items/[id]' as={`/items/${item._id}`}>
      <a className={itemStyles['list-item']}>
        <div className={itemStyles['list-item--picture']}>
          { renderImage(item.pictures[0]) }
        </div>
        <div className={itemStyles['list-item--content']}>
          <div className={itemStyles['list-item--price']}>
            { renderPrice(item.price) }
            { item.free_shipping && <img src={freeShippingIcon} /> }
          </div>
          <div className={itemStyles['list-item--description']}>
            <h4>{ item.title }</h4>
          </div>
        </div>
      </a>
    </Link>
  )
};

export default ResultsItem;
