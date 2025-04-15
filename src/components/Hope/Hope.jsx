import React from 'react';
import styles from './Hope.module.css';
import Title from '../Title/Title';
import Carousel from '../Carousel/Carousel';
import { useMediaQuery } from "react-responsive";
import { DownLook, RightLookDelay, RightLookItem} from '../Anime';
import { motion } from 'framer-motion'; // 引入 framer-motion

const Hope = () => {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isMobilesmall = useMediaQuery({ maxWidth: 350 });
  return (
    <div className={styles.bg}>
      <motion.svg {...RightLookDelay} className={styles.tophana} width="307" height="469" viewBox="0 0 307 469" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={RightLookItem} d="M232.176 310.459C232.176 310.459 204.053 316.24 193.228 314.807C182.402 313.374 169.407 308.076 164.9 297.541C160.391 287.004 164.835 284.078 170.127 278.136C175.418 272.193 191.021 274.842 202.229 278.618C213.435 282.393 235.29 298.9 237.673 303.773C240.055 308.647 235.525 313.695 219.357 327.056C203.188 340.421 200.228 341.878 174.265 338.015C148.304 334.152 152.9 335.511 157.991 327.084C163.079 318.656 166.773 315.151 181.841 311.175C196.909 307.199 213.628 310.143 226.585 310.183C239.541 310.227 245.314 314.185 260.575 314.167C275.834 314.151 266.855 310.968 261.311 305.067C255.768 299.168 259.216 300.557 253.712 299.91C248.211 299.265 237.522 305.069 239.125 313.787C240.727 322.506 250.01 323.103 261.282 322.127C272.553 321.151 282.335 334.276 296.863 336.306C311.393 338.338 351.422 355.172 370.485 363.312C370.485 363.312 370.221 371.157 363.239 364.924C356.26 358.691 343.369 335.685 327.968 317.308C312.563 298.933 279.77 252.594 265.772 227.818C251.777 203.044 220.424 155.562 212.567 145.618C204.707 135.671 205.66 133.158 200.825 135.216C195.989 137.275 214.738 143.902 221.025 151.858M221.025 151.858C227.311 159.813 229.369 188.44 222.12 197.105C214.869 205.774 200.638 212.025 187.748 208.112C174.856 204.201 176.075 199.712 176.679 191.599C177.283 183.485 193.903 155.078 192.232 145.529C190.562 135.981 189.798 131.3 188.974 142.524C188.152 153.749 190.895 158.337 180.781 170.44C170.666 182.544 162.552 191.012 152.449 198.407C142.343 205.804 125.737 198.914 118.553 192.422C111.366 185.93 106.042 179.564 108.222 176.373C110.4 173.184 110.334 172.356 123.229 164.515C136.126 156.672 133.844 154.073 146.817 153.807C159.792 153.541 167.71 147.578 176.313 141.369C184.917 135.157 183.327 136.119 183.327 136.119C183.327 136.119 183.362 130.217 167.372 137.859C151.382 145.5 142.608 155.958 124.184 149.368C105.762 142.778 100.428 137.886 99.4425 128.092C98.4574 118.295 98.1483 109.729 98.1483 109.729C98.1483 109.729 120.671 105.148 135.61 105.095C150.547 105.04 151.795 112.57 162.309 118.068C172.82 123.567 175.905 125.24 179.686 125.192C183.466 125.142 179.279 132.855 172.366 127.451C165.453 122.046 160.098 114.528 149.925 100.537C139.752 86.5478 136.176 70.8697 143.778 63.3925C151.38 55.9166 156.44 64.5505 169.152 69.4846C181.864 74.42 184.774 69.1836 190.951 83.689C197.123 98.1953 205.006 116.346 198.873 112.674C192.74 109.001 194.138 97.0533 185.293 84.3379C176.451 71.6227 168.677 70.7421 167.004 55.6145C165.331 40.488 176.549 24.5759 176.549 24.5759C176.549 24.5759 188.548 34.1863 198.051 39.8932C207.555 45.6014 214.725 50.2146 215.427 65.2285C216.128 80.2411 205.511 116.241 203.86 109.321C202.21 102.4 208.595 94.1241 205.893 76.5793C203.192 59.0358 210.832 45.6569 216.587 39.9325C222.346 34.2083 235.511 35.2585 235.511 35.2585C235.511 35.2585 236.789 38.362 241.375 53.8324C245.96 69.2989 251.022 83.5107 246.541 92.337C242.061 101.165 229.357 112.965 220.324 118.634C211.293 124.302 207.8 124.713 203.602 128.323C199.405 131.933 188.096 133.233 186.351 129.91C184.608 126.588 186.662 120.268 194.477 119.378C202.292 118.49 202.409 117.518 205.817 119.231C209.226 120.942 200.26 127.438 194.824 127.622C189.389 127.806 188.825 123.827 196.975 123.28C205.124 122.732 222.963 122.717 232.5 116.944C242.037 111.171 246.158 108.208 256.592 108.774C267.026 109.342 279.754 125.82 279.754 125.82C279.754 125.82 272.401 141.279 261.076 153.107C248.361 166.383 221.025 151.858 221.025 151.858Z" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={RightLookItem} d="M235.56 301.061C235.56 301.061 232.685 301.548 221.788 293.707C210.894 285.868 205.294 277.664 195.683 265.872C186.071 254.081 190.154 245.864 193.139 239.978C196.126 234.094 196.789 225.641 205.082 229.072C213.375 232.506 226.486 255.044 236.496 266.226C246.506 277.408 243.606 286.748 244.172 303.04C244.172 303.04 241.426 284.36 239.451 277.402C237.477 270.443 221.33 244.432 214.833 235.466C208.336 226.501 205.715 219.468 210.027 214.886C214.338 210.305 223.028 207.55 228.971 212.841C234.913 218.13 246.31 244.079 250.829 258.718C255.348 273.359 249.983 300.259 249.983 300.259" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={RightLookItem} d="M207.291 230.348C199.843 220.583 188.969 215.372 179.372 213.262C169.774 211.153 171.365 210.19 163.494 219.932C155.627 229.676 149.755 236.37 155.907 242.67C162.059 248.97 167.651 253.071 176.536 259.854C185.421 266.638 193.38 265.93 193.38 265.93C193.38 265.93 189.312 260.04 181.018 256.607C172.725 253.173 153.901 247.193 144.933 248.111C135.966 249.029 132.923 258.187 132.923 258.187C132.923 258.187 125.72 265.055 127.369 271.974C129.019 278.895 130.115 282.142 140.82 286.022C151.52 289.902 163.13 288.659 163.13 288.659C163.13 288.659 149.818 284.07 143.169 284.165C136.522 284.258 123.902 291.751 124.687 299.061C125.471 306.372 122.229 313.047 124.486 320.368C126.747 327.688 138.367 336.411 160.103 323.793" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>

      <motion.svg {...RightLookDelay} className={styles.aphana} width="307" height="271" viewBox="0 0 307 271" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={RightLookItem} d="M273.038 129.609C273.038 129.609 272.248 132.067 270.233 144.912C268.218 157.756 268.489 170.377 273.981 188.777C279.471 207.177 295.039 216.35 295.039 216.35C295.039 216.35 301.693 201.525 292.344 185.457C282.994 169.388 290.207 167.938 283.141 145.392C276.073 122.848 271.265 123.815 271.265 123.815C271.265 123.815 269.727 132.81 263.22 138.953C256.715 145.094 244.203 163.226 254.014 187.315C263.826 211.404 286.41 217.477 311.169 229.84C311.169 229.84 289.261 221.569 262.712 215.278C236.163 208.987 221.335 211.393 206.152 223.64C190.97 235.887 181.276 251.221 181.276 251.221C181.276 251.221 204.622 254.2 220.448 248.179C236.274 242.158 259.597 220.129 259.597 220.129C259.597 220.129 244.942 214.489 226.209 224.205C207.475 233.921 194.06 245.71 194.06 245.71" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={RightLookItem} d="M127.858 259.823C127.858 259.823 120.543 265.052 113.388 266.372C106.234 267.693 108.486 265.11 101.891 259.962C95.2957 254.816 86.2032 247.923 92.3805 244.602C98.5577 241.281 109.677 227.993 114.006 227.748C118.334 227.502 118.993 229.517 112.568 233.04C106.145 236.561 89.1909 238.484 87.3355 235.307C85.4801 232.131 87.4992 230.068 84.0189 227.726C80.5408 225.383 76.6255 223.313 81.1036 217.512C85.5824 211.71 94.5817 208.719 102.418 206.924C110.254 205.128 127.502 205.683 140.269 208.914C153.038 212.143 146.648 218.025 138.459 217.475C130.27 216.923 110.764 215.826 100.4 212.112C90.0383 208.399 87.4467 204.423 92.0054 200.532C96.5641 196.64 103.634 194.815 115.583 192.21C127.532 189.605 132.737 195.064 143.961 201.039C155.183 207.013 160.135 206.423 158.81 212.859C157.483 219.294 164.996 226.573 156.273 237.656C147.549 248.739 151.371 256.235 137.96 258.965C124.549 261.694 111.047 257.667 108.78 252.274C106.513 246.882 113.711 245.113 119.068 232.832C124.424 220.55 130.396 213.857 142.982 211.224C155.569 208.592 188.007 190.968 214.355 195.617C214.355 195.617 205.101 178.642 199.637 160.878C194.172 143.116 199.337 127.779 205.07 115.353C210.802 102.928 213.081 100.983 214.171 104.127C215.259 107.272 208.772 119.983 206.372 123.593C203.97 127.202 195.904 132.644 195.904 132.644C195.904 132.644 195.123 104.796 203.792 92.4383C212.463 80.0828 214.682 82.7959 221.74 83.7778C228.799 84.7581 232.315 77.2752 237.148 81.4745C241.981 85.6738 241.584 91.4331 232.522 103.615C223.463 115.796 223.961 126.175 218.721 130.541C213.48 134.908 195.563 135.146 195.563 135.146C195.563 135.146 185.087 130.289 179.357 125.998C173.627 121.709 171.6 109.862 163.89 100.934C156.18 92.0053 153.289 86.9584 155.722 82.5816C158.154 78.2064 174.615 76.6889 180.499 78.5476C186.383 80.4069 195.386 95.8537 194.313 108.338C194.313 108.338 189.36 101.273 183.709 91.237C178.059 81.2021 175.565 78.0526 179.92 70.7887C184.273 63.5242 191.663 65.1591 198.117 63.6627C204.568 62.1657 204.768 54.7564 213.062 54.7288C221.355 54.7013 227.57 56.8661 230.845 63.4916C234.121 70.1179 229.834 78.9736 229.834 78.9736C229.834 78.9736 231.876 66.7666 222.557 62.1156C213.24 57.4653 207.397 64.2171 199.924 57.8934C192.45 51.5713 179.865 49.6729 172.53 57.3163C168.861 61.1384 167.265 64.1718 166.586 66.2497C165.974 68.1257 164.91 69.8078 163.388 71.065C161.573 72.5603 159.771 75.2012 161.18 79.3882" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={RightLookItem} d="M262.712 215.278C234.756 205.856 215.575 195.684 184.651 182.432C153.728 169.177 137.146 160.174 125.517 150.579C113.887 140.985 106.732 134.649 105.807 118.611C104.88 102.572 107.899 92.3655 115.922 82.8429C123.946 73.3203 126.817 71.7969 128.6 74.7847C130.384 77.7717 133.268 88.753 140.737 96.4787C148.204 104.206 135.053 141.863 131.507 144.894C127.959 147.925 116.829 144.18 97.0592 152.025C77.2903 159.868 63.5592 154.956 55.338 147.517C47.1153 140.077 42.1845 135.052 42.7776 130.944C43.3713 126.835 59.5891 108.804 77.2577 113.297C94.9264 117.79 119.109 137.705 119.109 137.705C119.109 137.705 120.404 125.771 111.535 112.114C102.667 98.454 109.671 82.8493 95.2489 76.6899C80.8279 70.5288 60.0803 93.0887 54.497 99.9568C52.156 102.838 50.586 105.35 49.5496 107.296C48.2776 109.687 48.6324 112.606 50.4586 114.607L54.078 118.573" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={RightLookItem} d="M120.809 146.624C120.809 146.624 115.536 165.16 107.067 170.108C98.5965 175.054 86.0821 177.874 77.8303 178.858C69.577 179.841 53.8827 173.735 48.701 165.785C43.5193 157.835 63.1711 142.595 74.9948 138.528C86.8186 134.461 109.727 139.118 109.727 139.118C99.36 131.463 95.1133 122.09 92.2598 112.328C91.9392 111.233 93.1014 110.281 94.1011 110.828C99.3176 113.679 103.649 117.344 106.199 122.646" stroke="var(--text-ttitle-color)" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      
      </motion.svg>
      <motion.svg {...RightLookDelay} className={styles.butterfly} width="192" height="261" viewBox="0 0 192 261" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={RightLookItem} d="M26.4631 260.5C-1.99995 213.5 -6.49997 201 13 168.5C32.5 136 60 154.5 60 168.5C60 188.058 36.0504 198.711 26.4631 173.986C16.9631 149.486 8.50005 116.5 34 90C47.5 75.9706 98.963 58.3411 104.963 54.8411C110.963 51.3411 106.963 47.8411 101.963 47.8411C97.963 47.8411 66.4631 70.3411 62.9631 70.3411C59.4631 70.3411 26.4631 72.3411 26.4631 61.3411C26.4631 45.8411 75.963 51.3411 75.463 54.8411C74.963 58.3411 35.6167 44.3323 44.9631 38.3411C64.4631 25.8411 58.9631 5.84106 69.9631 2.34106C102.925 -8.14689 92.963 46.3411 95.463 45.8411C97.963 45.3411 93.0322 13.1609 95.463 9.34106C98.963 3.84106 104.463 2.84106 108.463 11.3411C111.685 18.1873 97.463 42.3411 99.963 45.8411C102.36 49.1962 109.963 48.8411 113.963 47.8411C117.963 46.8411 110.963 39.8411 104.963 44.8411C97.4832 51.0743 115.963 24.3411 128.463 24.3411C140.963 24.3411 147.865 28.1439 159.463 19.3411C166.5 14 179.5 11.3411 191.5 19.3411" stroke="var(--text-ttitle-color)" strokeWidth="1.4"/>
      </motion.svg>
      <motion.svg {...RightLookDelay} className={styles.bug} width="157" height="189" viewBox="0 0 157 189" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={RightLookItem} d="M125 1.5C92.5002 25.5 113.878 114.907 135 121C161 128.5 164.5 71.4998 137.5 78.4998C110.5 85.4998 89 108 89 132.5C89 171.567 73.7625 185.5 26.0001 185.5M26.0001 185.5C20.6667 184.5 12.9001 177.5 16.5001 169.5C21.0001 159.5 37 176.5 26.0001 185.5ZM26.0001 185.5C19.5001 192 3.00006 184 12.5001 172C22.0001 160 9.75038 159.683 6.50004 162.5C-1.00017 169 1.00004 174.5 5.00004 174C9.00004 173.5 13.1323 167.905 14 164C15 159.5 3.5 157 11 154.5C17.5 152.333 26.5 159.833 30 154.5" stroke="var(--text-ttitle-color)" strokeWidth="1.4"/>
      </motion.svg>

      <div className={`container`}>
        <Title bigtitle="品牌理念" />
        <motion.div className={styles.down} {...DownLook}>
            <Carousel/>
          <div className={styles.text} style={{display:isMobile?'none':'block'}} >
            <h3 className={styles.h3}>在生態尚未被汙染之前<br/>為客戶收集最乾淨的自然資源</h3>
            <p className={styles.p}>自從工業革命以來</p>
            <p className={styles.p}>人類為了經濟發展瘋狂地索取資源</p>
            <p className={styles.p}>環境卻在開發過程中逐漸崩壞</p>
            <p className={styles.p}>天上的霧霾、地上的重金屬、水中的漂浮垃圾</p>
            <p className={styles.p}>乾淨的資源正悄然消逝</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>為了尋回世間最後的清澈</p>
            <p className={styles.p}>因此我們跋山涉水</p>
            <p className={styles.p}>將大自然最原始的祝福帶回您的手中</p>
          </div>

          <div className={styles.text} style={{display:isMobile?'block':'none'}}>
            <h3 className={styles.h3} style={{letterSpacing:isMobilesmall? '0.2rem':'0.3rem'}}>在生態尚未被汙染之前<br/>為客戶收集最乾淨的自然資源</h3>
            <p className={styles.p} >自從工業革命以來，人類為了經濟發展瘋狂地索取資源，環境卻在開發過程中逐漸崩壞，天上的霧霾、地上的重金屬、水中的漂浮垃圾，乾淨的資源正悄然消逝...</p>
            <p className={styles.p} >為了尋回世間最後的清澈，因此我們跋山涉水，將大自然最原始的祝福帶回您的手中</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hope;