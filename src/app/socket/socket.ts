import { io } from 'socket.io-client'

const userName = localStorage.getItem('userName')
export const socket = io('https://front-end-task-softcery-1.herokuapp.com/', {
    query: {
        username: userName || 'user',
    },
})
