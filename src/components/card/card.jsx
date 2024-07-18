import style from './card.module.scss'

export default function Card({ obj }) {
    return (
        <div className={style.wrapper}>
            <img src={obj.imgUrl} alt="mig" />
            <div>
                <p>{obj.text}</p>
                <p>{obj.date}</p>
            </div>
        </div>
    )
}