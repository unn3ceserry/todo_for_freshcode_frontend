import classes from './Loader.module.scss'

const Loader = ({text}: {text: string}) => {
  return (
    <div className={classes.wrapper}>
      <svg className={classes.loader} viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={classes.active}
          pathLength="360"
          fill="transparent"
          strokeWidth="32"
          cx="192"
          cy="192"
          r="176"
        ></circle>
        <circle
          className={classes.track}
          pathLength="360"
          fill="transparent"
          strokeWidth="32"
          cx="192"
          cy="192"
          r="176"
        ></circle>
      </svg>
      <p className={classes.text}>{text}</p>
    </div>

  );
};

export default Loader;