import style from '../style/Display.module.scss';

export const Display = ({ value }) => {
  return (
    <div className={style.display}>
      {value}
    </div>
  );
};
