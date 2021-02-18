import Breadcrumb from './Breadcrumb';

import navigationStyles from '../styles/BreadcrumbsNavigation.module.scss';

const BreadcrumbsNavigation = ({ items }) => {
  return (
    <ul className={navigationStyles['breadcrumbs-navigation']}>
      { items.map(itemValue => <Breadcrumb value={itemValue} /> ) }
    </ul>
  )
};

export default BreadcrumbsNavigation;
