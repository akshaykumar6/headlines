import { combineReducers } from 'redux'

import {
	FETCH_HEADLINES_REQUEST,
	FETCH_HEADLINES_SUCCESS,
	FETCH_HEADLINES_ERROR,
	HEADLINES_COUNTRY,
	HEADLINES_CATEGORY
} from '../actions'


const settings = (state = {
	language: 'en',
	country: 'us',
	view: 'grid'
}, action) => {
	return state;
}

const headlines = (state = {
	articles: [],
	country: 'in',
	category: 'general',
	isFetching: false,
	lastUpdatedAt: ''
}, action) => {

	switch(action.type){
		case FETCH_HEADLINES_REQUEST:
			return {
				...state,
				isFetching: true
			} 
		case FETCH_HEADLINES_SUCCESS:
			return {
				...state,
				isFetching: false,
				articles: action.data.articles
			} 
		case FETCH_HEADLINES_ERROR:
			return {
				isFetching: false
			} 
		case HEADLINES_COUNTRY:
			return {
				...state,
				country: action.country
			} 
		case HEADLINES_CATEGORY:
			return {
				...state,
				category: action.category
			} 
		default:
			return state;
	}
}

const search = (state = {
	articles: [],
	query: '',
	sources: [],
	domains: [],
	from: '',
	to: '',
	language: '',
	sortBy: '',
	isFetching: false,
	lastUpdatedAt: ''
}, action) => {
	return state;
}

const activeTab = (state = 'headlines', action) => {
	return state;
}


const rootReducer = combineReducers({
	settings,
	headlines,
	search,
	activeTab
})

export default rootReducer