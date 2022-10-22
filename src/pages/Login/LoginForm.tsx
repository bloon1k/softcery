import React, { useRef } from 'react'
import { useLogin } from '../../features/index.ts'

const LoginForm: React.FC = () => {
    const nameInputRef = useRef<HTMLInputElement>(null)
    const { login } = useLogin()

    return (
        <section className={'login'}>
            <h3 className={'login__title'}>What is your name?</h3>
            <input
                type="text"
                placeholder={'3+ characters, please'}
                className={'login__input'}
                ref={nameInputRef}
            />
            <button className={'login__button'} onClick={() => login(nameInputRef)}>
                Join game!
            </button>
        </section>
    )
}

export { LoginForm }
