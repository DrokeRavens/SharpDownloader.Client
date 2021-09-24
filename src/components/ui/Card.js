import classes from './Card.module.css'

function Card (props){
    return (<div className={classes.card}>
        <div className={classes.card__content}>
            <h4>{props.title}</h4>
            {props.children}
        </div>
    </div>)
}


export default Card;