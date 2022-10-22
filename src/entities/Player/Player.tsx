import React from 'react'
import { useTypedSelector } from '../../app/typedHooks'

const Player: React.FC = () => {
    const { name, score, status } = useTypedSelector((state) => state.player)

    return (
        <div className={'player'}>
            <p className="player__name">You: {name}</p>
            <p className="player__score">Score: {score}</p>
            <p className="player__status">Status: {status}</p>
        </div>
    )
}

export { Player }
