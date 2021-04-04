import React, {useState, useEffect} from 'react'
import Link from 'next/link'
export default function Logo() {

    return (
        <Link href="/">
        <svg width="96" height="38" viewBox="0 0 96 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="cut-off-white">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <clipPath id="cut-off-darkblue">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <clipPath id="cut-off-tor">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <clipPath id="cut-off-green">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <clipPath id="cut-off-yellow">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <clipPath id="cut-off-red">
                    <rect x="0" y="0" width="200" height="100" />
            </clipPath>
            <g id="logoSVG">
                <g id="yellow" clip-path="url(#cut-off-red)">
                    <path id="Vector" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="#EA1920"/>
                    <path id="Vector_2" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="#EA1920"/>
                    <path id="Vector_3" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="#EA1920"/>
                    <path id="Vector_4" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="#EA1920"/>
                </g>
                <g id="red"clip-path="url(#cut-off-yellow)">
                    <path id="Vector_5" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="#F2E64F"/>
                    <path id="Vector_6" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="#F2E64F"/>
                    <path id="Vector_7" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="#F2E64F"/>
                    <path id="Vector_8" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="#F2E64F"/>
                </g>
                <g id="green" clip-path="url(#cut-off-green)">
                    <path id="Vector_9" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="#64DB5C"/>
                    <path id="Vector_10" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="#64DB5C"/>
                    <path id="Vector_11" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="#64DB5C"/>
                    <path id="Vector_12" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="#64DB5C"/>
                </g>
                <g id="tuqoise" clip-path="url(#cut-off-tor)">
                    <path id="Vector_13" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="#51CADF"/>
                    <path id="Vector_14" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="#51CADF"/>
                    <path id="Vector_15" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="#51CADF"/>
                    <path id="Vector_16" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="#51CADF"/>
                </g>
                <g id="darkblue" clip-path="url(#cut-off-darkblue)">
                    <path id="Vector_17" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="#0274CB"/>
                    <path id="Vector_18" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="#0274CB"/>
                    <path id="Vector_19" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="#0274CB"/>
                    <path id="Vector_20" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="#0274CB"/>
                </g>
                <g id="white" clip-path="url(#cut-off-white)">
                    <path id="Vector_21" d="M0 0.327148L21.4545 18.6985L0 37.0698V0.327148Z" fill="white"/>
                    <path id="Vector_22" d="M42.9086 37.0698L21.4541 18.6985L42.9086 0.327148V37.0698Z" fill="white"/>
                    <path id="Vector_23" d="M53.6934 0.327148L75.1479 18.6985L53.6934 37.0698V0.327148Z" fill="white"/>
                    <path id="Vector_24" d="M90.1363 11.4412C93.3749 11.4412 96.0002 8.88002 96.0002 5.72062C96.0002 2.56121 93.3749 0 90.1363 0C86.8978 0 84.2725 2.56121 84.2725 5.72062C84.2725 8.88002 86.8978 11.4412 90.1363 11.4412Z" fill="white"/>
                </g>
                </g>
        </svg>
        </Link>

    )
}
