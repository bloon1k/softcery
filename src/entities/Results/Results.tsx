import React from 'react'
import { changeShowModal } from '../../app/redux/index.ts'
import { useTypedDispatch, useTypedSelector } from '../../app/typedHooks'

const Results: React.FC = () => {
    const dispatch = useTypedDispatch()
    const message: string = useTypedSelector((state) => state.results.message)
    const playerScore: number = useTypedSelector((state) => state.player.score)
    const opponentScore: number = useTypedSelector((state) => state.opponent.score)

    function closeModal() {
        dispatch(changeShowModal(false))
    }

    return (
        <section className={'results'}>
            <div className="results__message">
                <p className={'results__title'}>{message}</p>
                <p>
                    Score: you - {playerScore}:{opponentScore} - opponent
                </p>
                <button className={'results__button'} onClick={closeModal}>
                    Try again!
                </button>
            </div>
        </section>
    )
}

export { Results }
