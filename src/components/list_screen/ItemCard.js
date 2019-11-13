import React from 'react';
import { Link } from 'react-router-dom';
class ItemCard extends React.Component {
    render() {
        const { item } = this.props;  
        const {todoList} = this.props;
        if(!item.completed) {
            return (
            <Link to = {"/todoList/" + todoList.id + "/" + item.key}>
            <div className="card z-depth-1 todo-list-link pink-lighten-3">
            <div className = "row">
                <div class = "col s4">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{item.description}</span>
                        <span className = "card-text">Assigned to: {item.assigned_to}</span>
                    </div>
                </div>
                <div class = "col s4">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Due Date: {item.due_date}</span>
                    </div>
                </div>
                <div class = "col s4">
                    <div className="card-content red-text text-darken-3">
                        <span className="card-title">Pending</span>
                    </div>
                </div>
            </div>
            </div>
            </Link>
            );
        }
        else {
        return (
            <Link to = {"/todoList/" + todoList.id + "/" + item.key}>
            <div className="card z-depth-1 todo-list-link pink-lighten-3">
          
                <div className = "row">
                    <div class = "col s4">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{item.description}</span>
                            <span className="card-text">Assigned to: {item.assigned_to}</span>
                        </div>
                    </div>
                    <div class = "col s4">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">Due Date: {item.due_date}</span>
                        </div>
                    </div>
                    <div class = "col s4">
                        <div className="card-content green-text text-darken-3">
                            <span className="card-title">Completed</span>
                        </div>
                    </div>
                </div>
 
            </div>
            </Link>
        );
        }
    }
}
export default ItemCard;