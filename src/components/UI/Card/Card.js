import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.center}>
            <div className={classes.card}>{props.children}</div>
        </div>
    )
};

export default Card;
