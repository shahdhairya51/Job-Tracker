import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./companyCard.css";
import { useDispatch } from "react-redux";
import { removeCard } from "../redux/listData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function MyModal(props) {
  // const [inputCompany, setInputCompany] = useState("");
  // const [inputRole, setInputRole] = useState("");
  const dispatch = useDispatch();
  // function onSave() {
  //   // console.log("onSaveGotClicked");
  //   const idx = props.index;
  //   dispatch(addCard({ inputCompany, inputRole, idx }));

  //   // console.log(props.index);

  //   props.onHide();
  // }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ background: "white", alignItems: "center" }}
    >
      <main
        aria-label="Job Modal"
        className="rmq-4c671293 modal modal-large no-padding"
        data-radium="true"
        style={{
          display: "flex",
          flexDirection: "row",
          top: "2%",
          overflow: "hidden",
          width: 1020,
          maxWidth: "90%",
          minHeight: "95%",
        }}
      >
        <div
          data-radium="true"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            data-radium="true"
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flexShrink: 0,
              zIndex: 1,
              boxShadow: "rgba(25, 4, 69, 0.03) 0px 2px 5px",
              borderBottom: "1px solid rgba(25, 4, 69, 0.1)",
            }}
          >
            <div
              data-radium="true"
              style={{
                display: "flex",
                flexDirection: "row",
                minWidth: 0,
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                height: 60,
                padding: "0px 10px",
              }}
            >
              <div
                data-radium="true"
                style={{
                  position: "relative",
                  height: "100%",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <a
                  tabIndex={0}
                  role="button"
                  target="_blank"
                  data-radium="true"
                  style={{
                    cursor: "pointer",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 8px",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 6,
                    letterSpacing: 0,
                    fontFamily: "Lato",
                    transition: "all 0.4s ease-out 0s",
                    backgroundColor: "rgb(106, 79, 235)",
                    textAlign: "center",
                    fontSize: 13,
                    border: "1px solid rgba(0, 0, 0, 0)",
                    position: "relative",
                    boxShadow: "rgba(25, 4, 69, 0.05) 0px 4px 10px",
                    marginRight: 8,
                    height: 28,
                  }}
                >
                  Move
                </a>
              </div>
              <Button
                tabIndex={0}
                role="button"
                target="_blank"
                data-radium="true"
                onClick={props.onHide}
                style={{
                  cursor: "pointer",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  boxSizing: "border-box",
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 8px",
                  color: "rgb(24, 0, 69)",
                  fontWeight: 600,
                  borderRadius: 6,
                  letterSpacing: 0,
                  fontFamily: "Lato",
                  transition: "all 0.4s ease-out 0s",
                  backgroundColor: "white",
                  textAlign: "center",
                  fontSize: 13,
                  border: "1px solid rgba(25, 4, 69, 0.1)",
                  position: "relative",
                  boxShadow: "rgba(25, 4, 69, 0.05) 0px 4px 10px",
                  height: 28,
                }}
              >
                Close
              </Button>
            </div>
            <div
              className="rmq-9422e1d0"
              data-radium="true"
              style={{
                display: "flex",
                flexDirection: "row",
                minWidth: 0,
                alignItems: "center",
                padding: "5px 45px 60px",
                gridArea: "1 / 1 / 2 / 2",
              }}
            >
              <div
                alt="Logo for American Airlines"
                className="Logo__ImageLogo-k8rmq0-0 hTCzwj"
                style={{ marginRight: 25 }}
              />
              <div data-radium="true">
                <h1
                  title={props.role}
                  className="Text__Paragraph-sc-1rtclo2-1 cUHRZa"
                  style={{ marginBottom: 7 }}
                >
                  {props.role}
                </h1>
                <p
                  color="rgba(25,4,69,0.7)"
                  title={props.companyName}
                  className="Text__Paragraph-sc-1rtclo2-1 gKpNIG"
                >
                  {props.companyName}
                </p>
              </div>
            </div>
            <div
              className="ScrollContainer-mareba-0 exeKQb"
              style={{
                display: "flex",
                flexDirection: "row",
                height: 48,
                padding: "0px 20px",
                overflowX: "auto",
              }}
            >
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: 680,
                  width: "100%",
                }}
              >
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-info"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid rgb(106, 79, 235)",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M576 224l-32 0.000976562v286c0 0.335938 -0.0957031 0.65625 -0.0957031 1.00781s0.0957031 0.655273 0.0957031 0.991211c0 17.6641 -14.3359 32 -32 32h-64c-17.6641 0 -32 -14.3359 -32 -32s14.3359 -32 32 -32h32v-256h-32c-17.6641 0 -32 -14.3359 -32 -32 s14.3359 -32 32 -32h128c17.6641 0 32 14.3359 32 32s-14.3359 32 -32 32zM512 608.001c35.3438 0 64 28.6562 64 64s-28.6562 64 -64 64s-64 -28.6562 -64 -64s28.6562 -64 64 -64zM512 960.001c-282.768 0 -512 -229.232 -512 -512c0 -282.784 229.232 -512 512 -512 c282.784 0 512 229.216 512 512c0 282.768 -229.216 512 -512 512zM512 -1.00684c-247.024 0 -448 201.984 -448 449.009c0 247.025 200.976 448 448 448s448 -200.976 448 -448s-200.976 -449.009 -448 -449.009z"
                        data-radium="true"
                        style={{ fill: "rgb(24, 0, 69)" }}
                      />
                    </svg>
                    <p
                      color="#180045"
                      title="Job Info"
                      className="Text__Paragraph-sc-1rtclo2-1 gfibJu"
                      style={{ marginLeft: 10 }}
                    >
                      Job Info
                    </p>
                  </div>
                </a>
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-activities"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid transparent",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M96 512h-64c-17.6641 0 -32 -14.3359 -32 -32v-64c0 -17.6641 14.3359 -32 32 -32h64c17.6641 0 32 14.3359 32 32v64c0 17.6641 -14.3359 32 -32 32zM992 480h-672c-17.6641 0 -32 -14.3359 -32 -32s14.3359 -32 32 -32h672c17.6641 0 32 14.3359 32 32 s-14.3359 32 -32 32zM96 256h-64c-17.6641 0 -32 -14.3359 -32 -32v-64c0 -17.6641 14.3359 -32 32 -32h64c17.6641 0 32 14.3359 32 32v64c0 17.6641 -14.3359 32 -32 32zM992 224h-672c-17.6641 0 -32 -14.3359 -32 -32s14.3359 -32 32 -32h672 c17.6641 0 32 14.3359 32 32s-14.3359 32 -32 32zM96 768h-64c-17.6641 0 -32 -14.3359 -32 -32v-64c0 -17.6641 14.3359 -32 32 -32h64c17.6641 0 32 14.3359 32 32v64c0 17.6641 -14.3359 32 -32 32zM320 672h672c17.6641 0 32 14.3359 32 32s-14.3359 32 -32 32h-672 c-17.6641 0 -32 -14.3359 -32 -32s14.3359 -32 32 -32z"
                        data-radium="true"
                        style={{ fill: "rgba(25, 4, 69, 0.7)" }}
                      />
                    </svg>
                    <p
                      color="rgba(25,4,69,0.7)"
                      title="Activities"
                      className="Text__Paragraph-sc-1rtclo2-1 ilKyon"
                      style={{ marginLeft: 10 }}
                    >
                      Activities
                    </p>
                  </div>
                </a>
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-notes"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid transparent",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M849.152 960h-637.999c-46 0 -66.0322 -34 -66.0322 -66v-127.312h-34.9277c-17.3115 0 -31.3438 -14.0322 -31.3438 -31.3447c0 -17.3115 14.0322 -31.3438 31.3438 -31.3438h34.9277v-128.752h-31.9355c-17.3125 0 -31.3447 -14.0322 -31.3447 -31.3438 c0 -17.3125 14.0322 -31.3447 31.3438 -31.3447h31.9355v-129.44h-32.624c-17.3115 0 -31.3438 -14.0322 -31.3438 -31.3438s14.0322 -31.3438 31.3438 -31.3438h32.624v-128.464h-32.624c-17.3115 0 -31.3438 -14.0322 -31.3438 -31.3438 s14.0322 -31.3438 31.3438 -31.3438h32.624v-129.28c0 -53.0244 41.5361 -64 64.5283 -64h639.504c53.0244 0 96 42.9756 96 96v832c0 53.0244 -42.96 96 -96.0002 96.0002zM209.121 0l-0.000976562 129.279h33.3438c17.3115 0 31.3438 14.0322 31.3438 31.3438 c0 17.3125 -14.0322 31.3447 -31.3438 31.3447h-33.3438v128.464h33.3438c17.3115 0 31.3438 14.0322 31.3438 31.3438s-14.0322 31.3438 -31.3438 31.3438h-33.3438v129.44h34.0322c17.3125 0 31.3447 14.0322 31.3447 31.3447 c0 17.3115 -14.0322 31.3438 -31.3438 31.3438h-34.0322v128.752h31.0244c17.3115 0 31.3438 14.0322 31.3438 31.3438c0 17.3125 -14.0322 31.3447 -31.3438 31.3447h-31.0244v127.312c0 0.751953 0.0644531 1.37598 0.160156 1.93555 c0.496094 0.0322266 1.12012 0.0644531 1.87207 0.0644531h510v-896h-512.032zM881.152 31.999c0 -17.6641 -14.3359 -32 -32 -32h-64v896h64c17.6641 0 32 -14.3359 32 -32v-832z"
                        data-radium="true"
                        style={{ fill: "rgba(25, 4, 69, 0.7)" }}
                      />
                    </svg>
                    <p
                      color="rgba(25,4,69,0.7)"
                      title="Notes"
                      className="Text__Paragraph-sc-1rtclo2-1 ilKyon"
                      style={{ marginLeft: 10 }}
                    >
                      Notes
                    </p>
                  </div>
                </a>
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-contacts"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid transparent",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M746 124.72l-201.471 111.602c74.8799 58.9121 95.2158 174.688 95.2158 239.601v135.12c0 89.4717 -118.88 189.12 -238.288 189.12c-119.376 0 -241.408 -99.6641 -241.408 -189.12v-135.12c0 -59.0244 24.9756 -178.433 100.624 -239.089l-206.672 -112.112 s-54 -24.0645 -54 -54.0645v-81.0879c0 -29.8398 24.2236 -54.0635 54 -54.0635h692c29.8076 0 54.0312 24.2236 54.0312 54.0635v81.0879c0 31.8076 -54.0322 54.0635 -54.0322 54.0635zM736.033 -0.495117h-672.031v57.2158 c4.5918 3.34375 11.0078 7.21582 16.0635 9.53613c1.50391 0.688477 3.00781 1.4082 4.43164 2.22461l206.688 112.096c18.8477 10.2236 31.3438 29.1836 33.248 50.5273s-7.00781 42.2559 -23.7119 55.6641c-53.6641 43.0244 -76.6562 138.32 -76.6562 189.152v135.12 c0 45.9678 86.6562 125.12 177.408 125.12c92.4316 0 174.288 -78.0645 174.288 -125.12v-135.12c0 -50.1279 -15.5684 -145.84 -70.7842 -189.28c-16.9121 -13.3115 -26 -34.2236 -24.2236 -55.6641c1.80762 -21.4404 14.2559 -40.5283 33.1201 -50.8486l201.472 -111.6 c1.77637 -0.975586 4.03223 -2.03125 5.9043 -2.84766c4.71973 -2 10.5273 -5.34375 14.7832 -8.28809v-57.8877zM969.97 284.064l-204.465 111.601c74.8799 58.9121 98.2236 174.688 98.2236 239.601v135.12c0 89.4717 -121.872 190.128 -241.28 190.128 c-77.5996 0 -156.943 -42.1924 -203.119 -96.2246c26.3359 -1.63184 55.376 -1.66406 80.4639 -9.66406c33.7119 26.2559 76.3682 41.8721 122.656 41.8721c92.4316 0 177.279 -79.0557 177.279 -126.128v-135.12c0 -50.1279 -18.5596 -145.84 -73.7754 -189.28 c-16.9121 -13.3115 -26 -34.2236 -24.2236 -55.6641c1.80762 -21.4404 14.2559 -40.5283 33.1201 -50.8486l204.464 -111.6c1.77637 -0.975586 4.03223 -2.03125 5.9043 -2.84766c4.71973 -2 10.5273 -5.34375 14.7832 -8.28809v-56.9121h-129.184 c19.5039 -14.7197 25.4082 -35.7754 32.9766 -63.999h106.192c29.8076 0 54.0312 24.2236 54.0312 54.0635v80.0957c-0.015625 31.8398 -54.0479 54.0957 -54.0479 54.0957z"
                        data-radium="true"
                        style={{ fill: "rgba(25, 4, 69, 0.7)" }}
                      />
                    </svg>
                    <p
                      color="rgba(25,4,69,0.7)"
                      title="Contacts"
                      className="Text__Paragraph-sc-1rtclo2-1 ilKyon"
                      style={{ marginLeft: 10 }}
                    >
                      Contacts
                    </p>
                  </div>
                </a>
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-documents"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid transparent",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M768 960h-352c-35.3438 0 -64 -28.6562 -64 -64h352v-256h256v-512h-224v-64h224c35.3438 0 64 28.6562 64 64v575.984zM768 704v165.504l165.472 -165.504h-165.472zM64 832c-35.3438 0 -64 -28.6562 -64 -64v-768c0 -35.3438 28.6562 -64 64 -64h544 c35.3438 0 64 28.6562 64 64v575.984l-256 256.016h-352zM608 0h-544v768h288v-256h256v-512zM416 576v165.504l165.472 -165.504h-165.472z"
                        data-radium="true"
                        style={{ fill: "rgba(25, 4, 69, 0.7)" }}
                      />
                    </svg>
                    <p
                      color="rgba(25,4,69,0.7)"
                      title="Documents"
                      className="Text__Paragraph-sc-1rtclo2-1 ilKyon"
                      style={{ marginLeft: 10 }}
                    >
                      Documents
                    </p>
                  </div>
                </a>
                <a
                  href="/boards/62b9a54ca7aed90028c975c3/job/62e793bad81c060028eda68a/job-company"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    margin: "0px 5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "0px 10px 0px 5px",
                      boxSizing: "border-box",
                      borderBottom: "2px solid transparent",
                    }}
                  >
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 1024 900"
                      data-radium="true"
                      style={{ transform: "scale(1, -1)" }}
                    >
                      <path
                        d="M960.016 768.528h-255.601v62c0 52.9443 -43.0557 96 -96 96h-192.432c-52.9443 0 -96 -43.0557 -96 -96v-62h-255.968c-35.1836 0 -64 -28.8164 -64 -64v-224.256h-0.0322266v-64h0.0322266v-382.816c0 -35.1836 28.8164 -64 64 -64h896c35.1836 0 64 28.8164 64 64 v671.072c0 35.1836 -28.8164 64 -64 64h0.001zM383.983 830.528c0 17.6641 14.3359 32 32 32h192.432c17.6641 0 32 -14.3359 32 -32v-62h-256.432zM64.0156 704.528h896v-224.256h-352.368v32.752c0 35.2803 -28.7197 64 -64 64h-63.7441c-35.2803 0 -64 -28.7197 -64 -64 v-32.752h-351.888v224.256h0.0001zM543.695 351.872h-63.8086v161.152h63.7441zM64.0146 33.4717v382.816h351.872v-64.4004c0 -35.2803 28.7197 -64 64 -64h63.7441c35.2803 0 64 28.7197 64 64v64.4004h352.368v-382.816h-895.984h-0.0001z"
                        data-radium="true"
                        style={{ fill: "rgba(25, 4, 69, 0.7)" }}
                      />
                    </svg>
                    <p
                      color="rgba(25,4,69,0.7)"
                      title="Company"
                      className="Text__Paragraph-sc-1rtclo2-1 ilKyon"
                      style={{ marginLeft: 10 }}
                    >
                      Company
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            data-radium="true"
            style={{ height: "100%", overflow: "auto hidden" }}
          >
            <div data-radium="true" style={{ padding: "4%" }}>
              <div
                data-radium="true"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0px, 1fr) 240px",
                  gridTemplateRows: "auto",
                  gap: "10px 30px",
                  textAlign: "left",
                }}
              >
                <div
                  className="rmq-2958437c"
                  data-radium="true"
                  style={{ gridArea: "1 / 1 / 2 / 2" }}
                >
                  <div
                    data-radium="true"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "50% 50%",
                      columnGap: 10,
                    }}
                  >
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Company"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Company
                      </p>
                      <div
                        className="field company-selection"
                        style={{ width: "100%", position: "relative" }}
                      >
                        <div
                          role="combobox"
                          aria-owns="company_listbox"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          style={{ position: "relative" }}
                        >
                          <div
                            data-radium="true"
                            style={{
                              transition: "all 0.4s ease-out 0s",
                              width: "100%",
                            }}
                          >
                            <form
                              data-radium="true"
                              style={{ position: "relative" }}
                            >
                              <input
                                aria-label="Company"
                                aria-controls="company_listbox"
                                aria-activedescendant="company_suggestion_0"
                                placeholder="Company"
                                type="text"
                                data-radium="true"
                                defaultValue="American Airlines"
                                style={{
                                  backgroundColor: "white",
                                  position: "relative",
                                  display: "flex",
                                  alignItems: "center",
                                  flexGrow: 1,
                                  width: "100%",
                                  boxSizing: "border-box",
                                  fontFamily: "Lato",
                                  fontSize: 14,
                                  transition: "all 0.4s ease-out 0s",
                                  color: "rgb(24, 0, 69)",
                                  border: "1px solid rgba(25, 4, 69, 0.1)",
                                  borderRadius: 4,
                                  minHeight: 40,
                                  padding: "0px 15px",
                                  outline: "none",
                                  margin: 0,
                                  boxShadow:
                                    "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                                }}
                              />
                            </form>
                          </div>
                          <div
                            alt="Logo for American Airlines"
                            className="Logo__ImageLogo-k8rmq0-0 ctLafn"
                            style={{
                              position: "absolute",
                              top: 9,
                              right: 10,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Job title"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Job title
                      </p>
                      <div
                        data-radium="true"
                        style={{ transition: "all 0.4s ease-out 0s" }}
                      >
                        <form
                          data-radium="true"
                          style={{ position: "relative" }}
                        >
                          <input
                            aria-label="+ add title"
                            placeholder="+ add title"
                            type="text"
                            data-radium="true"
                            defaultValue="asasasasa"
                            style={{
                              backgroundColor: "white",
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              flexGrow: 1,
                              width: "100%",
                              boxSizing: "border-box",
                              fontFamily: "Lato",
                              fontSize: 14,
                              transition: "all 0.4s ease-out 0s",
                              color: "rgb(24, 0, 69)",
                              border: "1px solid rgba(25, 4, 69, 0.1)",
                              borderRadius: 4,
                              minHeight: 40,
                              padding: "0px 15px",
                              outline: "none",
                              margin: 0,
                              boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    data-radium="true"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70% 30%",
                      columnGap: 10,
                    }}
                  >
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Post URL"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Post URL
                      </p>
                      <div
                        data-radium="true"
                        style={{ transition: "all 0.4s ease-out 0s" }}
                      >
                        <form
                          data-radium="true"
                          style={{ position: "relative" }}
                        >
                          <input
                            aria-label="+ add URL"
                            placeholder="+ add URL"
                            type="text"
                            data-radium="true"
                            defaultValue=""
                            style={{
                              backgroundColor: "white",
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              flexGrow: 1,
                              width: "100%",
                              boxSizing: "border-box",
                              fontFamily: "Lato",
                              fontSize: 14,
                              transition: "all 0.4s ease-out 0s",
                              color: "rgb(24, 0, 69)",
                              border: "1px solid rgba(25, 4, 69, 0.1)",
                              borderRadius: 4,
                              minHeight: 40,
                              padding: "0px 15px",
                              outline: "none",
                              margin: 0,
                              boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                            }}
                          />
                        </form>
                      </div>
                    </div>
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Salary"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Salary
                      </p>
                      <div
                        data-radium="true"
                        style={{ transition: "all 0.4s ease-out 0s" }}
                      >
                        <form
                          data-radium="true"
                          style={{ position: "relative" }}
                        >
                          <input
                            aria-label="+ add salary"
                            placeholder="+ add salary"
                            type="text"
                            data-radium="true"
                            defaultValue=""
                            style={{
                              backgroundColor: "white",
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              flexGrow: 1,
                              width: "100%",
                              boxSizing: "border-box",
                              fontFamily: "Lato",
                              fontSize: 14,
                              transition: "all 0.4s ease-out 0s",
                              color: "rgb(24, 0, 69)",
                              border: "1px solid rgba(25, 4, 69, 0.1)",
                              borderRadius: 4,
                              minHeight: 40,
                              padding: "0px 15px",
                              outline: "none",
                              margin: 0,
                              boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    data-radium="true"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "70% 30%",
                      columnGap: 10,
                    }}
                  >
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Location"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Location
                      </p>
                      <div
                        data-radium="true"
                        style={{ position: "relative", width: "100%" }}
                      >
                        <input
                          placeholder="+ add location"
                          defaultValue=""
                          className="pac-target-input"
                          autoComplete="disable-autofill"
                          style={{
                            backgroundColor: "white",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                            width: "100%",
                            boxSizing: "border-box",
                            fontFamily: "Lato",
                            fontSize: 14,
                            transition: "all 0.4s ease-out 0s",
                            color: "rgb(24, 0, 69)",
                            border: "1px solid rgba(25, 4, 69, 0.1)",
                            borderRadius: 4,
                            minHeight: 40,
                            margin: 0,
                            padding: "0px 35px 0px 15px",
                            outline: "none",
                            boxShadow: "rgba(25, 4, 69, 0.05) 0px 3px 7px",
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: 25, flexGrow: 1 }}>
                      <p
                        title="Color"
                        className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                        style={{ marginBottom: 12 }}
                      >
                        Color
                      </p>
                      <div data-radium="true" style={{ position: "relative" }}>
                        <div>
                          <div
                            data-radium="true"
                            style={{
                              width: "100%",
                              height: 40,
                              boxSizing: "border-box",
                              borderRadius: 4,
                              border: "1px solid rgba(25, 4, 69, 0.1)",
                              marginBottom: 5,
                              cursor: "pointer",
                              backgroundColor: "rgba(224, 124, 124, 0.85)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Description"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Description
                    </p>
                    <div
                      data-radium="true"
                      style={{
                        backgroundColor: "white",
                        overflow: "hidden",
                        border: "1px solid rgb(236, 233, 242)",
                        boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                        borderRadius: 8,
                        color: "rgb(24, 0, 69)",
                      }}
                    >
                      <div className="quill " style={{ height: "100%" }}>
                        <div className="ql-toolbar ql-snow">
                          <span className="ql-formats">
                            <button type="button" className="ql-bold">
                              <svg viewBox="0 0 18 18">
                                <path
                                  className="ql-stroke"
                                  d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                />
                                <path
                                  className="ql-stroke"
                                  d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                />
                              </svg>
                            </button>
                            <button type="button" className="ql-italic">
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={13}
                                  y1={4}
                                  y2={4}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={5}
                                  x2={11}
                                  y1={14}
                                  y2={14}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={8}
                                  x2={10}
                                  y1={14}
                                  y2={4}
                                />
                              </svg>
                            </button>
                            <button type="button" className="ql-underline">
                              <svg viewBox="0 0 18 18">
                                <path
                                  className="ql-stroke"
                                  d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                />
                                <rect
                                  className="ql-fill"
                                  height={1}
                                  rx="0.5"
                                  ry="0.5"
                                  width={12}
                                  x={3}
                                  y={15}
                                />
                              </svg>
                            </button>
                          </span>
                          <span className="ql-formats">
                            <button
                              type="button"
                              className="ql-list"
                              value="ordered"
                            >
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={15}
                                  y1={4}
                                  y2={4}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={15}
                                  y1={9}
                                  y2={9}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={15}
                                  y1={14}
                                  y2={14}
                                />
                                <line
                                  className="ql-stroke ql-thin"
                                  x1="2.5"
                                  x2="4.5"
                                  y1="5.5"
                                  y2="5.5"
                                />
                                <path
                                  className="ql-fill"
                                  d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                                />
                                <path
                                  className="ql-stroke ql-thin"
                                  d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                                />
                                <path
                                  className="ql-stroke ql-thin"
                                  d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="ql-list"
                              value="bullet"
                            >
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-stroke"
                                  x1={6}
                                  x2={15}
                                  y1={4}
                                  y2={4}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={6}
                                  x2={15}
                                  y1={9}
                                  y2={9}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={6}
                                  x2={15}
                                  y1={14}
                                  y2={14}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={3}
                                  y1={4}
                                  y2={4}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={3}
                                  y1={9}
                                  y2={9}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={3}
                                  y1={14}
                                  y2={14}
                                />
                              </svg>
                            </button>
                          </span>
                          <span className="ql-formats">
                            <button type="button" className="ql-link">
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-stroke"
                                  x1={7}
                                  x2={11}
                                  y1={7}
                                  y2={11}
                                />
                                <path
                                  className="ql-even ql-stroke"
                                  d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                />
                                <path
                                  className="ql-even ql-stroke"
                                  d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                />
                              </svg>
                            </button>
                          </span>
                        </div>
                        <div className="ql-container ql-snow">
                          <div
                            className="ql-editor ql-blank"
                            data-gramm="false"
                            contentEditable="true"
                          >
                            <p>
                              <br />
                            </p>
                          </div>
                          <div
                            className="ql-clipboard"
                            contentEditable="true"
                            tabIndex={-1}
                          />
                          <div className="ql-tooltip ql-hidden">
                            <a
                              className="ql-preview"
                              rel="noopener noreferrer"
                              target="_blank"
                              href="about:blank"
                            />
                            <input
                              type="text"
                              data-formula="e=mc^2"
                              data-link="https://quilljs.com"
                              data-video="Embed URL"
                            />
                            <a className="ql-action" />
                            <a className="ql-remove" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rmq-6135967e"
                  data-radium="true"
                  style={{ gridArea: "1 / 2 / 3 / 3" }}
                >
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Deadline"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Deadline
                    </p>
                    <div data-radium="true" style={{ width: "100%" }}>
                      <div className="react-datepicker-wrapper">
                        <div className="react-datepicker__input-container">
                          <div style={{ marginBottom: 10 }}>
                            <input
                              aria-label="Deadline"
                              placeholder="+ set date"
                              type="text"
                              defaultValue=""
                              style={{
                                backgroundColor: "white",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                                textAlign: "right",
                                width: "100%",
                                boxSizing: "border-box",
                                fontFamily: "Lato",
                                fontSize: 14,
                                transition: "all 0.4s ease-out 0s",
                                color: "rgb(24, 0, 69)",
                                border: "1px solid rgba(25, 4, 69, 0.1)",
                                borderRadius: 4,
                                minHeight: 40,
                                padding: "0px 35px 0px 15px",
                                outline: "none",
                                margin: 0,
                                boxShadow: "rgba(25, 4, 69, 0.05) 0px 2px 7px",
                              }}
                            />
                            <p
                              color="rgba(25,4,69,0.7)"
                              title="Deadline"
                              className="Text__Paragraph-sc-1rtclo2-1 gymVkR"
                              style={{
                                position: "absolute",
                                top: 10,
                                left: 15,
                              }}
                            >
                              Deadline
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Application"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Application
                    </p>
                    <div
                      tabIndex={0}
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(25, 4, 69, 0.1)",
                        boxShadow: "rgba(25, 4, 69, 0.05) 0px 3px 7px -1px",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                        padding: 4,
                      }}
                    >
                      <div style={{ marginTop: 0 }}>
                        <div style={{ width: "100%" }}>
                          <a href="/add-activity?jobId=62e793bad81c060028eda68a&activityCategoryType=APPLICATION&boardId=62b9a54ca7aed90028c975c3">
                            <div className="LogActivityButton__InputContainer-fh23wd-0 hVHDUl">
                              <p
                                title="+"
                                className="Text__Paragraph-sc-1rtclo2-1 hbrzsk"
                              >
                                +
                              </p>
                              <p
                                color="rgba(25,4,69,0.7)"
                                title="Log Application"
                                className="Text__Paragraph-sc-1rtclo2-1 jIGnRJ"
                                style={{ marginLeft: 7 }}
                              >
                                Log Application
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Interviews"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Interviews
                    </p>
                    <div
                      tabIndex={0}
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(25, 4, 69, 0.1)",
                        boxShadow: "rgba(25, 4, 69, 0.05) 0px 3px 7px -1px",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                        padding: 4,
                      }}
                    >
                      <div style={{ marginTop: 0 }}>
                        <div style={{ width: "100%" }}>
                          <a href="/add-activity?jobId=62e793bad81c060028eda68a&activityCategoryType=INTERVIEW&boardId=62b9a54ca7aed90028c975c3">
                            <div className="LogActivityButton__InputContainer-fh23wd-0 hVHDUl">
                              <p
                                title="+"
                                className="Text__Paragraph-sc-1rtclo2-1 hbrzsk"
                              >
                                +
                              </p>
                              <p
                                color="rgba(25,4,69,0.7)"
                                title="Log Interview"
                                className="Text__Paragraph-sc-1rtclo2-1 jIGnRJ"
                                style={{ marginLeft: 7 }}
                              >
                                Log Interview
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Offer"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Offer
                    </p>
                    <div
                      tabIndex={0}
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(25, 4, 69, 0.1)",
                        boxShadow: "rgba(25, 4, 69, 0.05) 0px 3px 7px -1px",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                        padding: 4,
                      }}
                    >
                      <div style={{ marginTop: 0 }}>
                        <div style={{ width: "100%" }}>
                          <a href="/add-activity?jobId=62e793bad81c060028eda68a&activityCategoryType=OFFER_RECEIVED&boardId=62b9a54ca7aed90028c975c3">
                            <div className="LogActivityButton__InputContainer-fh23wd-0 hVHDUl">
                              <p
                                title="+"
                                className="Text__Paragraph-sc-1rtclo2-1 hbrzsk"
                              >
                                +
                              </p>
                              <p
                                color="rgba(25,4,69,0.7)"
                                title="Log Offer"
                                className="Text__Paragraph-sc-1rtclo2-1 jIGnRJ"
                                style={{ marginLeft: 7 }}
                              >
                                Log Offer
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: 25, flexGrow: 1 }}>
                    <p
                      title="Offer Acceptance"
                      className="Text__Paragraph-sc-1rtclo2-1 kdigNO"
                      style={{ marginBottom: 12 }}
                    >
                      Offer Acceptance
                    </p>
                    <div
                      tabIndex={0}
                      style={{
                        borderRadius: 8,
                        border: "1px solid rgba(25, 4, 69, 0.1)",
                        boxShadow: "rgba(25, 4, 69, 0.05) 0px 3px 7px -1px",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                        padding: 4,
                      }}
                    >
                      <div style={{ marginTop: 0 }}>
                        <div style={{ width: "100%" }}>
                          <a href="/add-activity?jobId=62e793bad81c060028eda68a&activityCategoryType=OFFER_ACCEPTED&boardId=62b9a54ca7aed90028c975c3">
                            <div className="LogActivityButton__InputContainer-fh23wd-0 hVHDUl">
                              <p
                                title="+"
                                className="Text__Paragraph-sc-1rtclo2-1 hbrzsk"
                              >
                                +
                              </p>
                              <p
                                color="rgba(25,4,69,0.7)"
                                title="Log Offer Acceptance"
                                className="Text__Paragraph-sc-1rtclo2-1 jIGnRJ"
                                style={{ marginLeft: 7 }}
                              >
                                Log Offer Acceptance
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rmq-33700fe8 rmq-4cbe52a"
          data-radium="true"
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            width: 230,
            flexShrink: 0,
            backgroundColor: "rgb(242, 241, 247)",
            borderRadius: "0px 4px 4px 0px",
            padding: "0px 12px",
            textAlign: "left",
            boxSizing: "border-box",
          }}
        >
          <div
            data-radium="true"
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: 0,
              alignItems: "center",
              justifyContent: "space-between",
              height: 40,
              borderBottom: "1px solid rgba(25, 4, 69, 0.1)",
            }}
          >
            <p title="Timeline" className="Text__Paragraph-sc-1rtclo2-1 hbrzsk">
              Timeline
            </p>
          </div>
          <div
            data-radium="true"
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flexGrow: 1,
              overflowY: "auto",
              paddingTop: 20,
            }}
          >
            <div
              data-radium="true"
              style={{
                display: "flex",
                flexDirection: "row",
                minWidth: 0,
                cursor: "default",
              }}
            >
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  alignItems: "center",
                  width: 15,
                  flexShrink: 0,
                  paddingRight: 10,
                }}
              >
                <div data-radium="true" style={{ height: 13 }} />
                <div
                  data-radium="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    border: "1px solid rgba(25, 4, 69, 0.1)",
                    flexShrink: 0,
                    backgroundColor: "rgb(41, 219, 14)",
                  }}
                />
              </div>
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: 0,
                  paddingBottom: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                  }}
                >
                  <p
                    color="rgba(25,4,69,0.7)"
                    title="created job"
                    className="Text__Paragraph-sc-1rtclo2-1 eGuRQW"
                  >
                    created job
                  </p>
                  <div style={{ padding: "4px 0px" }}>
                    <p
                      color="rgba(25,4,69,0.4)"
                      title=""
                      className="Text__Paragraph-sc-1rtclo2-1 fjBGWF"
                      style={{ fontSize: 12 }}
                    >
                      You created job
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-radium="true"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: 20,
                  justifyContent: "flex-end",
                  marginLeft: 10,
                  marginTop: 7,
                  flexGrow: 1,
                  flexShrink: 0,
                }}
              >
                <p
                  color="rgba(25,4,69,0.4)"
                  title="Aug 01, 2022 - 02:20 pm"
                  className="Text__Paragraph-sc-1rtclo2-1 igJuBo"
                  style={{ fontSize: 12 }}
                >
                  11m
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Modal>
  );
}

function CompanyCard(props) {
  const dispatch = useDispatch();
  function onDelete() {
    // console.log("onDeleteGotClicked");
    const idx = props.indexOfCard;
    const indexOfList = props.indexOfList;
    // console.log(1);
    dispatch(removeCard({ idx, indexOfList }));
    // console.log(2);
    // console.log(idx);
  }
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="companyCard" onClick={() => setModalShow(true)}>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        index={props.index}
      />
      <Card.Body>
        <Card.Title>{props.role}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.companyName}
        </Card.Subtitle>
        <button className="trashButton" onClick={onDelete}>
          <FontAwesomeIcon className="trashIcon" icon={faTrash} size="xl" />
        </button>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}
export default CompanyCard;
