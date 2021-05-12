export const setGameDuration = (duration) => {
    return {
        type: 'SET_GAME_DURATION',
        payload: {
            duration: duration
        }
    }
};