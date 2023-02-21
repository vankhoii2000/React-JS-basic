import React from "react";

class ShowToDo extends React.Component {


    render() {

        let { listTodos } = this.props;

        return (
            < div className="list-todo-show" >
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item, index) => {
                        return (
                            <div className="todo-content" key={item.id}>
                                <span>{index + 1}. {item.title}</span>
                                <button className="btn-edit">Edit</button>&nbsp;
                                <button className="btn-delete">Delete</button>
                            </div>
                        )
                    })

                }
            </div>
        )

    }


}

export default ShowToDo;