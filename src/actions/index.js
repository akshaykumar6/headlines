import axios from 'axios';

/*
 * action types
 */ 
export const FETCH_HEADLINES_REQUEST = 'FETCH_HEADLINES_REQUEST'
export const FETCH_HEADLINES_SUCCESS = 'FETCH_HEADLINES_SUCCESS'
export const FETCH_HEADLINES_ERROR = 'FETCH_HEADLINES_ERROR'
export const HEADLINES_COUNTRY = 'HEADLINES_COUNTRY'
export const HEADLINES_CATEGORY = 'HEADLINES_CATEGORY'
 
/*
 * other constants
 */
 

 
/*
 * action creators
 */
 
export const fetchingHeadlines = () => ({
  type: FETCH_HEADLINES_REQUEST
})

export const fetchHeadlinesSuccess = (data) => ({
  type: FETCH_HEADLINES_SUCCESS, 
  data
})

export const fetchHeadlinesError = (data) => ({
  type: FETCH_HEADLINES_ERROR, 
  data
})

export const setCountryForHeadlines = (country) => ({
  type: HEADLINES_COUNTRY, 
  country
})

export const setCategoryForHeadlines = (category) => ({
  type: HEADLINES_CATEGORY, 
  category
})

export const fetchHeadlines = () => (dispatch, getState) => {
  dispatch(fetchingHeadlines())
  let state = getState();
  console.log("::::::::: fetchingHeadlines ::::::::::::::::")
  console.log(state);

  let country = state.headlines.country;
  let category = state.headlines.category;
  
	if (!country) {
		country='in'
	}


  API_BASE_URL = "https://newsapi.org/v2"
  API_KEY = "a6a21e07f9ef4e5fb89b5f5eab675095"
  apiURL = `${API_BASE_URL}/top-headlines?pageSize=100&country=${country}`

  if (category) {
  	apiURL+=`&category=${category}`
  }

  apiURL+=`&apiKey=${API_KEY}`

  axios.get(apiURL)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
    dispatch(fetchHeadlinesSuccess(response.data))
  })
  .catch(function(response){
  	console.log(response.data);
  	dispatch(fetchHeadlinesError(response.data))
  }); 
}