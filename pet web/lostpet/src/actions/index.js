import pets from '../APIS/pets';
export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createAd = formValues => async (dispatch, getState) => {const 
  { userId } = getState().auth;
 const response = await pets.post("/pets",{...formValues, userId});
 
};
export const fetchAds = () => async dispatch => {
  const response = await pets.get('/pets');

  dispatch({ type: "FETCH_ADS", payload: response.data });
};

export const fetchAd = id => async dispatch => {
  const response = await pets.get(`/pets/${id}`);

  dispatch({ type: "FETCH_AD", payload: response.data });
};
