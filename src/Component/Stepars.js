import React, { useEffect, useRef, useState } from 'react';
import './Steper.css';

const Stepars = ({ stepers = [] }) => {
    const [currentstep, setCurrentstep] = useState(1);
    const [iscomplete, setIscomplete] = useState(false);
    const stepref = useRef([]);
    const [margin, setMargin] = useState({
        marginRight: 0,
        marginLeft: 0,
    });

    useEffect(() => {
        if (stepref.current.length > 0) {
            setMargin({
                marginLeft: stepref.current[0]?.offsetWidth / 2 || 0,
                marginRight: stepref.current[stepref.current.length - 1]?.offsetWidth / 2 || 0,
            });
        }
    }, [stepers]);

    if (!stepers.length) {
        return <></>;
    }

    const handlenext = () => {
        setCurrentstep(prev => {
            if (prev === stepers.length) {
                setIscomplete(true);
                return prev;
            } else {
                return prev + 1;
            }
        });
    };

    const calculatebar = () => {
        return ((currentstep - 1) / (stepers.length - 1)) * 100;
    };

    const Activecomponent = stepers[currentstep - 1]?.Component;
    return (
        <>
            <div className='stepper'>
                {stepers.map((val, i) => {
                    return (
                        <div
                            key={i}
                            ref={el => stepref.current[i] = el}
                            className={`step ${currentstep > i + 1 || iscomplete ? "completed" : ""} ${currentstep === i + 1 ? "active" : ""}`}
                        >
                            <div className='step-number'>
                                {currentstep > i + 1 || iscomplete ? (<span>&#10003;</span>) : (i + 1)}
                            </div>
                            <div className='step-name'>{val.name}</div>
                        </div>
                    );
                })}
                <div className='progesbar-bar' style={{
                    width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
                    marginLeft: margin.marginLeft,
                    marginRight: margin.marginRight
                }}>
                    <div className='progres' style={{ width: `${calculatebar()}%` }}>
                    </div>
                </div>
            </div>

            {Activecomponent && <Activecomponent />}

            {!iscomplete && (
                <button className='nextbtn' onClick={handlenext}>
                    {currentstep === stepers.length ? "Finish" : "Next"}
                </button>
            )}
        </>
    );
};

export default Stepars;
