import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import Header  from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import './styles/styles.css';
import JSON from './db.json';

// const App = () => {
//     return <React.Fragment>
//         <Header/>
//         </React.Fragment>
//     //return React.createElement('h1',{className:'hello'},'Hello World',React.createElement('div',{className:'div1'}))
// }

class App extends Component{
    constructor(){
        super()
        this.state = {
            news:JSON,
            footerText : 'I am main footer',
            filtered:[]
        }
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;

        })
        this.setState({
            filtered
        })
    }

    render(){
        //console.log(this.state.news);
        const state = this.state;
        return(
            <>
            <Header keywords = {this.getKeywords}/>
            <NewsList news = {this.state.filtered.length === 0 ? this.state.news:this.state.filtered}>
                <br/>
                <h1>I am News</h1>
                </NewsList>
            <Footer footerText={state.footerText}/>
            </>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))