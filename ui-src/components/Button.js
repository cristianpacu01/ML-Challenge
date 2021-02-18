import buttonStyles from '../styles/Button.module.scss';

const Button = ({
  center = false,
  label = 'Continuar',
  onClickHandler = () => {},
  size = 'standard',
  type = 'main-btn',
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

export default Button;


