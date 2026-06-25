const Filter = ({ onSearch }) => {
    return (
        <div>
            filter shown with:{' '}
            <input onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}

export default Filter
