import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {changeMail, changeName, changePassword, changePasswordConfirmation} from "./actionCreators";
import {signUp} from "./api";

type ContextType = {
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePasswordConfirmation: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (name: string, mail: string, password: string) => void;
    state: State;
};

export const SignUpContext = React.createContext<ContextType>({} as ContextType);

export const SignUpProvider: React.FC = ({children})=>{
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeName(e.target.value));
  };
  const onChangeMail = (e : React.ChangeEvent<HTMLInputElement>) =>{
      dispatch(changeMail(e.target.value));
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
      dispatch(changePassword(e.target.value));
  };
  const onChangePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>) =>{
      dispatch(changePasswordConfirmation(e.target.value))
  };
   const onSubmit = async (name: string, mail: string, password: string) =>{
       const func = signUp(name, mail, password);
       await func(dispatch);
   };

   return (
       <SignUpContext.Provider value={{
        onChangeName,
        onChangeMail,
        onChangePassword,
           onChangePasswordConfirmation,
           onSubmit,
           state
       }}>
           {children}
       </SignUpContext.Provider>
   )
};



