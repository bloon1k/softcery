import React, { MouseEventHandler } from 'react'
import { useTypedSelector } from '../../../app/typedHooks'
import { scissors } from '../../../shared/index.ts'

interface IScissorsProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Scissors: React.FC<IScissorsProps> = ({ onClick }) => {
    const currentChoice = useTypedSelector((state) => state.player.currentChoice)

    let styles = {}
    if (currentChoice === 'scissors') {
        styles = { borderColor: '#cc2222' }
    }

    return (
        <button className={'element'} onClick={onClick}>
            <img src={scissors} alt="scissors" className={'element__image'} style={styles} />
        </button>
    )
}

export { Scissors }
