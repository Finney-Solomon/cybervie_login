import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


export const OPEN_CLOSE_REGISTRATION = 'OPEN_CLOSE_REGISTRATION';
export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SWITCH_TAB = 'SWITCH_TAB';
export const LOAD_CONTENT = 'LOAD_CONTENT';
export const UPDATE_URL = 'UPDATE_URL';
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

export const openCloseRegistration = (payload) => ({
  type: OPEN_CLOSE_REGISTRATION,
  payload: payload
});

export const setUserData = (payload) => ({
  type: SET_USERS_DATA,
  payload: payload
});

export const addNewUserFireBaseCloud = (payload, navigate) => async (dispatch) => {
  const users = collection(db, "users");
  console.log(users, "users users users users", payload)
  try {
    await addDoc(users, payload);
    navigate("/usersPage")
  } catch (error) {
    console.error("Error fetching songs: ", error);
  }
  finally {
  
  }
};

export const getUsersData = () => async (dispatch) => {
  try {
    const users = collection(db, "users");
    const data = await getDocs(users);
    const payload = data.docs.map((doc) => ({ ...doc.data() }));
    dispatch(setUserData(payload))
  }
  catch (error) {
    console.error("Error fetching songs:", error);
  }
};
