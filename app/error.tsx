"use client";
import {useEffect} from "react";
export default function ErrorPage({error,reset}:{error:Error&{digest?:string};reset:()=>void}){
  useEffect(()=>{console.error("Application rendering error:",error);},[error]);
  return <main className="error-page" role="alert"><p className="eyebrow">SOMETHING WENT WRONG</p>
    <h1>THAT&apos;S NOT<br/>SUPPOSED TO HAPPEN.</h1><p>The page could not be displayed. Please try again.</p>
    <button className="solid-btn" onClick={reset} type="button">TRY AGAIN</button></main>;
}
