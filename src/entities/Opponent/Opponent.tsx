import React from 'react'
import { useTypedSelector } from '../../app/typedHooks'

const Opponent: React.FC = () => {
    const { name, score, status } = useTypedSelector((state) => state.opponent)

    return (
        <div className={'opponent'}>
            <p className="opponent__name">Opponent: {name}</p>
            <p className="opponent__score">Score: {score}</p>
            <p className="opponent__status">Status: {status}</p>
        </div>
    )
}

export { Opponent }
