import React, {Component, Fragment} from 'react'
import './../App.css';
import axios from 'axios'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
          dataList: []
        }
    }
    componentDidMount() {
        this.getCardData()
    }
getCardData =()=>{
 axios.get('https://api.wizcounsel.com/users/product/')
     .then((response)=>{
         const {data} = response
        this.setState({dataList: data})
    })
     .catch(errors => console.log('Not found'))
}
    render() {
        const {dataList} = this.state
        return(
            <div className="container p-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <h1 className="heading-h1 animate__animated animate__fadeInDown text-center">Image Card</h1>
                    </div>

                </div>
                <div className="row mt-5">
                    {dataList.map((dataDetail)=>{
                        const {photo, name} = dataDetail
                        return(
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="img-box">
                                        <img src={photo} className="card-img-top" alt={name}/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet. consectetuer adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}
export default Card