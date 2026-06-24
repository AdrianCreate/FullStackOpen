import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + bad + neutral
    const average = (good - bad) / all
    const positive = (good * 100) / all
    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    return (
        <div>
            <h3>give feedback</h3>
            <div>
                <Button onClick={handleGoodClick} text="good" />
                <Button onClick={handleNeutralClick} text="neutral" />
                <Button onClick={handleBadClick} text="bad" />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
