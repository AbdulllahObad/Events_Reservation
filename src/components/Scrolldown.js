import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ScrollDownButton = () => {
       const scrollRef = useRef(null);

const handleScrollClick = () => {
       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
};

return (
       <div>
       <button onClick={handleScrollClick} className="btn btn-primary">
       Scroll Down
       <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
       </button>
       <div ref={scrollRef} style={{ height: '100vh' }}></div>
       </div>
);
};

export default ScrollDownButton;