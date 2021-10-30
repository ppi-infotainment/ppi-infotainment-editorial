import { Children, useState, cloneElement } from "react";

const InfotainmentCarousel = ({ children }) => {
    const childrenCount = Children.count(children);
    const [childIndex, setChildIndex] = useState(0);

    function nextChildIndex() {
        return (childIndex + 1) % childrenCount;
    }

    function onDisplayCompletion() {
        setChildIndex(nextChildIndex());
    }

    const updateChildrenWithProps = Children.map(
        children,
        child => cloneElement(child, {
            onDisplayCompletion: onDisplayCompletion
        })
    );

    const childrenArray = Children.toArray(updateChildrenWithProps);

    return <>{childrenArray[childIndex]}</>;
};

export default InfotainmentCarousel;
