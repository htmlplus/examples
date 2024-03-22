import { useEffect, useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

function App() {
  const signatureRef = useRef();
  useEffect(() => {
    signatureRef.current.value = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 226 88"><path style="fill:#000000" d="M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z"/></svg>`;
  }, []);
  return (
    <plus-center>
      <plus-signature background-color="lightgray" ref={signatureRef}></plus-signature>
    </plus-center>
  );
}
export default App;
