const Total = (props) => {
    console.log(props)
    let number = 0
    props.parts.forEach((part) => {
        number += part.exercises
    })
    return <p>Number of exercises {number}</p>
}

export default Total
