import { h, Component } from "preact";

export default class Reply extends Component {
  render() {
    return (
      <svg className="svg-reply" viewBox="0 0 512 512">
        <desc>Reply</desc>
        <g>
          <path
            d="M171.154,312.882L45.846,187.142c-7.799-7.798-7.799-20.486-0.032-28.252L171.098,34.174
              c7.828-7.793,7.856-20.456,0.063-28.284c-7.792-7.829-20.455-7.856-28.284-0.064L17.56,130.574
              c-23.393,23.394-23.393,61.458-0.023,84.828l125.284,125.716c3.907,3.921,9.036,5.882,14.166,5.882
              c5.107,0,10.215-1.944,14.119-5.834C178.929,333.369,178.952,320.706,171.154,312.882z"
            fill="currentColor"
          />
          <path
            d="M332.487,153h-213.5c-11.046,0-20,8.954-20,20s8.954,20,20,20h213.5c76.921,0,139.5,62.58,139.5,139.5
              S409.408,472,332.487,472c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20c98.977,0,179.5-80.523,179.5-179.5
              S431.464,153,332.487,153z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  }
}