import React from 'react';

class SearchField extends React.Component{

    state = {keyword: ''}

    onInputChange=(event)=>{
        this.setState({
            keyword: event.target.value
        });
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        //TODO
        // Make sure we call callback from parent compoennt
        this.props.onFormSubmit(this.state.keyword)
    }


    render(){
        return(
            <div className="search-field ui segment">
                <form onSubmit={this.onFormSubmit}action="" className="ui form">
                    <div className="div field">
                        <label htmlFor="">Search field</label>
                        <input 
                            type="text" 
                            value={this.state.keyword}
                            onChange={this.onInputChange}

                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchField; 