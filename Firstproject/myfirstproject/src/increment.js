import React,{Component} from "react";
class Count extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
        <div>
              <h1>count-{this.state.count}</h1>
              <button  onClick={()=>this.increment()}>increment</button>                                                                                                                                                                                
        </div>
        );
    }
}
export default Count;