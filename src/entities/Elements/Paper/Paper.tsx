import React, { MouseEventHandler } from 'react'
import { useTypedSelector } from '../../../app/typedHooks'
import { paper } from '../../../shared/index.ts'

interface IPaperProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Paper: React.FC<IPaperProps> = ({ onClick }) => {
    const currentChoice = useTypedSelector((state) => state.player.currentChoice)

    let styles = {}
    if (currentChoice === 'paper') {
        styles = { borderColor: '#cc2222' }
    }

    return (
        <button className={'element'} onClick={onClick}>
            <img src={paper} alt="paper" className={'element__image'} style={styles} />
        </button>
    )
}

export { Paper }
