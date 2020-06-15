import React from 'react'
const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    state = {
        style: {
            fontFamily: 'Times New Roman',
            height: '100px',
            width: '100px',
            backgroundColor:  randomHexColor()
        }
    }

   componentDidMount(){
      this.timer = setInterval(() => this.tick(),1000)
        //     this.setState({
        //         style: {
        //             ...this.state.style,
        //             backgroundColor: randomHexColor()
        //         }
        //     })
        // }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        // setInterval(() => {
        //     this.setState({
        //         style: {
        //             ...this.state.style,
        //             backgroundColor: randomHexColor()
        //         }
        //     })
        // }, 2000)
    }

    tick(){
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: randomHexColor()
            }
        })
    }
    

    handleClick = (e) => {
        // console.log(e.target)
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: randomHexColor()
            }
        })
    }

    //   this.setState(currentState => {
    //     return {
    //         style: {        
    //             ...currentState.style,
    //             backgroundColor: randomHexColor()
    //         }
    //     }
    // })

    mouseEnter = (e) => {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: 'green'
            }
        })
    }


    contextMenu = (e) => {
        e.preventDefault()
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: 'black'
            }
        })
    }

    doubleClick = (e) => {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: 'white'
            }
        })
    }

    dragEnter = (e) => {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: 'yellow'
            }
        })
    }



    render() {
        return (
            <div style={this.state.style} onClick={this.handleClick} onMouseEnter={this.mouseEnter} onContextMenu={this.contextMenu} onDoubleClick={this.doubleClick} onDragEnter={this.dragEnter}></div>
        )
    }
}


export default Pixel