import { Socket } from 'socket.io-client'
import { changeChoice, changePlayerStatus } from '../../app/redux/index.ts'
import { useTypedDispatch } from '../../app/typedHooks'

const useMakeChoice = () => {
    const dispatch = useTypedDispatch()

    function makeChoice(socket: Socket, element: string) {
        socket.emit('choose', { payload: element })
        dispatch(changePlayerStatus('made choice'))
        dispatch(changeChoice(element))
    }

    return { makeChoice }
}

export { useMakeChoice }
