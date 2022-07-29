import { useEffect} from 'react'
import AuthStack from "./navigation/AuthStack";
import ClientStack from "./navigation/ClientStack";
import {supabase} from './lib/initSupabase';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from './feautures/authSlice'

export default function Main() {
    const {session} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const auth = supabase.auth.session();
  
    useEffect(() => {
        dispatch(setAuth(auth))
  
      supabase.auth.onAuthStateChange((_event, session) => {
        dispatch(setAuth(session))
      })
    }, [])
    console.log(session)

  return (
    <>
       {session && auth ? <ClientStack /> : <AuthStack />}
    </>
  )
}
