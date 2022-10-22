import {
    changePlayerScore,
    changePlayerStatus,
    changeOpponentName,
    changeOpponentScore,
    changeOpponentStatus,
    changeChoice,
    changeShowModal,
    changeMessage,
} from '../../app/redux/index.ts'
import { useTypedDispatch, useTypedSelector } from '../../app/typedHooks'

type Choice = { payload: 'rock' | 'paper' | 'scissors' }

interface IGameFinishedProps {
    results: [{ username: string; choice: Choice }, { username: string; choice: Choice }]
}

const useGameLogic = () => {
    const dispatch = useTypedDispatch()
    const userName = localStorage.getItem('userName')
    const playerScore: number = useTypedSelector((state) => state.player.score)
    const opponentScore: number = useTypedSelector((state) => state.opponent.score)

    function handleDisconnect() {
        dispatch(changeOpponentStatus('disconnected'))
        dispatch(changePlayerScore(0))
        dispatch(changeOpponentScore(0))
    }

    function handlePlayersReceived(data: string[]) {
        dispatch(changeOpponentName(data[0] === userName ? data[1] : data[0]))
        dispatch(changeOpponentStatus(data.length < 2 ? 'disconnected' : 'connected'))
    }

    function handleOpponentChose() {
        dispatch(changeOpponentStatus('made choice'))
    }

    function handleGameFinished(data: IGameFinishedProps) {
        dispatch(changePlayerStatus('connected'))
        dispatch(changeOpponentStatus('connected'))
        dispatch(changeChoice(null))
        dispatch(changeShowModal(true))
        dispatch(changeMessage('hello'))
        defineWinner(data)
    }

    function defineWinner(data: IGameFinishedProps) {
        const player =
            data.results[0].username === userName
                ? data.results[0].username
                : data.results[1].username
        const opponent =
            data.results[0].username === userName
                ? data.results[1].username
                : data.results[0].username
        const playerPick =
            data.results[0].username === userName
                ? data.results[0].choice.payload
                : data.results[1].choice.payload
        const opponentPick =
            data.results[0].username === userName
                ? data.results[1].choice.payload
                : data.results[0].choice.payload

        if (playerPick === opponentPick) {
            dispatch(changeMessage(`Draw, score not changed. (${playerPick} VS ${opponentPick})`))
        } else {
            switch (playerPick) {
                case 'rock': {
                    if (opponentPick === 'scissors') {
                        dispatch(changePlayerScore(playerScore + 1))
                        dispatch(
                            changeMessage(`${player} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    } else {
                        dispatch(changeOpponentScore(opponentScore + 1))
                        dispatch(
                            changeMessage(`${opponent} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    }
                    break
                }
                case 'paper': {
                    if (opponentPick === 'rock') {
                        dispatch(changePlayerScore(playerScore + 1))
                        dispatch(
                            changeMessage(`${player} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    } else {
                        dispatch(changeOpponentScore(opponentScore + 1))
                        dispatch(
                            changeMessage(`${opponent} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    }
                    break
                }
                case 'scissors': {
                    if (opponentPick === 'paper') {
                        dispatch(changePlayerScore(playerScore + 1))
                        dispatch(
                            changeMessage(`${player} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    } else {
                        dispatch(changeOpponentScore(opponentScore + 1))
                        dispatch(
                            changeMessage(`${opponent} wins! (${playerPick} VS ${opponentPick})`)
                        )
                    }
                    break
                }
            }
        }
    }

    return { handleDisconnect, handleGameFinished, handleOpponentChose, handlePlayersReceived }
}

export { useGameLogic }
