import React,{Component} from "react";

// const getYear = () =>{
//     const newDate = new Date;
//     return newDate.getFullYear()
// }

// const Header = () =>{
//     return <div>
//         Header {getYear()}
//     </div>
// }
// let styles = {
//     header:{
//         background:'#03a9f4'
//     },
//     logo:{
//         color:'#fff',
//         fontFamily:'Anton',
//         textAlign:'center'
//     }
// }
class Header extends Component{

    state = {
        title:'This is title',
        keywords:'',
        count:0,
        active:false
    }
    handleClick = () => {
        console.log('I was clicked--')
    }
    onChange(event){

        const value = event.target.value === ''? false : true;
        console.log('I was clicked--',value)
        this.setState({
            active : value,
            keywords: event.target.value
        })
    }
    addOne(){
        this.setState((state,props)=>({
            count: state.count + 1
        }))
    }

    render(){
        //console.log(this.state);
        //console.log("this is props"+this.props.keywords);
        return<header style={{background:`${this.state.active ?'red':'blue'}`}}>
            <div className="logo"
           onClick={ this.handleClick}
            >Logo</div>
            <input
            onChange={this.props.keywords}
            ></input>
            <div>{this.state.title}</div>
            <div>{this.state.keywords}</div>
            <br/>
            <div>{this.state.count}</div>
            <button onClick={()=>this.addOne()}>Add one</button>
        </header>
    }
}

export default Header;