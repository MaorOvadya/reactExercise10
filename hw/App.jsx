import React from 'react'
import { Cat} from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import { updateCatMood, MOODS, updateCatColor,updateCatSizeDic,updateCatSizeInc} from './mood'
// import { color } from 'framer-motion'

function App() {
  const currentMood = useSelector((state) => state.mood)
  const currentColor = useSelector((state) => state.color)
  const currentSize = useSelector((state) => state.size)
  const dispatch = useDispatch()

  // UPDATE MOOD
  const handleMoodUpdate = (event) => {
    const mood = event.target.dataset.type
    dispatch(updateCatMood(mood))
  }
  // UPDATE COLOR
  const handleColorUpdate = (event) => {
    const color = event.target.dataset.type
    dispatch(updateCatColor(color))
  }


  return (
    <div className='App'>
      <Cat size={currentSize} mood={currentMood} color={currentColor} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={handleMoodUpdate}>
            {mood}
          </button>
          ))}
          <div>
          <button onClick={() => dispatch(updateCatSizeInc())}>+</button>
          <button onClick={() => dispatch(updateCatSizeDic())}>-</button>
          </div>
          <div>

          <input onChange={handleColorUpdate} type="color"></input>
          </div>
      </section>
    </div>
  )
}

export default App