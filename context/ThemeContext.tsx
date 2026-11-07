"use client";
import {createContext,useCallback,useContext,useEffect,useMemo,useState,type ReactNode} from "react";
export type Theme = "dark" | "light";
type ThemeContextValue = {theme:Theme;toggleTheme:()=>void};
const ThemeContext=createContext<ThemeContextValue|null>(null);
const STORAGE_KEY="yasir-theme";
const isTheme=(value:string|null):value is Theme=>value==="dark"||value==="light";
export function ThemeProvider({children}:{children:ReactNode}){
  const [theme,setTheme]=useState<Theme>("dark");
  useEffect(()=>{
    try { const stored=window.localStorage.getItem(STORAGE_KEY); if(isTheme(stored)) setTheme(stored); }
    catch(error){ console.warn("Could not read theme preference.",error); }
  },[]);
  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
    try { window.localStorage.setItem(STORAGE_KEY,theme); }
    catch(error){ console.warn("Could not save theme preference.",error); }
  },[theme]);
  const toggleTheme=useCallback(()=>setTheme(current=>current==="dark"?"light":"dark"),[]);
  const value=useMemo(()=>({theme,toggleTheme}),[theme,toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme(){
  const value=useContext(ThemeContext);
  if(!value) throw new Error("useTheme must be used within ThemeProvider.");
  return value;
}
