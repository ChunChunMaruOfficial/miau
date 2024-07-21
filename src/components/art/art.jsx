import { useEffect, useState } from 'react'
import Card from '../card/card.jsx'

import style from './art.module.scss'
import axios from 'axios'; //ну да

import Skeleton from '../skeleton.jsx';

export default function Art() {
    const [countarray, setcountarray] = useState([])
    const [isLoaded, setisLoaded] = useState(false)
    const [year, setyear] = useState(0)
    useEffect(() => {
        axios.get(`https://65e621a2d7f0758a76e82b86.mockapi.io/arts`)
            .then((res) => {
                setcountarray(res.data)
                setisLoaded(true)
            },)
    }, [])

    return (
        <>
            <div className={style.date}>
                <p className={year === 0 ? style.active : ''} onClick={() => setyear(0)}>All</p>
                <p className={year === 2023 ? style.active : ''} onClick={() => setyear(2023)}>2023</p>
                <p className={year === 2024 ? style.active : ''} onClick={() => setyear(2024)}>2024</p>
            </div>
            <p className={style.count}>всего {countarray.length} рисунков</p>
            <p className={style.title}>drielk1kl</p>
            <a href='https://t.me/drielk1kl' className={style.link}>диво дивное 😈</a>
            <div className={style.parent}>
                {isLoaded ? countarray.map((v, i) => year === 0 ? (<Card obj={v} key={i} />) : v.year == year ? (<Card obj={v} key={i} />) : '') : [...new Array(67)].map(() => (<Skeleton />))}
            </div>
        </>
    )
}