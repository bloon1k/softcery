import React, { MouseEventHandler } from 'react'
import { useTypedSelector } from '../../../app/typedHooks'
import { rock } from '../../../shared/index.ts'

interface IRockProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Rock: React.FC<IRockProps> = ({ onClick }) => {
    const currentChoice = useTypedSelector((state) => state.player.currentChoice)

    let styles = {}
    if (currentChoice === 'rock') {
        styles = { borderColor: '#cc2222' }
    }

    return (
        <button className={'element'} onClick={onClick}>
            <img src={rock} alt="rock" className={'element__image'} style={styles} />
        </button>
    )
}

export { Rock }
