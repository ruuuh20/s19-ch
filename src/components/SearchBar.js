import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
     super(props);
     this.state = {
       input: ""
     };
   }
   handleInputChange = (e) => {
     this.setState({
       input: e.target.value
     }, () => {
       if (this.state.input === "") {
         this.props.handleResults(this.state.input);
       }
     });
   }

   handleClick = (e) => {
     e.preventDefault();
     this.props.handleResults(this.state.input);
   }
   render() {
     return (
       <form className="search-form">
         <input
           value={this.state.input}
           onChange={this.handleInputChange}
           className="search-input"
         />
         <button
           type="submit"
           className="search-button"
           onClick={this.handleClick}
         >
           <i className="fas fa-search fa-flip-horizontal" />
         </button>
         <div>{this.state.input}</div>
       </form>
     );
   }

}

export default SearchBar;
