import React, { useState } from "react";

export default function GalleryWall() {
    const [showMe, setShowMe] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(1);
    const toggleMe = () => {
        if (!showMe) {
            setShowMe(true);
            return;
        }
    };
    const setCurrent = (index) => {
        setCurrentIdx(index);
        toggleMe();
    }

    const renderpage = () => {
        if (currentIdx === 1) {
            return (
                <div className="gallery-Page">
                    hello1
                </div>
            );
        }
        else if (currentIdx === 2) {
            return (
                <div className="gallery-Page">
                    hello2
                </div>
            );
        }
        else if (currentIdx === 3) {
            return (
                <div className="gallery-Page">
                    hello3
                </div>
            );
        }
        else if (currentIdx === 4) {
            return (
                <div className="gallery-Page">
                    hello4
                </div>
            );
        }
    }
    return (
        <div className='gallery-wall'>

            {renderpage()}
            <div className="gallery-buttons">
                <a href="#" onClick={() => setCurrent(1)}>1</a>
                <a href="#" onClick={() => setCurrent(2)}>2</a>
                <a href="#" onClick={() => setCurrent(3)}>3</a>
                <a href="#" onClick={() => setCurrent(4)}>4</a>
            </div>
        </div>
    );
}
