import { createContext } from "react";

const Context = createContext({})

const initialStore = {
    username: 'Domo'
}

const AppContextProvider = Context.Provider
const AppContextConsumer = Context.Consumer

export const AppStore = (props) => {
    return (
        <AppContextProvider value={initialStore}>
            {props.children}
        </AppContextProvider>
    )
}
