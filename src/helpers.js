const { useState,useEffect } = require("react/cjs/react.production.min");

// custon hook
export function useLocalStorage(itemName, value = ""){
    const [state, setState] = useState(() => {
        return localStorage.getItem(itemName || value)
    });
    useEffect(() => {
        window.localStorage.setItem(itemName, state);
      }, [state]);
    
    return [state, setState]
}

export function useTimersetting(itemName, time){
    const [state, setState] = useState(()=>{
        return getLocal(itemName)
    })
}

// custom function
export function setLocal(key, value){
   return localStorage.setItem(key, value)
}
export function getLocal(key){
   return localStorage.getItem(key)
}
export function stateAssign(basicState, newState){
    Object.assign( basicState, newState)
}
export function JsonStr(itemName){
   return JSON.stringify(itemName)
}
export function JsonPar(itemName){
   return JSON.parse(itemName)
}