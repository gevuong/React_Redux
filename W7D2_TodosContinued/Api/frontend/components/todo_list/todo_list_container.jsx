// import react from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import {receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);