/**
 * In this class we learnt about crating React element which are tags in html
 * We get to know about Parcel - Which is a bundler
 * This parcel bundler is really powerfull and empowers React to to do the following -
 *
 * 1. HMR - Hot Module Replacement - (If we change and save our file it will automatically reload the client by using)
 *      File watcher algorithm - Parcel use this algorithm which was ariten in C++
 * 2. Bundling
 * 3. MINIFY
 * 4. Cleaning our code
 * 5. dev and production build - Super fast build algorithm
 * 6. Image optimization
 * 7. Caching while development - thats why after first build the later build take very less time
 * 8.
 */

import React from "react";
import ReactDOM from "react-dom/client";

const title = "React Developer"

const HeaderComponent = () => {
  return(
    <>
      {title}
    <h1>Hello react</h1>;
    </>
  )
  
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
