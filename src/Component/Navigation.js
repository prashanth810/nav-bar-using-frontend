import React, { useRef, useState } from 'react'

const Navigation = ({ steper }) => {
    const [currentstep, setCurrentstep] = useState(1);
    const [iscomplete, setIscomplete] = useState(false);
    const stepref = useRef([]);

    const handlenext = () => {
        setCurrentstep((prev) => {
            if (prev === steper.length) {
                setIscomplete(true);
                return prev;
            }
            else {
                return prev + 1;
            }
        })
    }

    const Accountcomponent = steper[currentstep - 1]?.Component;

    if (!steper.length) {
        return <></>
    }
    return (
        <>
            <div className='stepper' >
                {steper.map((val, i) => {
                    return (
                        <div className={`step ${currentstep > i + 1 || iscomplete ? ('Completed') : ('')} ${currentstep === i + 1 ? "active" : ""}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

                            <div className='step-number' >
                                {currentstep > i + 1 || iscomplete ? <span>&#10003;</span> : (i + 1)}
                            </div>
                            <div className='step-name'>
                                {val.name}
                            </div>
                        </div>
                    )
                })}

            </div>
            <Accountcomponent />

            <div>
                {!iscomplete && (
                    <button onClick={handlenext}> {currentstep.length === steper.length ? 'Finish' : 'Next'} </button>
                )}

            </div>
        </>
    )
}

export default Navigation
