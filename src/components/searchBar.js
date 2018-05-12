import React from 'react';

class searchBar extends React.Component
{
  constructor(props)
  {
    super(props);
    //creating our state
    this.state = {update:''};
  }

  render()
  {
    return (
      <div className="search-bar">
        Search: <input 
        value = {this.state.update}
        onChange = {event =>this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(x)
  {
    this.setState({update:x});
    this.props.onSearchUpdate(x);
  }
}

export default searchBar;