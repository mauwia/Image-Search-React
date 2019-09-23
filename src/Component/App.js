import React from 'react'
import Axios from '../API/unsplash'
import Search from "./Search"
import ImageList from "./ImageList"


class App extends React.Component{
    state={images:[]}
    onSearchSubmit=async term=>{
        const response=await Axios.get('/search/photos',{
            params:{query:term},
        })
        this.setState({images:response.data.results})
        // console.log(this.state.images)
    }
    render(){
        return <div><Search onSubmit={this.onSearchSubmit}/>
            <ImageList Images={this.state.images}/>
        </div>
    }
}
export default App