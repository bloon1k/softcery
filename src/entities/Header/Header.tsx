import React from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../app/typedHooks'

const Header: React.FC = () => {
    const userName = useTypedSelector((state) => state.player.name)

    return (
        <header className={'header'}>
            <h2 className={'header__title'}>
                {userName ? 'Hello, ' + userName : 'Rock, Paper, Scissors'}
            </h2>
            <Link to={''} style={{ color: 'white' }}>
                Play
            </Link>
            <Link to={'/Login'} style={{ color: 'white' }}>
                Change name
            </Link>
        </header>
    )
}

export { Header }
