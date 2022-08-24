import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state ={
            newItem: "",
            list: []
        };
    }
    

    updateInput(key , value) {
        this.setState({ [key] : value});
    }

    addItem() {
        const newItem = {
            id : 1+ Math.random(),
            value : this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem: ""
        });
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList});
    }

    render() {
        return (
            <div className="list2">

                <h1 className="list2-header">List of shopping items...</h1>



                <div className="list2-items">
                    
                    <p className="list2-para">Add an Item...</p>

                    <input type={"text"} placeholder="Enter item" value={this.state.newItem} onChange={e => this.updateInput("newItem" , e.target.value)} className="list2-input" />

                    <button onClick={()=> this.addItem()} disabled={!this.state.newItem.length} className="list2-button"> + </button>

                    <br/>
                    <br/>

                    <ul className="list2-list">
                        {this.state.list.map(item =>{
                            return (
                                <li key={item.id}>
                                    {item.value}
                                    <button className="list2-button" onClick={() => this.deleteItem(item.id)}>
                                        x
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        )
    }

}

export default List;