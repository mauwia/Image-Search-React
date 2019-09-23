import React from 'react'

class Search extends React.Component{
    state={searchText:''}
    onFormSubmit=event=>{
        event.preventDefault();
       this.props.onSubmit(this.state.searchText)
    }
    render(){
    return <div className="row blue">
    <div className="col offset-s3 s6 card">
      <div className="row">
          <form onSubmit={this.onFormSubmit}>
        <div className="input-field col s12 blue-text">
          <i className="material-icons prefix blue-text">textsms</i>
          <input type="text" value={this.state.searchText} id="autocomplete-input" className="autocomplete" onChange={e=> this.setState({searchText:e.target.value})}/>
          <label htmlFor="autocomplete-input">Search</label>
        <button type='submit' className='btn blue right'>Search</button>

        </div>
        </form>
      </div>
    </div>
  </div>
    }
}
export default Search