import buttonStyles from '../styles/Button.module.scss';

const Button = ({
  center,
  label,
  onClickHandler,
  size,
  type,
}) => {
  return (
    <button
      className={[
        buttonStyles.button,
        buttonStyles[type],
        buttonStyles[size],
        center ? buttonStyles['centered'] : '',
      ].join(' ')}
      onClick={onClickHandler}
      >{ label }</button>
  );
};

Button.defaultProps = {
  center: false,
  label: 'Continuar',
  onClickHandler: () => {},
  size: 'standard',
  type: 'main-btn'
};

export default Button;


