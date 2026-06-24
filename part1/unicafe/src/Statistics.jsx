import StatisticsLine from './StatisticsLine'

const Statistics = ({ good, neutral, bad }) => {
    const all = good + bad + neutral
    const average = (good - bad) / all
    const positive = (good * 100) / all
    if (all !== 0) {
        return (
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={all} />
                    <StatisticsLine text="average" value={average} />
                    <StatisticsLine text="positive" value={positive} />
                </tbody>
            </table>
        )
    }
    return <p>No feedback given</p>
}

export default Statistics
