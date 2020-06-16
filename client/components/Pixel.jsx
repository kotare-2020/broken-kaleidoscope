import React from 'react'


const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontFamily: 'monospace',
            height: '20px',
            width: '20px',
            backgroundColor: randomHexColor()
        }
    }
    // componentWillMount() {
    //     setInterval(() => {
    //         this.setState = setInterval(randomHexColor, 3000)}
    //     )}

    componentDidMount = function() {
        var intervalId = setInterval(this.clickHandler, 3000);
        this.setState({intervalId: intervalId});
     }

    clickHandler = () => {
        this.setState({
            backgroundColor: randomHexColor()
        })
    }

    mouseEnter = () => {
        this.setState({
            backgroundColor: 'green'
        })
    }

    dragEnter = () => {
        this.setState({
            backgroundColor: 'yellow'
        })
    }

    render() {
        return (
            <div style={this.state} draggable="true" onClick={this.clickHandler} onDragEnter={() => {
                setTimeout(this.dragEnter, 500)
            }} onMouseEnter={this.mouseEnter}>
            </div>
        )
    }

}

export default Pixel