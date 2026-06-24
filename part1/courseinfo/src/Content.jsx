import Part from './Part'

const Content = (props) => {
    console.log(props)
    return props.parts.map((part) => <Part part={part} />)
}

export default Content
