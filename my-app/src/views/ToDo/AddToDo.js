import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        title: ''
    }

    handldeOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickAdd = (event) => {
        event.preventDefault()
        if (!this.state.title) {
            toast.error("Empty !")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ''

        })
        toast.success("Successfully!")

    }

    render() {

        let { title } = this.state;

        return (
            <div className="list-todo-input">
                <input type="text" value={title}
                    onChange={(event) => this.handldeOnChangeTitle(event)}
                />
                <button className="btn-add"
                    onClick={(event) => this.handleOnClickAdd(event)}
                >Add</button>
            </div>)
    }




}

export default AddToDo;