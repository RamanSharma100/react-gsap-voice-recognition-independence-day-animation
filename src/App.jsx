import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";
gsap.registerPlugin(CSSRulePlugin);
import StartScreen from "./screens/StartScreen";

import "./App.css";
import RaiseFlag from "./screens/RaiseFlag";

const App = () => {
  const [vandeMatram, setVandeMatram] = useState(false);
  const el = useRef();
  const q = gsap.utils.selector(el);

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    if (
      command.toLowerCase() === "vande mataram" ||
      command.toLowerCase() === "vandemataram"
    ) {
      setVandeMatram(true);
    }
  };

  recognition.onend = () => {
    if (!vandeMatram) {
      recognition.start();
    } else recognition.stop();
  };

  useEffect(() => {
    if (vandeMatram) {
      gsap.to(".start-screen", {
        duration: 0.5,
        y: "-100vh",
        ease: "power3.inOut",
        onComplete: () => {
          const audio = new Audio(
            "/vandemataramflutebyrajeshcherthalaringtone-43151.mp3"
          );
          audio.load();
          audio.loop = true;
          audio.play();

          gsap.from(".raise-flag", {
            duration: 0.5,
            ease: "power3.in",
            onComplete: () => {
              gsap.to(q(".orange"), {
                duration: 0.5,
                opacity: 1,
                ease: "power3.inOut",
                onComplete: () => {
                  gsap.to(q(".orange"), {
                    duration: 0.5,
                    opacity: 1,
                    transform: "scale(1)",
                    ease: "power3.inOut",
                    onComplete: () => {
                      gsap.to(q(".orange"), {
                        duration: 0.5,
                        opacity: 1,
                        fill: "#f93",
                        strokeWidth: "0",
                        ease: "power3.inOut",
                        onComplete: () => {
                          gsap.to(q(".white"), {
                            duration: 0.5,
                            opacity: 1,
                            ease: "power3.inOut",
                            onComplete: () => {
                              gsap.to(q(".white"), {
                                duration: 0.5,
                                opacity: 1,
                                transform: "scale(1)",
                                ease: "power3.inOut",
                                onComplete: () => {
                                  gsap.to(q(".white"), {
                                    duration: 0.5,
                                    opacity: 1,
                                    fill: "#fff",
                                    strokeWidth: "0",
                                    ease: "power3.inOut",
                                    onComplete: () => {
                                      gsap.to(q(".green"), {
                                        duration: 0.5,
                                        opacity: 1,
                                        ease: "power3.inOut",
                                        onComplete: () => {
                                          gsap.to(q(".green"), {
                                            duration: 0.5,
                                            opacity: 1,
                                            transform: "scale(1)",
                                            ease: "power3.inOut",
                                            onComplete: () => {
                                              gsap.to(q(".green"), {
                                                duration: 0.5,
                                                opacity: 1,
                                                fill: "#128807",
                                                strokeWidth: "0",
                                                ease: "power3.inOut",
                                                onComplete: () => {
                                                  gsap.to(q(".ashok-chakra"), {
                                                    duration: 0.5,
                                                    opacity: 1,
                                                    ease: "power3.in",
                                                    onComplete: () => {
                                                      gsap.to(
                                                        q(".ashok-chakra"),
                                                        {
                                                          duration: 1000,
                                                          transform:
                                                            "matrix(4, 0, 0, 4, 450, 300) scale(1)",
                                                          ease: "ease.inOut",
                                                        }
                                                      );
                                                      gsap.to(
                                                        q(".raise-flag .stick"),
                                                        {
                                                          duration: 0.5,
                                                          left: "30%",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {},
                                                        }
                                                      );
                                                      gsap.to(
                                                        q(
                                                          CSSRulePlugin.getRule(
                                                            ".raise-flag .stick::before"
                                                          )
                                                        ),
                                                        {
                                                          duration: 0.5,
                                                          left: "5%",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {},
                                                        }
                                                      );
                                                      gsap.to(
                                                        q(
                                                          CSSRulePlugin.getRule(
                                                            ".raise-flag .stick::after"
                                                          )
                                                        ),
                                                        {
                                                          duration: 0.5,
                                                          left: "100%",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {},
                                                        }
                                                      );
                                                      gsap.to(
                                                        q(
                                                          CSSRulePlugin.getRule(
                                                            ".raise-flag .rope::after"
                                                          )
                                                        ),
                                                        {
                                                          duration: 0.5,
                                                          right: "-300%",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {},
                                                        }
                                                      );
                                                      gsap.to(
                                                        q(
                                                          CSSRulePlugin.getRule(
                                                            ".raise-flag .rope"
                                                          )
                                                        ),
                                                        {
                                                          duration: 0.5,
                                                          left: "30%",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {},
                                                        }
                                                      );

                                                      gsap.to(
                                                        q(
                                                          ".raise-flag svg.flag"
                                                        ),
                                                        {
                                                          duration: 0.5,
                                                          transform:
                                                            "scale(0.4)",
                                                          left: "203px",
                                                          marginBottom: "45px",
                                                          ease: "power3.inOut",
                                                          onComplete: () => {
                                                            gsap.to(
                                                              q(
                                                                ".raise-flag svg.flag"
                                                              ),
                                                              {
                                                                duration: 0.5,
                                                                marginBottom:
                                                                  "295px",
                                                                ease: "power3.inOut",
                                                                onComplete:
                                                                  () => {
                                                                    gsap.to(
                                                                      q(
                                                                        CSSRulePlugin.getRule(
                                                                          ".raise-flag .i"
                                                                        )
                                                                      ),
                                                                      {
                                                                        duration: 0.5,
                                                                        opacity: 1,
                                                                        ease: "power3.inOut",
                                                                        onComplete:
                                                                          () => {
                                                                            gsap.to(
                                                                              q(
                                                                                CSSRulePlugin.getRule(
                                                                                  ".raise-flag h1"
                                                                                )
                                                                              ),
                                                                              {
                                                                                duration: 0.5,
                                                                                right:
                                                                                  "25%",
                                                                                ease: "power3.inOut",
                                                                                onComplete:
                                                                                  () => {
                                                                                    gsap.to(
                                                                                      q(
                                                                                        CSSRulePlugin.getRule(
                                                                                          ".raise-flag .august"
                                                                                        )
                                                                                      ),
                                                                                      {
                                                                                        duration: 0.5,
                                                                                        top: "50%",
                                                                                        ease: "power3.inOut",
                                                                                        onComplete:
                                                                                          () => {},
                                                                                      }
                                                                                    );
                                                                                  },
                                                                              }
                                                                            );
                                                                          },
                                                                      }
                                                                    );
                                                                  },
                                                              }
                                                            );
                                                          },
                                                        }
                                                      );
                                                    },
                                                  });
                                                },
                                              });
                                            },
                                          });
                                        },
                                      });
                                    },
                                  });
                                },
                              });
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    }
  }, [vandeMatram]);
  return (
    <div className="App" ref={el}>
      <StartScreen recognition={recognition} setVandeMatram={setVandeMatram} />

      {vandeMatram && <RaiseFlag />}
    </div>
  );
};

export default App;
