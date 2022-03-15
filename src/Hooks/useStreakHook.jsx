import React from 'react'

function useStreakHook() {
  const [counter, setCounter] = React.useState(0);
  return [counter, setCounter];
}

export default useStreakHook