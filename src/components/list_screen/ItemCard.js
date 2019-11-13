import React from 'react';

class ItemCard extends React.Component {
    render() {
        const { item } = this.props;  
        if(!item.completed) {
            return (
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
            );
        }
        else {
        return (
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
        );
        }
    }
}
export default ItemCard;