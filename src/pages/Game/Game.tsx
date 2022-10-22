import React from 'react'
import { socket } from '../../app/socket/index.ts'
import { useTypedSelector } from '../../app/typedHooks'
import { Player, Opponent, Results, Rock, Paper, Scissors } from '../../entities/index.ts'
import { useMakeChoice, useGameLogic } from '../../features/index.ts'

const Game: React.FC = () => {
    const isShowModal: boolean = useTypedSelector((state) => state.results.showModal)
    const { handleDisconnect, handleGameFinished, handleOpponentChose, handlePlayersReceived } =
        useGameLogic()
    const { makeChoice } = useMakeChoice()

    socket.on('disconnected', handleDisconnect)
    socket.emit('get_players')
    socket.on('players_received', handlePlayersReceived)
    socket.on('opponent_made_choice', handleOpponentChose)
    socket.on('game_finished', handleGameFinished)

    return (
        <section className={'game'}>
            {isShowModal && <Results />}
            <div className="game__stats">
                <Player />
                <Opponent />
            </div>
            <div className="game__buttons">
                <Rock onClick={() => makeChoice(socket, 'rock')} />
                <Paper onClick={() => makeChoice(socket, 'paper')} />
                <Scissors onClick={() => makeChoice(socket, 'scissors')} />
            </div>
        </section>
    )
}

export { Game }
