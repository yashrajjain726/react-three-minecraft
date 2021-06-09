import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

export const Camera =  (props)=>{
    const ref = useRef();
    const {setDefaultCamera} = useThree();
    useEffect(()=>{
        setDefaultCamera(ref.current)
    },[])
    return <perspectiveCamera ref={ref}{...props}/>
}