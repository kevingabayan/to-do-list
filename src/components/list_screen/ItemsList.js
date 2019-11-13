import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { firestoreConnect } from 'react-redux-firebase';

class ItemsList extends React.Component {
    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        return (
            <div className="todo-lists section">
                <div className="card light-green z-depth 0">
                    <div className = "row">
                        <div class = "col s4">
                            <div className="card-content grey-text text-darken-3">
                            <h4>Task</h4>
                            </div>
                        </div>
                        <div class = "col s4">
                            <div className="card-content grey-text text-darken-3">
                            <h4>Due Date </h4>
                            </div>
                        </div>
                        <div class = "col s4">
                            <div className="card-content grey-text text-darken-3">
                            <h4>Status</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {items && items.map(function(item) {
                    item.id = item.key;
                    return (
                        <ItemCard todoList={todoList} item={item} />
                    );})
                }
                <div className="card light-green z-depth 0">
                    <h4 className = "center-align">&#43;</h4>
                    <Link to={'/todoList/' + todoList.id + "/" + todoList.key} onClick = {this.handleTop.bind(this, todoList.id)} key={todoList.id}></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
    return {
        todoList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todoLists' },
    ]),
)(ItemsList);