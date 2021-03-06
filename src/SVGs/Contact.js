import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

const Contact = () => {

    const headFrame = [
        { transform: 'rotateZ(0deg)', transformOrigin: 'bottom', transformBox: "fill-box" },
        { transform: 'rotateZ(20deg)', transformOrigin: 'bottom', transformBox: "fill-box" },
    ]

    const MessageFrame = [
        { transform: 'rotateZ(0deg)', transformOrigin: 'bottom', transformBox: "fill-box" },
        { transform: 'rotateZ(-5deg)', transformOrigin: 'bottom', transformBox: "fill-box" },
    ]

    const headRotateTime = {
        duration: 1000,
        iterations: Infinity,
        direction: "alternate",
    }

    const head = useWebAnimations({
        keyframes: headFrame,
        timing: headRotateTime,
    })

    const hand = useWebAnimations({
        keyframes: headFrame,
        timing: headRotateTime,
    })

    const MessageSection = useWebAnimations({
        keyframes: MessageFrame,
        timing: headRotateTime,
    })

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000"
            height="300"
            fill="none"
            viewBox="0 0 1248 728"
        >
            <g id="contact" clipPath="url(#clip0)">
                <g ref={hand.ref} id="Hand">
                    <path
                        id="Vector"
                        fill="gray"
                        d="M651.568 506.704a7.01 7.01 0 01-6.98-6.548l-1.039-15.874a7.003 7.003 0 016.532-7.448l124.364-8.145a14.953 14.953 0 0110.849 3.676 14.96 14.96 0 011.383 21.12 14.97 14.97 0 01-10.277 5.06l-124.363 8.144c-.157.01-.313.015-.469.015z"
                    ></path>
                    <path
                        id="Vector_2"
                        fill="#939294"
                        d="M676.091 508.751a7.01 7.01 0 01-4.856-1.965 7.012 7.012 0 01-2.142-4.78l-.886-23.709a7.01 7.01 0 014.08-6.629 6.99 6.99 0 012.659-.633l102.268-3.822a7.003 7.003 0 017.262 6.739l.886 23.709a6.994 6.994 0 01-1.865 5.027 7.008 7.008 0 01-4.874 2.235l-102.267 3.822a5.89 5.89 0 01-.265.006z"
                    ></path>
                </g>
                <g id="Body">
                    <path
                        id="Vector_3"
                        fill="#939294"
                        d="M795.932 727.305h-15.908a7.013 7.013 0 01-7.006-7.005V587.716a7.013 7.013 0 017.006-7.005h15.908a7.013 7.013 0 017.005 7.005V720.3a7.01 7.01 0 01-7.005 7.005z"
                    ></path>
                    <path
                        id="Vector_4"
                        fill="#939294"
                        d="M757.932 727.305h-15.908a7.013 7.013 0 01-7.006-7.005V587.716a7.013 7.013 0 017.006-7.005h15.908a7.013 7.013 0 017.005 7.005V720.3a7.01 7.01 0 01-7.005 7.005z"
                    ></path>
                    <path
                        id="Vector_5"
                        fill="#939294"
                        d="M807.614 623.289h-82.635a9.174 9.174 0 01-8.895-6.962 9.023 9.023 0 01-.12-3.32s16.141-90.643 24.126-134.176a27.574 27.574 0 0127.128-22.6 59.613 59.613 0 0159.612 59.612v88.229a19.209 19.209 0 01-5.628 13.588 19.223 19.223 0 01-13.588 5.629z"
                    ></path>
                    <path
                        id="Vector_6"
                        fill="gray"
                        d="M791.679 611.312a7.023 7.023 0 01-6.565 3.875l-15.894-.67a7 7 0 01-6.285-4.593 7 7 0 01-.419-2.701l5.245-124.519c.083-1.963.551-3.89 1.378-5.672a14.972 14.972 0 018.43-7.747 14.948 14.948 0 0111.439.481 14.95 14.95 0 014.712 3.445 14.95 14.95 0 013.933 10.752l-5.245 124.519a6.97 6.97 0 01-.729 2.83z"
                    ></path>
                    <path
                        id="Vector_7"
                        fill="#939294"
                        d="M799.814 578.296a7.02 7.02 0 01-6.565 3.875l-27.147-1.144a7.01 7.01 0 01-6.705-7.294l4.308-102.248a7 7 0 014.593-6.285 7.02 7.02 0 012.701-.42l27.147 1.144a7.023 7.023 0 012.656.645 7.028 7.028 0 012.207 1.613 7.022 7.022 0 011.841 5.036l-4.307 102.248a6.97 6.97 0 01-.729 2.83z"
                    ></path>
                </g>
                <g ref={head.ref} id="Head">
                    <path
                        id="Vector_8"
                        fill="#939294"
                        d="M771.771 442.346c30.358 0 54.967-24.61 54.967-54.967 0-30.358-24.609-54.968-54.967-54.968-30.358 0-54.967 24.61-54.967 54.968 0 30.357 24.609 54.967 54.967 54.967z"
                    ></path>
                    <path
                        id="Vector_9"
                        fill="#2F2E41"
                        d="M742.018 406.146a13.046 13.046 0 01-4.761-2.794 8.772 8.772 0 01-2.562-6.94 5.894 5.894 0 012.621-4.539c1.966-1.261 4.595-1.264 7.272-.085l-.101-21.458 2.155-.01.119 25.226-1.661-1.044c-1.926-1.21-4.676-2.061-6.619-.814a3.773 3.773 0 00-1.64 2.93 6.631 6.631 0 001.905 5.175c2.38 2.273 5.853 2.984 9.813 3.62l-.342 2.128a35.541 35.541 0 01-6.199-1.395z"
                    ></path>
                    <path
                        id="Vector_10"
                        fill="#2F2E41"
                        d="M722.267 369.249l-.282 2.136 11.51 1.52.282-2.136-11.51-1.52z"
                    ></path>
                    <path
                        id="Vector_11"
                        fill="#2F2E41"
                        d="M758.596 374.042l-.282 2.137 11.509 1.52.282-2.137-11.509-1.52z"
                    ></path>
                    <path
                        id="Vector_12"
                        fill="#2F2E41"
                        d="M768.716 351.675c-11.856 4.675-29.772 9.645-37.588-4.236a22.686 22.686 0 01-1.287-18.638c2.361-6.549 7.383-11.944 13.106-15.757 10.721-7.142 24.285-9.086 36.77-6.326a50.183 50.183 0 0117.548 7.541c6.039 4.141 10.291 9.729 14.566 15.578 4.369 5.98 9.317 12.011 16.498 14.631 5.871 2.142 13.233 1.048 17.387-3.936a12.157 12.157 0 002.194-3.935c.623-1.832-2.273-2.618-2.893-.798-2.183 6.415-10.217 7.852-15.89 5.776-7.49-2.741-12.22-9.862-16.711-16.01-4.294-5.877-9.041-11.051-15.243-14.95a52.912 52.912 0 00-18.205-7.107c-12.999-2.473-26.998-.282-38.014 7.27a36.719 36.719 0 00-13.668 16.336 25.897 25.897 0 00.178 19.644 20.848 20.848 0 0015.098 12.303c7.263 1.472 14.81-.221 21.704-2.555a113.71 113.71 0 005.248-1.938c1.775-.701 1.002-3.603-.798-2.893z"
                    ></path>
                </g>
                <g ref={MessageSection.ref} id="MessageSection">
                    <path
                        id="Vector_13"
                        fill="#253d3d"
                        d="M48.125 0h376.318a48.18 48.18 0 0148.125 48.125v205.876a48.179 48.179 0 01-48.125 48.125H48.125A48.178 48.178 0 010 254.001V48.125A48.18 48.18 0 0148.125 0z"
                    ></path>
                    <path
                        id="Vector_14"
                        fill="gray"
                        d="M48.124 13.854h376.319a34.31 34.31 0 0134.271 34.271v205.876a34.309 34.309 0 01-34.271 34.271H48.125a34.307 34.307 0 01-34.271-34.271V48.125a34.31 34.31 0 0134.27-34.27z"
                    ></path>
                    <path
                        id="Vector_15"
                        fill="#253d3d"
                        d="M51.797 375.836a8.632 8.632 0 01-3.307-.668 8.374 8.374 0 01-5.247-7.853v-71.17l94.882-3.192-80.372 80.372a8.381 8.381 0 01-5.956 2.511z"
                    ></path>
                    <path
                        id="Vector_16"
                        fill="#253d3d"
                        d="M377.312 65.063H94.339c-11.329 0-20.513 9.184-20.513 20.514S83.01 106.09 94.34 106.09h282.972c11.329 0 20.514-9.185 20.514-20.514 0-11.33-9.185-20.514-20.514-20.514z"
                    ></path>
                    <path
                        id="Vector_17"
                        fill="#253d3d"
                        d="M377.77 130.549H94.798c-11.33 0-20.514 9.185-20.514 20.514 0 11.329 9.184 20.514 20.514 20.514H377.77c11.33 0 20.514-9.185 20.514-20.514 0-11.329-9.184-20.514-20.514-20.514z"
                    ></path>
                    <path
                        id="Vector_18"
                        fill="#253d3d"
                        d="M378.229 196.035H95.256c-11.329 0-20.513 9.185-20.513 20.514 0 11.33 9.184 20.514 20.513 20.514H378.23c11.329 0 20.514-9.184 20.514-20.514 0-11.329-9.185-20.514-20.514-20.514z"
                    ></path>
                    <path
                        id="Vector_19"
                        fill="#253d3d"
                        d="M642.36 105H266.042a48.179 48.179 0 00-48.125 48.125v205.876a48.179 48.179 0 0048.125 48.125H642.36a48.179 48.179 0 0048.125-48.125V153.125A48.179 48.179 0 00642.36 105z"
                    ></path>
                    <path
                        id="Vector_20"
                        fill="gray"
                        d="M642.361 118.854H266.042a34.309 34.309 0 00-34.271 34.271v205.876a34.309 34.309 0 0034.271 34.271h376.319a34.309 34.309 0 0034.27-34.271V153.125a34.309 34.309 0 00-34.27-34.271z"
                    ></path>
                    <path
                        id="Vector_21"
                        fill="grey"
                        d="M613.732 478.325l-80.372-80.372 94.883 3.192v71.17a8.375 8.375 0 01-5.247 7.853 8.636 8.636 0 01-3.307.668 8.371 8.371 0 01-5.957-2.511z"
                    ></path>
                </g>
                <path
                    id="circle1"
                    fill="black"
                    d="M371.201 282.063c14.36 0 26-11.641 26-26s-11.64-26-26-26c-14.359 0-26 11.641-26 26s11.641 26 26 26z"
                ></path>
                <path
                    id="circle2"
                    fill="black"
                    d="M454.201 282.063c14.36 0 26-11.641 26-26s-11.64-26-26-26c-14.359 0-26 11.641-26 26s11.641 26 26 26z"
                ></path>
                <g id="circle3">
                    <path
                        id="Vector_22"
                        fill="black"
                        d="M537.201 282.063c14.36 0 26-11.641 26-26s-11.64-26-26-26c-14.359 0-26 11.641-26 26s11.641 26 26 26z"
                    ></path>
                </g>
            </g>
            {/* <defs>
                <clipPath id="clip0">
                    <path fill="yellow" d="M0 0H847.997V727.305H0z"></path>
                </clipPath>
            </defs> */}
        </svg>
    )
}

export default Contact;
