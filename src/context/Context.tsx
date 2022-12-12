import Router from 'next/router';
import * as React from 'react';

import { APP_ROUTES } from '@/constant/env';

type contextType = {
  user: boolean | null;
  login: () => void;
  logout: () => void;
  onboardOpen: boolean;
  createOrderSlideOver: boolean;
  setOnboardOpenFunction: () => void;
  setOnboardCloseFunction: () => void;
  setCreateOrderSlideOverOpenFunction: () => void;
  setCreateOrderSlideOverCloseFunction: () => void;
};

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: contextType = {
  user: null,
  login: () => {
    // bypass eslint empty function rule.
  },
  logout: () => {
    // bypass eslint empty function rule.
  },
  onboardOpen: false,
  createOrderSlideOver: false,
  setOnboardOpenFunction: () => {
    // bypass eslint empty function rule.
  },
  setOnboardCloseFunction: () => {
    // bypass eslint empty function rule.
  },
  setCreateOrderSlideOverOpenFunction: () => {
    // bypass eslint empty function rule.
  },
  setCreateOrderSlideOverCloseFunction: () => {
    // bypass eslint empty function rule.
  },
};

const Context = React.createContext<contextType>(contextDefaultValues);

export function ContextProvider({ children }: Props) {
  const [user, setUser] = React.useState<boolean>(false);
  const [onboardOpen, setOnboardOpen] = React.useState<boolean>(false);
  const [createOrderSlideOver, setcreateOrderSlideOver] =
    React.useState<boolean>(false);
  const login = async () => {
    try {
      // setIsLoading(true);
      // const response = await axios({
      //   method: 'post',
      //   url: API_ROUTES.SIGN_IN,
      //   data: {
      //     email,
      //     password
      //   }
      // });
      // if (!response?.data?.token) {
      //   console.log('Something went wrong during signing in: ', response);
      //   return;
      // }
      // storeTokenInLocalStorage(response.data.token);
      localStorage.setItem('user', JSON.stringify(user));
      Router.push(APP_ROUTES.DASHBOARD);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Some error occured during signing in: ', err);
    } finally {
      // setUser(true);
      // setIsLoading(false);
    }
  };

  const logout = async () => {
    setCreateOrderSlideOverCloseFunction();
    setUser(false);
    Router.push(APP_ROUTES.AUTH);
  };

  const setOnboardOpenFunction = () => {
    setOnboardOpen(true);
    // console.log("I am Open for business")
  };

  const setOnboardCloseFunction = () => {
    setOnboardOpen(false);
  };

  const setCreateOrderSlideOverOpenFunction = () => {
    setcreateOrderSlideOver(true);
    // console.log("I am Open for business")
  };

  const setCreateOrderSlideOverCloseFunction = () => {
    setcreateOrderSlideOver(false);
  };

  const value = {
    user,
    login,
    logout,
    onboardOpen,
    createOrderSlideOver,
    setOnboardOpenFunction,
    setOnboardCloseFunction,
    setCreateOrderSlideOverOpenFunction,
    setCreateOrderSlideOverCloseFunction,
  };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
}

export function useMain() {
  return React.useContext(Context);
}
