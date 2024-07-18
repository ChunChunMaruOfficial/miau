import { useEffect, useState } from 'react'
import Card from '../card/card.jsx'

import style from './art.module.scss'
import axios from 'axios'; //ну да

export default function Art() {
    const [countarray, setcountarray] = useState([])
    const [isLoaded, setisLoaded] = useState(false)
    useEffect(() => {
        axios.get(`https://65e621a2d7f0758a76e82b86.mockapi.io/arts`)
            .then((res) => {
                setcountarray(res.data)
                setisLoaded(true)
            },)
    }, [])
console.log(countarray);
    return (
        <>
 <p className={style.title}>drielk1kl</p>
 <a href='https://t.me/drielk1kl' className={style.link}>диво дивное 😈</a>
        <div className={style.parent}>
           {isLoaded && countarray.map((v, i) => (<Card obj={v} />))} 
        </div>

        </>
    )
}