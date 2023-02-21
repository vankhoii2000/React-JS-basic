import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import ShowToDo from "./ShowToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listTodos: [
            { id: '1', title: 'Speaking' },
            { id: '2', title: 'Writing' },
            { id: '3', title: 'Learning' },
        ]
    }

    addNewToDo = (todo) => {
        // let currentToDo = this.state.listTodos;
        // currentToDo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo]
            // listTodos: currentToDo
        })

    }

    render() {
        let { listTodos } = this.state;

        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewToDo={this.addNewToDo}
                />

                <ShowToDo
                    listTodos={this.state.listTodos}
                />


            </div>
        )
    }
}


export default ListToDo;