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
    render(){
        return<header>
            <div className="logo">Logo</div>
            <input></input>
        </header>
    }
}

export default Header;