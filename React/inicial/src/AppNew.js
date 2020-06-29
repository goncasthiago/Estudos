import React, {Component} from 'react'

class AppNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }
            alterarCopo = () => {
                this.setState({
                    copo: 'refrigerante'
                })
            }


   render(){
       const {clock, copo} = this.state
       return (
           <div>
               <h2>{clock}</h2>
               <h2>{copo}</h2>
               <button onClick={() => this.alterarCopo()}>Mudar a bebida</button>
           </div>

       )
   }
}

export default AppNew;