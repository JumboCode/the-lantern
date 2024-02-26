import React from "react";
import Image from "next/image";
import AboutImage from "../../images/hannah1.jpeg";
import Define from "../images/define.png";
import Arrow from "../images/arrow.png";

export default function AboutUsIV() {
  const header_font: React.CSSProperties = {
    fontFamily: "coolvetica",
    fontSize: "90px",
    lineHeight: "1",
  };
  const background: React.CSSProperties = {
    height: "auto",
  };

  const round_box: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    borderWidth: "2px",
    // marginTop: "2.5rem",
    // marginBottom: "2.5rem",
    borderRadius: "1.5rem",
    padding: "5rem",
    filter: "drop-shadow(5px 10px 3px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  };

  /* Arrow 3 */



  return (
    <div>
      <div
        className="-mt-20 py-20 px-20 blue2-gradient"
        style={background}
      > 
        <p style={header_font} className="mb-20">Our Mission</p>

        {/* Two boxes */}
        <div className="flex gap-10"
         >
          {/* Box 1 */}
          <div
           className="w-1/2 flex-col pale-yellow mellow-yellow-border"
           style={round_box}>
            <p className="font-nunito text-xl font-bold">
            Problem #1. The way of thinking in the technical world is not varied enough for the territory that it has entered.
            </p>
            <p className="font-nunito text-xl">
            We believe that the question of socially responsible innovation demands dialogue across disciplines.
            </p>
          </div>
          {/* Box 2 */}
          <div
          className="w-1/2 flex-col mellow-yellow orange-border"
          style={round_box}>
            <p className="font-nunito text-xl font-bold">
            Problem #2: Academic and expert discussions are not accessible to the general public.            </p>
            <p className="font-nunito text-xl">
            We believe that information should be distributed in a way that is easy to understand for the people who are affected by the decisions.            </p>
          </div>
        </div>
        
        {/* Arrows */}
        <div className="flex justify-around px-40">
          <svg className="" width="232" height="170" viewBox="0 0 232 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M148 58L148.812 57.4167L148.637 57.1725L148.356 57.0655L148 58ZM226.837 168.988C227.382 169.077 227.897 168.708 227.986 168.163L229.443 159.282C229.532 158.737 229.163 158.222 228.618 158.133C228.073 158.044 227.559 158.413 227.469 158.958L226.174 166.852L218.28 165.557C217.735 165.468 217.221 165.837 217.131 166.382C217.042 166.927 217.411 167.442 217.956 167.531L226.837 168.988ZM0.643274 2.93558L5.23705 4.68555L5.94902 2.81657L1.35525 1.0666L0.643274 2.93558ZM14.4246 8.18548L23.6121 11.6854L24.3241 9.81643L15.1366 6.3165L14.4246 8.18548ZM32.7997 15.1853L41.9872 18.6853L42.6992 16.8163L33.5117 13.3164L32.7997 15.1853ZM51.1748 22.1852L60.3623 25.6851L61.0743 23.8162L51.8868 20.3162L51.1748 22.1852ZM69.5499 29.1851L78.7374 32.685L79.4494 30.816L70.2618 27.3161L69.5499 29.1851ZM87.925 36.1849L97.1125 39.6849L97.8245 37.8159L88.6369 34.316L87.925 36.1849ZM106.3 43.1848L115.488 46.6847L116.2 44.8158L107.012 41.3158L106.3 43.1848ZM124.675 50.1847L133.863 53.6846L134.575 51.8156L125.387 48.3157L124.675 50.1847ZM143.05 57.1845L147.644 58.9345L148.356 57.0655L143.762 55.3155L143.05 57.1845ZM147.188 58.5833L150.009 62.5119L151.634 61.3453L148.812 57.4167L147.188 58.5833ZM155.652 70.3692L161.295 78.2264L162.919 77.0597L157.276 69.2025L155.652 70.3692ZM166.938 86.0836L172.58 93.9408L174.205 92.7742L168.562 84.917L166.938 86.0836ZM178.223 101.798L183.866 109.655L185.49 108.489L179.848 100.631L178.223 101.798ZM189.509 117.512L195.152 125.37L196.776 124.203L191.133 116.346L189.509 117.512ZM200.794 133.227L206.437 141.084L208.062 139.917L202.419 132.06L200.794 133.227ZM212.08 148.941L217.723 156.799L219.347 155.632L213.704 147.775L212.08 148.941ZM223.366 164.656L226.187 168.584L227.811 167.418L224.99 163.489L223.366 164.656ZM148 58L149.624 56.8334L149.274 56.345L148.712 56.131L148 58ZM226.676 169.975C227.766 170.153 228.794 169.415 228.973 168.325L231.886 150.562C232.065 149.472 231.327 148.444 230.237 148.265C229.147 148.086 228.118 148.825 227.939 149.915L225.349 165.704L209.56 163.114C208.47 162.935 207.442 163.674 207.263 164.764C207.084 165.854 207.823 166.882 208.913 167.061L226.676 169.975ZM0.287287 3.87007L4.88106 5.62003L6.30501 1.88207L1.71124 0.132108L0.287287 3.87007ZM14.0686 9.11997L23.2562 12.6199L24.6801 8.88194L15.4926 5.382L14.0686 9.11997ZM32.4437 16.1198L41.6312 19.6198L43.0552 15.8818L33.8676 12.3819L32.4437 16.1198ZM50.8188 23.1197L60.0063 26.6196L61.4303 22.8817L52.2427 19.3817L50.8188 23.1197ZM69.1939 30.1196L78.3814 33.6195L79.8054 29.8815L70.6178 26.3816L69.1939 30.1196ZM87.569 37.1194L96.7565 40.6194L98.1805 36.8814L88.9929 33.3815L87.569 37.1194ZM105.944 44.1193L115.132 47.6192L116.556 43.8813L107.368 40.3813L105.944 44.1193ZM124.319 51.1192L133.507 54.6191L134.931 50.8811L125.743 47.3812L124.319 51.1192ZM142.694 58.119L147.288 59.869L148.712 56.131L144.118 54.3811L142.694 58.119ZM146.376 59.1666L149.197 63.0953L152.446 60.762L149.624 56.8334L146.376 59.1666ZM154.84 70.9525L160.483 78.8097L163.731 76.4764L158.089 68.6192L154.84 70.9525ZM166.125 86.6669L171.768 94.5241L175.017 92.1908L169.374 84.3336L166.125 86.6669ZM177.411 102.381L183.054 110.239L186.303 107.905L180.66 100.048L177.411 102.381ZM188.697 118.096L194.339 125.953L197.588 123.62L191.946 115.763L188.697 118.096ZM199.982 133.81L205.625 141.667L208.874 139.334L203.231 131.477L199.982 133.81ZM211.268 149.525L216.911 157.382L220.16 155.049L214.517 147.191L211.268 149.525ZM222.553 165.239L225.375 169.168L228.624 166.834L225.802 162.906L222.553 165.239Z" fill="black"/>
          </svg>

          <svg className="" width="236" height="170" viewBox="0 0 236 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99 60L98.6077 59.0802L98.3903 59.1729L98.2374 59.3531L99 60ZM3.00334 172.082C3.04857 172.632 3.53141 173.042 4.08185 172.997L13.0516 172.26C13.6021 172.215 14.0117 171.732 13.9664 171.182C13.9212 170.631 13.4384 170.222 12.888 170.267L4.9148 170.922L4.25999 162.948C4.21479 162.398 3.73193 161.988 3.18149 162.034C2.63107 162.079 2.22149 162.562 2.26671 163.112L3.00334 172.082ZM234.608 1.08016L229.751 3.15159L230.535 4.99127L235.392 2.91984L234.608 1.08016ZM220.036 7.29444L210.322 11.4373L211.107 13.277L220.821 9.13413L220.036 7.29444ZM200.608 15.5802L190.893 19.723L191.678 21.5627L201.392 17.4198L200.608 15.5802ZM181.179 23.8659L171.465 28.0087L172.249 29.8484L181.964 25.7056L181.179 23.8659ZM161.751 32.1516L152.036 36.2944L152.821 38.1341L162.535 33.9913L161.751 32.1516ZM142.322 40.4373L132.608 44.5802L133.392 46.4198L143.107 42.277L142.322 40.4373ZM122.893 48.723L113.179 52.8659L113.964 54.7056L123.678 50.5627L122.893 48.723ZM103.465 57.0087L98.6077 59.0802L99.3923 60.9198L104.249 58.8484L103.465 57.0087ZM98.2374 59.3531L94.8445 63.3531L96.3698 64.6468L99.7626 60.6469L98.2374 59.3531ZM88.0588 71.3531L81.2731 79.3531L82.7983 80.6469L89.584 72.6469L88.0588 71.3531ZM74.4874 87.3531L67.7017 95.3531L69.2269 96.6469L76.0126 88.6469L74.4874 87.3531ZM60.916 103.353L54.1302 111.353L55.6555 112.647L62.4412 104.647L60.916 103.353ZM47.3445 119.353L40.5588 127.353L42.084 128.647L48.8698 120.647L47.3445 119.353ZM33.7731 135.353L26.9874 143.353L28.5126 144.647L35.2983 136.647L33.7731 135.353ZM20.2017 151.353L13.4159 159.353L14.9412 160.647L21.7269 152.647L20.2017 151.353ZM6.63024 167.353L3.23738 171.353L4.76261 172.647L8.15546 168.647L6.63024 167.353ZM99 60L98.2154 58.1603L97.7806 58.3458L97.4748 58.7063L99 60ZM2.00672 172.164C2.09711 173.265 3.06282 174.084 4.1637 173.993L22.1033 172.52C23.2042 172.43 24.0233 171.464 23.9329 170.363C23.8425 169.262 22.8768 168.443 21.7759 168.533L5.8296 169.843L4.51998 153.897C4.42957 152.796 3.46385 151.977 2.363 152.067C1.26213 152.158 0.443009 153.123 0.533401 154.224L2.00672 172.164ZM234.215 0.160314L229.358 2.23174L230.927 5.91112L235.785 3.83969L234.215 0.160314ZM219.644 6.3746L209.93 10.5175L211.499 14.1968L221.213 10.054L219.644 6.3746ZM200.215 14.6603L190.501 18.8032L192.07 22.4825L201.785 18.3397L200.215 14.6603ZM180.787 22.946L171.073 27.0889L172.642 30.7683L182.356 26.6254L180.787 22.946ZM161.358 31.2317L151.644 35.3746L153.213 39.054L162.927 34.9111L161.358 31.2317ZM141.93 39.5175L132.215 43.6603L133.785 47.3397L143.499 43.1968L141.93 39.5175ZM122.501 47.8032L112.787 51.946L114.356 55.6254L124.07 51.4825L122.501 47.8032ZM103.073 56.0889L98.2154 58.1603L99.7846 61.8397L104.642 59.7683L103.073 56.0889ZM97.4748 58.7063L94.0819 62.7063L97.1324 65.2937L100.525 61.2937L97.4748 58.7063ZM87.2962 70.7063L80.5105 78.7063L83.5609 81.2937L90.3467 73.2937L87.2962 70.7063ZM73.7248 86.7063L66.9391 94.7063L69.9895 97.2937L76.7752 89.2937L73.7248 86.7063ZM60.1534 102.706L53.3676 110.706L56.4181 113.294L63.2038 105.294L60.1534 102.706ZM46.5819 118.706L39.7962 126.706L42.8466 129.294L49.6324 121.294L46.5819 118.706ZM33.0105 134.706L26.2248 142.706L29.2752 145.294L36.0609 137.294L33.0105 134.706ZM19.439 150.706L12.6533 158.706L15.7038 161.294L22.4895 153.294L19.439 150.706ZM5.86763 166.706L2.47477 170.706L5.52522 173.294L8.91807 169.294L5.86763 166.706Z" fill="black"/>
          </svg>
        </div>
        

        
        {/* Ending box */}
        <div
         className="flex-col orange pale-yellow-border font-nunito text-xl"
         style={round_box}>
          <p className="font-bold">As a “Think-and-Action” Tank, The Lantern has a dual mission: </p>
          <p><span className="font-bold">(1)</span> to break down critical and complex ideas at the intersection of STS for the general public </p>
          <p><span className="font-bold">(2)</span> to engage students and organizations in a socially responsible path of science and technology </p>
        </div>
      </div>
     </div>
     
  );
}