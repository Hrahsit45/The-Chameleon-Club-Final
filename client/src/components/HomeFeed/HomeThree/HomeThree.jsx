import React from 'react'
import { useState } from 'react';
import Feed from "./Feed"
import Following from "./Following"
import AddPost from './AddPost';
const HomeThree = (props) => {

  
const [selectedComponent, setSelectedComponent] = useState('');
const handleComponentClick = (component) => {
setSelectedComponent(component);
};
  return (
    <div className="Sn-thr-fd text-black border-8 border-black">
      <div className="comp-feed text-black">
        <div
          className={`component ${
            selectedComponent === "all" ? "selected" : ""
          }`}
          onClick={() => handleComponentClick("all")}
        >
          All
        </div>
        <div
          className={`component ${
            selectedComponent === "Following" ? "selected" : ""
          }`}
          onClick={() => handleComponentClick("Following")}
        >
          Following
        </div>
        <div
          className={`component ${
            selectedComponent === "Newest" ? "selected" : ""
          }`}
          onClick={() => handleComponentClick("Popular")}
        >
          Search User
        </div>
        {/* <div className={`component ${selectedComponent === 'Popular' ? 'selected' : ''}`} onClick={() => handleComponentClick('Newest')}>
Popular
</div> */}
      </div>
      <div className="message">
        {selectedComponent === "" && (
          <p>
            <Feed id={props.id} />
          </p>
        )}
        {selectedComponent === "all" && (
          <p>
            <Feed id={props.id} />
          </p>
        )}
        {selectedComponent === "Following" && (
          <p>
            <Following id={props.id} />
          </p>
        )}
        {/* {selectedComponent === 'Newest' && <p><Feed /></p>} */}
        {selectedComponent === "Popular" && (
          <p>
            <AddPost id={props.id} name={props.name} data={props.data} />
          </p>
        )}
      </div>
    </div>
  );
}

export default HomeThree