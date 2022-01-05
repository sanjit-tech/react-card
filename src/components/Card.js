import React, {Component, Fragment} from 'react'
import './../App.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className="container p-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <h1 className="heading-h1 animate__animated animate__fadeInDown text-center">Image Card</h1>
                    </div>

                </div>
            </div>
        )
    }
}
export default Card