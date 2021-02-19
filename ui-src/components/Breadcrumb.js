import breadcrumbStyles from '../styles/Breadcrumb.module.scss';

const Breadcrumb = ({ value }) => (
  <li className={breadcrumbStyles.breadcrumb}>
    <span className={breadcrumbStyles['breadcrumb--arrow']} />
    <p className={breadcrumbStyles['breadcrumb--value']}>{ value }</p>
  </li>
);

Breadcrumb.defaultProps = {
  value: ''
};

export default Breadcrumb;
