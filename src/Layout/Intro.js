import React, { Component } from 'react';
import './Intro.css';
import { Link } from 'react-scroll';

export default class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <svg className="intro" id="logo" viewBox="0 0 496 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.1211 54H33.3359V30.3398H7.53125V54H0.78125V2.8125H7.53125V24.8203H33.3359V2.8125H40.1211V54ZM66.875 54.7031C61.7188 54.7031 57.5234 53.0156 54.2891 49.6406C51.0547 46.2422 49.4375 41.707 49.4375 36.0352V34.8398C49.4375 31.0664 50.1523 27.7031 51.582 24.75C53.0352 21.7734 55.0508 19.4531 57.6289 17.7891C60.2305 16.1016 63.043 15.2578 66.0664 15.2578C71.0117 15.2578 74.8555 16.8867 77.5977 20.1445C80.3398 23.4023 81.7109 28.0664 81.7109 34.1367V36.8438H55.9414C56.0352 40.5938 57.125 43.6289 59.2109 45.9492C61.3203 48.2461 63.9922 49.3945 67.2266 49.3945C69.5234 49.3945 71.4688 48.9258 73.0625 47.9883C74.6562 47.0508 76.0508 45.8086 77.2461 44.2617L81.2188 47.3555C78.0312 52.2539 73.25 54.7031 66.875 54.7031ZM66.0664 20.6016C63.4414 20.6016 61.2383 21.5625 59.457 23.4844C57.6758 25.3828 56.5742 28.0547 56.1523 31.5H75.207V31.0078C75.0195 27.7031 74.1289 25.1484 72.5352 23.3438C70.9414 21.5156 68.7852 20.6016 66.0664 20.6016ZM101.223 44.4727L110.082 15.9609H117.043L101.75 59.8711C99.3828 66.1992 95.6211 69.3633 90.4648 69.3633L89.2344 69.2578L86.8086 68.8008V63.5273L88.5664 63.668C90.7695 63.668 92.4805 63.2227 93.6992 62.332C94.9414 61.4414 95.9609 59.8125 96.7578 57.4453L98.1992 53.5781L84.6289 15.9609H91.7305L101.223 44.4727ZM118.871 64.1953L115.18 61.6641C117.383 58.5938 118.531 55.4297 118.625 52.1719V46.3008H124.988V51.3984C124.988 53.7656 124.402 56.1328 123.23 58.5C122.082 60.8672 120.629 62.7656 118.871 64.1953ZM159.336 54H152.586V2.8125H159.336V54ZM171.148 17.2266L167.457 14.6953C169.637 11.6484 170.762 8.4375 170.832 5.0625V0H177.266V4.57031C177.242 6.91406 176.656 9.25781 175.508 11.6016C174.383 13.9219 172.93 15.7969 171.148 17.2266ZM190.52 15.9609L190.695 20.1797C193.484 16.8984 197.246 15.2578 201.98 15.2578C207.301 15.2578 210.922 17.2969 212.844 21.375C214.109 19.5469 215.75 18.0703 217.766 16.9453C219.805 15.8203 222.207 15.2578 224.973 15.2578C233.316 15.2578 237.559 19.6758 237.699 28.5117V54H231.195V28.8984C231.195 26.1797 230.574 24.1523 229.332 22.8164C228.09 21.457 226.004 20.7773 223.074 20.7773C220.66 20.7773 218.656 21.5039 217.062 22.957C215.469 24.3867 214.543 26.3203 214.285 28.7578V54H207.746V29.0742C207.746 23.543 205.039 20.7773 199.625 20.7773C195.359 20.7773 192.441 22.5938 190.871 26.2266V54H184.367V15.9609H190.52ZM494.797 39.5508H488.926L488.469 2.8125H495.289L494.797 39.5508ZM488.223 50.7305C488.223 49.6758 488.539 48.7969 489.172 48.0938C489.828 47.3672 490.789 47.0039 492.055 47.0039C493.32 47.0039 494.281 47.3672 494.938 48.0938C495.594 48.7969 495.922 49.6758 495.922 50.7305C495.922 51.7852 495.594 52.6641 494.938 53.3672C494.281 54.0469 493.32 54.3867 492.055 54.3867C490.789 54.3867 489.828 54.0469 489.172 53.3672C488.539 52.6641 488.223 51.7852 488.223 50.7305Z" fill="white"/>
                    <path d="M294.688 40.6406H273.242L268.426 54H261.465L281.012 2.8125H286.918L306.5 54H299.574L294.688 40.6406ZM275.281 35.0859H292.684L283.965 11.1445L275.281 35.0859ZM335.855 54C335.48 53.25 335.176 51.9141 334.941 49.9922C331.918 53.1328 328.309 54.7031 324.113 54.7031C320.363 54.7031 317.281 53.6484 314.867 51.5391C312.477 49.4062 311.281 46.7109 311.281 43.4531C311.281 39.4922 312.781 36.4219 315.781 34.2422C318.805 32.0391 323.047 30.9375 328.508 30.9375H334.836V27.9492C334.836 25.6758 334.156 23.8711 332.797 22.5352C331.438 21.1758 329.434 20.4961 326.785 20.4961C324.465 20.4961 322.52 21.082 320.949 22.2539C319.379 23.4258 318.594 24.8438 318.594 26.5078H312.055C312.055 24.6094 312.723 22.7812 314.059 21.0234C315.418 19.2422 317.246 17.8359 319.543 16.8047C321.863 15.7734 324.406 15.2578 327.172 15.2578C331.555 15.2578 334.988 16.3594 337.473 18.5625C339.957 20.7422 341.246 23.7539 341.34 27.5977V45.1055C341.34 48.5977 341.785 51.375 342.676 53.4375V54H335.855ZM325.062 49.043C327.102 49.043 329.035 48.5156 330.863 47.4609C332.691 46.4062 334.016 45.0352 334.836 43.3477V35.543H329.738C321.77 35.543 317.785 37.875 317.785 42.5391C317.785 44.5781 318.465 46.1719 319.824 47.3203C321.184 48.4688 322.93 49.043 325.062 49.043ZM349.953 34.6641C349.953 28.8281 351.336 24.1406 354.102 20.6016C356.867 17.0391 360.488 15.2578 364.965 15.2578C369.418 15.2578 372.945 16.7812 375.547 19.8281V0H382.051V54H376.074L375.758 49.9219C373.156 53.1094 369.535 54.7031 364.895 54.7031C360.488 54.7031 356.891 52.8984 354.102 49.2891C351.336 45.6797 349.953 40.9688 349.953 35.1562V34.6641ZM356.457 35.4023C356.457 39.7148 357.348 43.0898 359.129 45.5273C360.91 47.9648 363.371 49.1836 366.512 49.1836C370.637 49.1836 373.648 47.332 375.547 43.6289V26.1562C373.602 22.5703 370.613 20.7773 366.582 20.7773C363.395 20.7773 360.91 22.0078 359.129 24.4688C357.348 26.9297 356.457 30.5742 356.457 35.4023ZM398.68 20.5664C401.562 17.0273 405.312 15.2578 409.93 15.2578C417.969 15.2578 422.023 19.793 422.094 28.8633V54H415.59V28.8281C415.566 26.0859 414.934 24.0586 413.691 22.7461C412.473 21.4336 410.562 20.7773 407.961 20.7773C405.852 20.7773 404 21.3398 402.406 22.4648C400.812 23.5898 399.57 25.0664 398.68 26.8945V54H392.176V0H398.68V20.5664ZM438.898 54H432.395V15.9609H438.898V54ZM431.867 5.87109C431.867 4.81641 432.184 3.92578 432.816 3.19922C433.473 2.47266 434.434 2.10938 435.699 2.10938C436.965 2.10938 437.926 2.47266 438.582 3.19922C439.238 3.92578 439.566 4.81641 439.566 5.87109C439.566 6.92578 439.238 7.80469 438.582 8.50781C437.926 9.21094 436.965 9.5625 435.699 9.5625C434.434 9.5625 433.473 9.21094 432.816 8.50781C432.184 7.80469 431.867 6.92578 431.867 5.87109ZM465.125 54.7031C459.969 54.7031 455.773 53.0156 452.539 49.6406C449.305 46.2422 447.688 41.707 447.688 36.0352V34.8398C447.688 31.0664 448.402 27.7031 449.832 24.75C451.285 21.7734 453.301 19.4531 455.879 17.7891C458.48 16.1016 461.293 15.2578 464.316 15.2578C469.262 15.2578 473.105 16.8867 475.848 20.1445C478.59 23.4023 479.961 28.0664 479.961 34.1367V36.8438H454.191C454.285 40.5938 455.375 43.6289 457.461 45.9492C459.57 48.2461 462.242 49.3945 465.477 49.3945C467.773 49.3945 469.719 48.9258 471.312 47.9883C472.906 47.0508 474.301 45.8086 475.496 44.2617L479.469 47.3555C476.281 52.2539 471.5 54.7031 465.125 54.7031ZM464.316 20.6016C461.691 20.6016 459.488 21.5625 457.707 23.4844C455.926 25.3828 454.824 28.0547 454.402 31.5H473.457V31.0078C473.27 27.7031 472.379 25.1484 470.785 23.3438C469.191 21.5156 467.035 20.6016 464.316 20.6016Z" fill="#00FFE0"/>
                </svg>
                <h3 className="intro-content">
                    Aspiring software developer, open to internship opportunities.
                    <br /><br />
                    <Link className="contact-link" to="AboutMe" smooth={true} duration={300} offset={-100}>Explore</Link>
                </h3>
            </div>
        );
    }
}