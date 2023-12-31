import React from 'react'
import { useEffect } from 'react';
export default function Tryout() {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
      useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, [])
      
  return (
    <div>
        <div id="google_translate_element"></div>
      <h1>hello</h1>
      <h4>Start building your app. Happy Coding!</h4>
    </div>
  )
}
