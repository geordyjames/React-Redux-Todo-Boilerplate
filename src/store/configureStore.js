import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import todoReducer from '../reducers/todo';

const composeEnhancers =
	process.env.NODE_ENV != 'production'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			todo: todoReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
