import style from './card.module.scss'
import Modal from 'react-modal';
import { useEffect, useState } from 'react'

export default function Card({ obj }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className={style.wrapper}>
            <img src={obj.imgUrl} alt="mig" onClick={() => setModalIsOpen(true)} />
            <div>
                <p>{obj.text}</p>
                <br />
                <p>{obj.date + ' ' + obj.year}</p>
            </div>
            <Modal isOpen={modalIsOpen} className={style.modd} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(000, 000, 000, 0.7)'
                    },
                    content: {
                        backgroundColor: "rgba(0,0,0,0)",
                        color: "#000",
                        width: "50%",
                        position: 'absolute',
                        top: '15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        right: '15px',
                        bottom: '5px',
                        border: '1px solid #000',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '8px',
                        padding: '0px'

                    }
                }}
            >
                <div >
                    <img src={obj.imgUrl} />
                </div>

            </Modal>
        </div>
    )
}