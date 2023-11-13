import { useState,useCallback } from "react"

interface Props {
  initialState:boolean
}

export default function useOpenController({initialState}:Props) {
  const[isOpen, setOpenState] = useState(initialState);

  const toggle = useCallback(()=> {
    setOpenState((state)=>!state)
  }, [setOpenState]);

  return {isOpen, toggle};
}