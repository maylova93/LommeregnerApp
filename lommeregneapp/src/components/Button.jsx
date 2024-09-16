import buttonStyles from '../style/Button.module.scss';

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={buttonStyles.button}>
      {label}
    </button>
  );
};
