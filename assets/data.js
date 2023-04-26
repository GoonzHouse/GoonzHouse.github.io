const houseRoofPath = "M 820.52513,798.88388 C 975.83822,680.29462 1288.126,435.63975 1291.4141,438.69669 l 0.7532,0.4546 c 3.4347,-4.59889 314.26,300.34741 384.7861,367.58644 4.7324,4.51177 42.2489,37.12055 43.7202,42.60279 2.0365,7.58751 -82.6374,3.75289 -117.1876,5.86277 -0.7785,0.0475 -3.5982,8.31496 -4.3065,13.75846 -0.9711,7.46205 -0.4486,37.97767 0.3758,54.50369 0.092,1.84232 12.6875,302.26076 13.2853,319.20406";
const window1Path = "m 1179.7255,664.47327 c 15.9436,-0.80268 34.0268,-2.54816 53.9557,-0.90803 2.8098,-0.42825 3.2468,52.91 0.804,64.5606 -0.6508,3.104 -40.7018,5.26227 -50.2364,3.57778 -0.64,-0.11307 -3.8707,-14.55412 -4.0605,-35.68774 -0.083,-9.2629 -0.7879,-25.4332 -0.2651,-31.21482";
const window2Path = "m 1275.6206,670.85499 c 13.8288,-2.2803 53.8543,-5.50877 54.769,-2.68198 0.4865,1.8841 1.1732,16.19303 1.4552,18.7816 0.7424,8.75486 2.1857,25.38223 2.0327,28.10675 -0.2019,3.59704 1.5288,18.06731 0.5098,17.11696 -3.001,0.19876 -5.0022,0.84069 -11.1665,0.51764 l -42.6235,0.55171 c -5.3601,2.69998 -5.0404,-29.89288 -5.2052,-60.15004";
const window3Path = "m 1185.8181,773.57482 c 16.4991,-0.29463 50.4811,-3.68964 49.4974,-0.88389 4.0659,10.96016 3.5355,39.24442 4.4194,48.96714 0,6.50508 -40.0105,5.71578 -50.2046,6.18718 -4.856,0.43404 -2.2392,-34.17682 -3.3587,-51.26524";
const window4Path = "m 1277,767.25 c 28.8827,-0.70754 56.9773,-1.18162 56,1.25 v 0 c 2.9213,2.16551 3.4456,42.18027 1.25,64.25 2.9148,5.4423 -39.5833,2.91667 -49.25,4 -4.4563,1.47765 -7.3333,-47.66667 -8,-67";
const letterGPath = "m 790,634 c -150,96 -294.01569,176.09384 -421,307 -30.17181,31.10365 -75.17781,99.5013 -93,139 -13.26626,29.4015 -28.69891,63.7455 -29,96 -0.23425,25.0943 9.8065,52.0266 25,72 15.78769,20.7545 32.29662,29.1303 56,40 33.54902,15.3846 75.73658,26.3786 111.5,35.5 52.54249,13.4009 116.91881,24.55 122.5,21.5 9.87187,-1.3401 -17.33333,-108.3333 -25,-164";
const letterO1Path = "m 845.69971,963.07944 c -2.80045,24.22101 -11.13912,47.79966 -21.2132,70.00356 -10.67381,23.5257 -25.81355,44.871 -41.01219,65.761 -12.69483,17.4485 -25.65256,35.0936 -41.7193,49.4974 -14.79737,13.2658 -31.16841,25.5536 -49.49748,33.2341 -8.65467,3.6266 -23.33452,4.9497 -27.57716,5.6568 -4.24265,0.7071 -17.84936,-2.633 -25.45585,-7.0711 -6.0461,-3.5277 -10.82845,-9.1192 -14.84924,-14.8492 -4.78472,-6.8188 -9.12941,-14.4294 -10.6066,-22.6274 -2.55823,-14.1974 1.22632,-28.8935 3.53553,-43.1335 1.74781,-10.7782 4.44598,-21.4219 7.77818,-31.8199 5.42304,-16.9224 16.97056,-43.1335 19.79898,-49.4974 2.82843,-6.364 25.45585,-43.84065 30.4056,-50.20461 4.94975,-6.36397 27.04784,-36.53192 43.84062,-51.6188 10.60156,-9.5246 22.54683,-17.79236 35.35534,-24.04163 17.40747,-8.49311 17.60502,-8.79019 26.87005,-12.02082 56.03915,-14.98654 70.32089,31.49154 64.34672,82.7315";
const letterO2Path = "m 941.15913,1007.9807 c 0,0 28.12347,-23.56733 42.4264,-30.05202 9.23328,-4.18621 17.20487,-6.93498 27.22357,-8.48528 10.4819,-1.62197 15.7708,-3.73786 25.9862,-0.88389 8.7597,2.44728 20.411,9.65077 25.8094,16.97057 5.1914,7.03915 7.8547,14.48872 9.0156,23.15782 1.4708,10.9824 1.6816,24.3177 0.7071,35.3553 -1.1627,13.1691 -5.2823,26.6155 -9.1924,39.2444 -5.1535,16.6449 -7.5437,27.4826 -15.2028,43.1335 -6.4001,13.0782 -18.2837,29.1217 -26.1629,41.3658 -7.2961,11.3377 -13.1135,21.3164 -21.5668,31.8198 -6.28366,7.8076 -14.35865,19.9067 -21.56672,26.87 -8.31337,8.0311 -14.74366,13.2853 -24.04162,20.1525 -8.2032,6.0587 -17.57102,12.4274 -26.51651,17.3242 -9.2578,5.0677 -18.22483,7.9331 -27.93072,9.5459 -9.06805,1.5068 -18.81003,2.7636 -27.57716,0 -8.23203,-2.5949 -16.09583,-7.8985 -21.2132,-14.8492 -5.28124,-7.1733 -6.49436,-16.7 -8.13173,-25.4559 -2.14854,-11.4895 -2.80408,-23.6694 -2.12132,-35.0018 0.91184,-15.1346 6.18054,-31.357 10.25305,-45.9619 3.2238,-11.5612 11.56231,-25.8835 16.617,-36.7695 7.47391,-16.0961 12.32692,-24.6678 21.92031,-39.598 8.41321,-13.0935 18.53424,-25.777 27.93072,-38.1837 7.88996,-10.4176 20.5061,-27.2237 20.5061,-27.2237";
const letterNPath = "m 1111.5,1225 c 20.9892,-78.8349 37.4692,-158.3139 63,-236.5 9.5027,-31.09667 -1.9167,5.5 -7,22.5 0,0 12.9832,-1.3238 19.5,-1.5 7.3325,-0.1982 14.7802,-0.7964 22,0.5 9.5456,1.714 18.7729,5.27 27.5,9.5 6.9477,3.3675 13.6818,7.4246 19.5,12.5 5.6126,4.896 10.9085,10.4752 14.5,17 3.5335,6.4194 4.9822,13.8313 6.5,21 1.7727,8.373 3.169,16.943 3,25.5 -0.1899,9.6158 -2.733,19.046 -4.5,28.5 -3.4774,18.6053 -7.4931,37.1169 -12,55.5 -4.1977,17.1218 -9.6904,33.906 -14,51 -1.348,5.3467 -3.7071,16.1213 -3.7071,16.1213";
const letterZPath = "m 1374.6156,1021.0622 c 0,0 26.4501,1.3303 39.598,2.8284 12.0896,1.3775 24.2021,2.9389 36.0624,5.6569 10.4657,2.3984 24.2989,4.8517 30.8198,9.3639 18.3362,6.4565 34.4663,38.333 17.9559,51.2193 0,0 -10.3448,14.6049 -28.6232,31.3198 -13.5241,12.3672 -27.5922,24.239 -42.6083,34.7445 -11.9276,8.3447 -25.3355,14.3804 -37.527,22.3345 -14.7931,9.6515 -45.7932,18.4613 -43.1482,30.7591 0.8448,3.9279 26.0943,3.1971 39.1777,4.4498 17.7432,1.6988 35.535,2.8477 53.3112,4.1568 23.3845,1.7221 70.1751,4.864 70.1751,4.864";
const houseBorderPath = "m 1003.5,1561 20.5,-188.5 c 0,0 1.235,-4.5535 2.5,-6.5 1.5412,-2.3716 3.6579,-4.4143 6,-6 2.1021,-1.4232 4.5268,-2.4276 7,-3 3.2516,-0.7525 10,-0.5 10,-0.5 l 556,-8 c 0,0 6.7516,0.2916 9.5,2 2.5202,1.5666 4.3137,4.28 5.5,7 1.2817,2.9385 1.0608,6.2329 1,9.375 -0.1116,5.7678 -1.5434,11.4508 -2.5,17.125 -7.8573,46.6078 -22.5,140 -22.5,140 0,0 -1.686,4.5611 -3.5,6 -3.552,2.8176 -8.5525,3.1197 -13,4 -8.8665,1.755 -17.498,2.3141 -26.5,3.125 -176.9608,15.9408 -353.8394,38.2221 -531.5,45.875 -2.8307,0.1219 -5.7809,0.7963 -8.5,0 -2.8063,-0.8218 -5.5635,-2.4459 -7.3865,-4.7322 -1.605,-2.013 -2.1713,-4.7316 -2.6135,-7.2678 -0.5725,-3.2838 0,-10 0,-10";
const houseLetterHPath = "m 1053.0588,1495.3541 c -0.7639,-3.284 -0.6092,-6.7158 -0.8839,-10.0763 -0.3177,-3.8873 -0.6467,-7.7743 -0.8839,-11.6673 -0.2332,-3.8271 -0.3425,-7.6609 -0.5303,-11.4905 -0.2226,-4.5379 -0.5892,-9.0699 -0.7071,-13.6118 -0.1254,-4.8302 -0.081,-9.6644 0,-14.4956 0.088,-5.3055 0.2143,-10.6131 0.5303,-15.91 0.1657,-2.7777 0.029,-5.6207 0.716,-8.3173 0.8098,-3.1794 2.0001,-6.3767 3.9497,-9.0156 1.5753,-2.1323 3.6644,-3.9855 6.0256,-5.1909 2.9331,-1.4974 6.3289,-2.5272 9.6129,-2.2803 2.9416,0.2211 5.6865,1.777 8.2086,3.3069 2.2862,1.3868 4.5244,3.0507 6.0962,5.2139 2.005,2.7595 2.9509,6.1817 3.9231,9.4512 1.0222,3.4376 1.3189,7.0504 1.9749,10.5763 0.7125,3.8297 1.3179,7.6807 2.1302,11.4905 0.6068,2.8457 0.5743,5.9765 2.0481,8.4853 0.9371,1.5951 2.5491,2.723 4.0784,3.7641 1.4212,0.9675 2.9761,1.8275 4.6443,2.2437 2.2343,0.5574 4.6848,0.8866 6.9032,0.2688 1.6194,-0.451 3.3559,-1.3264 4.2123,-2.7729 1.8673,-3.154 0.6832,-7.3004 0.8839,-10.9602 0.3325,-6.0628 0.2903,-12.1408 0.5303,-18.208 0.093,-2.3581 0.051,-4.7306 0.3536,-7.0711 0.3666,-2.8385 0.632,-5.7744 1.764,-8.4031 0.8758,-2.0337 2.1644,-3.9505 3.7856,-5.4587 1.7899,-1.6651 4.0389,-2.8346 6.3122,-3.7337 2.4043,-0.9509 5.0011,-1.4024 7.571,-1.6857 2.5742,-0.2837 5.3684,-0.9745 7.7693,0 2.6845,1.0855 4.5414,3.6977 6.2427,6.0408 1.8109,2.4939 2.9949,5.4152 4.0569,8.3085 1.3066,3.5599 1.9455,7.3316 2.807,11.0245 0.8041,3.4468 1.5095,6.9163 2.2035,10.3869 0.9982,4.9915 1.912,9.9996 2.8195,15.0083 0.6761,3.7315 1.4124,7.4543 1.956,11.2075 0.5527,3.8158 1.027,7.6465 1.3259,11.4905 0.2834,3.6454 0.3683,7.3045 0.4419,10.9601 0.085,4.2123 0.6027,8.4697 0,12.6396 -0.4614,3.1924 -0.737,6.7524 -2.74,9.2807 -1.811,2.2859 -4.8414,3.3896 -7.6015,4.3311 -3.4072,1.1623 -7.0952,1.4608 -10.6949,1.5026 -2.284,0.027 -4.5825,-0.2726 -6.806,-0.7955 -2.2862,-0.5376 -4.6029,-1.199 -6.6291,-2.3865 -2.2884,-1.3412 -4.5835,-2.979 -6.0104,-5.215 -1.4346,-2.2482 -1.2993,-5.1829 -2.2097,-7.6897 -0.7699,-2.1201 -1.812,-4.1313 -2.74,-6.1872 -0.6671,-1.4779 -0.7605,-3.4143 -2.033,-4.4194 -2.2399,-1.7692 -5.5428,-1.6358 -8.3968,-1.6794 -2.8381,-0.043 -5.9973,-0.1018 -8.3969,1.4142 -1.2162,0.7684 -2.1477,2.1347 -2.4749,3.5356 -0.5763,2.467 0.8862,4.9932 1.149,7.513 0.2725,2.6121 0.6896,5.2519 0.442,7.8665 -0.2291,2.4188 -0.9146,4.7963 -1.7678,7.0711 -1.0227,2.7266 -1.9948,5.6453 -3.9774,7.7782 -1.9713,2.1206 -4.735,3.436 -7.4247,4.5078 -3.5001,1.3947 -7.2837,2.2355 -11.0485,2.3865 -2.673,0.1072 -5.4155,-0.2196 -7.955,-1.0607 -2.8795,-0.9537 -5.666,-2.4288 -7.9549,-4.4194 -1.5874,-1.3804 -2.7775,-3.2001 -3.8007,-5.0381 -1.7058,-3.0644 -3.0061,-6.3951 -3.8007,-9.8111";
const houseLetterOPath = "m 1221.8809,1391.5859 c -3.9524,0.057 -7.8977,0.9338 -11.668,2.1211 -3.7724,1.188 -7.3935,2.9116 -10.7832,4.9492 -3.4949,2.1009 -6.9144,4.4691 -9.7227,7.4258 -2.6564,2.7968 -4.6852,6.1635 -6.541,9.545 -2.0957,3.8187 -3.8653,7.852 -5.1269,12.0214 -1.3021,4.3031 -2.2867,8.7661 -2.4746,13.2578 -0.1956,4.6749 0.5728,9.3642 1.414,13.9668 0.8223,4.4994 1.8837,8.9933 3.5371,13.2579 1.8483,4.7672 4.0684,9.4723 7.0703,13.6113 2.5687,3.5417 5.8999,6.4867 9.1914,9.3691 2.8816,2.5232 5.8217,5.0777 9.1934,6.8946 3.5278,1.901 7.3666,3.3785 11.3145,4.0664 4.9924,0.8699 10.1819,0.6988 15.2011,0 4.9143,-0.6842 9.8109,-1.9968 14.3203,-4.0664 3.5946,-1.6497 6.7107,-4.2001 9.8985,-6.5411 3.6124,-2.6528 7.3871,-5.1935 10.4297,-8.4843 2.6742,-2.8924 5.0512,-6.1538 6.7187,-9.7227 1.9668,-4.2093 3.0567,-8.8356 3.711,-13.4355 0.639,-4.4925 0.6149,-9.0948 0.1777,-13.6114 -0.3886,-4.0145 -1.2122,-8.0151 -2.4746,-11.8457 -1.502,-4.5576 -3.6162,-8.922 -6.0117,-13.08 -2.4484,-4.2498 -5.0842,-8.4868 -8.4844,-12.0215 -3.2928,-3.4229 -7.2932,-6.1346 -11.3145,-8.6621 -4.3061,-2.7065 -8.7673,-5.3441 -13.6113,-6.8946 -4.4844,-1.4354 -9.2568,-2.1901 -13.9648,-2.1211 z m 3.5781,41.4004 c 1.3449,-0.011 2.7042,0.2256 3.9355,0.6719 1.8731,0.6789 3.444,2.1531 4.6836,3.7129 1.5416,1.9397 2.5821,4.3128 3.1817,6.7168 0.6138,2.4611 0.9611,5.1389 0.3535,7.6016 -0.4744,1.9231 -1.5492,3.7825 -3.0039,5.1269 -1.5871,1.4668 -3.709,2.4349 -5.834,2.8281 -2.0354,0.3766 -4.3197,0.363 -6.1875,-0.5293 -1.8426,-0.8802 -3.1929,-2.668 -4.2422,-4.4199 -1.2734,-2.1262 -2.0131,-4.6084 -2.2988,-7.0703 -0.2454,-2.1145 9e-4,-4.303 0.5312,-6.3652 0.4319,-1.6866 1.0616,-3.39 2.1211,-4.7715 0.9689,-1.2633 2.2036,-2.4936 3.711,-3.0059 0.9644,-0.3278 2.0028,-0.4874 3.0488,-0.4961";
const houseLetterUPath = "m 1288.7021,1413.3297 c 0.5138,-1.8819 1.2037,-3.8235 2.4749,-5.3033 1.1075,-1.2893 2.6752,-2.171 4.2426,-2.8284 2.3872,-1.0013 5.0266,-1.8589 7.6014,-1.591 2.6244,0.2731 5.1322,1.6053 7.2479,3.1819 2.0448,1.5238 3.7208,3.5991 4.9497,5.8337 1.8141,3.2989 2.4761,7.1235 3.3588,10.7834 0.7291,3.0229 1.0312,6.1334 1.591,9.1923 0.6158,3.3649 0.9603,6.8002 1.9445,10.0763 0.7525,2.5048 1.0424,5.5194 3.0052,7.2479 1.0084,0.888 2.5627,1.2759 3.8891,1.0606 1.468,-0.2382 2.767,-1.3268 3.7123,-2.4749 1.4607,-1.7742 2.1093,-4.1308 2.6517,-6.3639 0.8513,-3.5046 0.7042,-7.1814 0.8838,-10.7834 0.1643,-3.2963 0.083,-6.6005 0.1768,-9.8995 0.086,-3.0063 0.239,-6.0103 0.3536,-9.0156 0.1213,-3.1818 0.046,-6.3767 0.3535,-9.5459 0.2191,-2.2563 0.4592,-4.5319 1.0607,-6.7176 0.6736,-2.4476 1.3757,-4.9892 2.8284,-7.071 1.361,-1.9504 3.3609,-3.4007 5.3033,-4.773 1.9166,-1.3541 3.9862,-2.5448 6.1872,-3.3588 2.3739,-0.8779 4.8937,-1.5604 7.4246,-1.5909 2.2188,-0.027 4.5268,0.306 6.5407,1.2374 1.7875,0.8267 3.193,2.3305 4.5962,3.7123 1.3117,1.2917 2.5688,2.676 3.5356,4.2426 1.3166,2.1334 2.3565,4.4727 3.0052,6.8943 0.9514,3.5514 0.9942,7.2917 1.2374,10.9602 0.195,2.9404 0.1833,5.892 0.1768,8.8388 -0.011,4.8333 -0.054,9.6717 -0.3536,14.4957 -0.2937,4.7284 -0.6633,9.4645 -1.4141,14.1421 -0.6889,4.2912 -1.7969,8.506 -2.8285,12.728 -0.8685,3.5545 -1.709,7.1229 -2.8284,10.6066 -0.8671,2.6986 -1.7747,5.4014 -3.0052,7.9549 -1.2503,2.5946 -2.8279,5.0242 -4.4194,7.4246 -1.3742,2.0726 -2.8503,4.0813 -4.4195,6.0105 -2.4487,3.0104 -4.797,6.1777 -7.7781,8.662 -2.3369,1.9474 -4.9368,3.6868 -7.7782,4.773 -2.4615,0.9409 -5.1536,1.1775 -7.7782,1.4142 -3.6386,0.3281 -7.3473,0.5432 -10.9601,0 -3.1703,-0.4767 -6.2963,-1.4535 -9.1924,-2.8284 -2.8789,-1.3668 -5.421,-3.3707 -7.955,-5.3033 -2.3582,-1.7985 -4.7039,-3.6564 -6.7175,-5.8337 -2.4887,-2.6908 -4.7266,-5.654 -6.5408,-8.8388 -1.8038,-3.1666 -3.2357,-6.5738 -4.2426,-10.0763 -1.4186,-4.9344 -1.9546,-10.0949 -2.4748,-15.2028 -0.2869,-2.8163 -0.2467,-5.6564 -0.3536,-8.4853 -0.1313,-3.4761 -0.3214,-6.9513 -0.3536,-10.4297 -0.035,-3.8305 0.038,-7.6625 0.1768,-11.4906 0.075,-2.0644 0.1951,-4.1275 0.3536,-6.1871 0.1408,-1.8298 0.047,-3.7097 0.5303,-5.4801";
const houseLetterSPath = "m 1395.8288,1487.3991 c 1.2132,-1.4862 2.7241,-2.7167 4.2426,-3.8891 1.7207,-1.3284 3.5917,-2.4586 5.4801,-3.5355 2.2891,-1.3055 5.0758,-1.814 7.0711,-3.5355 1.0892,-0.9397 2.5747,-2.1005 2.4748,-3.5356 -0.1621,-2.3292 -3.0903,-3.5078 -4.7729,-5.1265 -2.0176,-1.9407 -4.3122,-3.5757 -6.364,-5.4801 -2.8707,-2.6645 -5.9021,-5.2183 -8.3085,-8.3085 -2.4028,-3.0857 -4.4326,-6.4978 -6.0104,-10.0763 -1.8125,-4.1108 -3.3153,-8.4488 -3.8891,-12.9047 -0.6176,-4.7955 -0.9741,-9.9005 0.5303,-14.4956 1.2408,-3.7899 4.1241,-6.8702 6.7176,-9.8995 2.3589,-2.7553 5.2082,-5.0557 7.9549,-7.4247 3.0802,-2.6567 6.0502,-5.5219 9.546,-7.6014 3.2451,-1.9304 6.8041,-3.3652 10.4298,-4.4194 4.1301,-1.2009 8.4273,-2.1906 12.7279,-2.1213 3.6051,0.058 7.5177,0.2615 10.6066,2.1213 2.4757,1.4905 4.0035,4.2335 5.4801,6.7175 1.4314,2.408 2.7889,5.0046 3.182,7.7782 0.4657,3.2859 0.5214,6.9822 -1.0607,9.8995 -0.9784,1.8041 -3.0261,2.8119 -4.773,3.8891 -3.188,1.9658 -7.0378,2.6752 -10.253,4.5962 -2.4889,1.4871 -5.7447,2.6416 -6.8943,5.3033 -0.7044,1.631 -0.2818,3.7232 0.5303,5.3033 1.1833,2.3024 3.8786,3.4298 5.8337,5.1266 2.0514,1.7804 4.11,3.5528 6.1871,5.3032 2.0481,1.726 4.2962,3.2298 6.1872,5.1265 1.8325,1.838 3.5103,3.8508 4.9498,6.0105 1.8859,2.8294 3.5118,5.8578 4.7729,9.0156 1.1347,2.8414 2.1596,5.7955 2.4749,8.8388 0.4564,4.4057 0.3069,8.9921 -0.8839,13.2583 -0.9991,3.5792 -2.8452,6.966 -5.1265,9.8994 -2.178,2.8006 -5.2517,4.7734 -7.9549,7.0711 -2.7768,2.3602 -5.5719,4.7049 -8.4853,6.8943 -2.8095,2.1113 -5.7606,4.0274 -8.6621,6.0104 -3.0494,2.0841 -6.0098,4.3127 -9.1924,6.1872 -2.6795,1.5781 -5.2196,3.8833 -8.3085,4.2426 -3.1941,0.3715 -6.4987,-0.8486 -9.3691,-2.2981 -2.4649,-1.2448 -4.6385,-3.1474 -6.364,-5.3033 -1.6138,-2.0164 -2.7455,-4.4354 -3.5355,-6.8943 -0.8565,-2.6659 -1.1821,-5.509 -1.2375,-8.3085 -0.054,-2.726 0.015,-5.5473 0.8839,-8.1317 0.657,-1.954 1.8783,-3.7063 3.182,-5.3033";
const houseLetterEPath = "m 1471.4892,1452.7509 c -0.037,-3.8929 0.4419,-7.7752 0.5303,-11.6673 0.072,-3.1811 0.031,-6.3641 0,-9.5459 -0.03,-3.0646 -0.1472,-6.1278 -0.1767,-9.1924 -0.024,-2.5337 -0.5821,-5.1354 0,-7.6014 0.6963,-2.9494 2.0542,-5.8651 4.0658,-8.1317 2.0612,-2.3225 5.1028,-3.5503 7.7782,-5.1266 3.2718,-1.9276 6.6912,-3.5962 10.094,-5.2818 4.2501,-2.1053 8.5448,-4.1239 12.887,-6.0319 3.1859,-1.3999 6.355,-2.866 9.6547,-3.9712 4.0069,-1.3421 8.117,-2.3973 12.2634,-3.2123 4.7569,-0.9351 9.5695,-1.8761 14.4173,-1.9142 4.151,-0.033 8.981,-0.9537 12.3692,1.4446 3.3355,2.361 4.9235,6.9519 5.389,11.0119 0.2687,2.3431 -0.5216,4.7921 -1.5909,6.8943 -1.7565,3.4533 -4.5613,6.3962 -7.614,8.7818 -2.6309,2.056 -5.7908,3.4001 -8.9298,4.5381 -4.149,1.5043 -8.5973,1.9989 -12.9047,2.9598 -4.8197,1.0752 -9.6585,2.063 -14.478,3.1391 -2.8198,0.6296 -5.669,1.1486 -8.4475,1.9408 -3.685,1.5077 -3.2914,2.4158 0.2248,1.7981 2.7559,-0.415 5.4191,-1.3053 8.1318,-1.9445 3.2973,-0.7769 6.5665,-1.6926 9.8995,-2.2981 3.0994,-0.5631 6.2339,-0.9306 9.3691,-1.2374 2.7619,-0.2702 5.5493,-0.8275 8.3085,-0.5304 2.1326,0.2297 4.4269,0.5422 6.1872,1.7678 1.7991,1.2525 3.0462,3.2797 3.8891,5.3033 0.8717,2.0926 1.1608,4.4528 1.0607,6.7175 -0.1288,2.9126 -0.6013,5.9975 -2.1214,8.4853 -1.3064,2.138 -3.522,3.6381 -5.6568,4.9497 -3.6267,2.2283 -7.8208,3.3832 -11.8441,4.773 -4.0012,1.3821 -8.146,2.3088 -12.1976,3.5355 -3.3711,1.0207 -7.0444,1.3892 -10.0762,3.182 -1.5426,0.9122 -3.4806,1.9673 -3.8891,3.7123 -0.3144,1.3431 0.4964,2.8593 1.4142,3.8891 0.8767,0.9836 2.2288,1.5987 3.5355,1.7678 2.5673,0.3322 5.1566,-0.74 7.6014,-1.591 3.111,-1.0829 5.7604,-3.2473 8.8389,-4.4194 2.1106,-0.8036 4.286,-1.6379 6.5407,-1.7678 3.5692,-0.2056 7.2558,0.3447 10.6066,1.591 1.2411,0.4616 2.4193,1.1881 3.3588,2.1213 1.9367,1.9237 3.2422,4.4315 4.4194,6.8943 0.9643,2.0174 2.0411,4.1294 2.1213,6.364 0.1025,2.8565 -0.5957,5.8913 -2.1213,8.3085 -1.7195,2.7243 -4.6868,4.4893 -7.4246,6.1872 -3.7219,2.3082 -8.0825,3.3876 -12.0209,5.3033 -3.6033,1.7527 -6.9854,3.9415 -10.6066,5.6568 -2.7691,1.3117 -5.5586,2.6278 -8.4852,3.5355 -3.5653,1.1058 -7.2333,2.0869 -10.9602,2.2981 -3.7817,0.2143 -7.6968,0.064 -11.3137,-1.0606 -2.1915,-0.6816 -4.2269,-1.9143 -6.0104,-3.3588 -2.4338,-1.9712 -4.5353,-4.4101 -6.1872,-7.071 -1.9509,-3.1424 -2.877,-6.8157 -4.2426,-10.2531 -0.9778,-2.4613 -2.0992,-4.8786 -2.8285,-7.4246 -0.926,-3.2329 -1.5188,-6.5637 -1.9445,-9.8995 -0.3737,-2.9278 -0.3469,-5.8929 -0.5303,-8.8388 -0.1137,-1.827 -0.3362,-3.6497 -0.3536,-5.4801";

export default {
    houseRoofPath,
    window1Path,
    window2Path,
    window3Path,
    window4Path,
    letterGPath,
    letterO1Path,
    letterO2Path,
    letterNPath,
    letterZPath,
    houseBorderPath,
    houseLetterHPath,
    houseLetterOPath,
    houseLetterUPath,
    houseLetterSPath,
    houseLetterEPath,
  };