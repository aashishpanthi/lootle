import React, { useEffect } from "react";
import classNames from "classnames";
import "./styles/modal.css";

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  ...props
}) => {
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", stopProgagation);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", stopProgagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll(".modal.is-active").length) {
      document.body.classList.add("modal-is-active");
    } else {
      document.body.classList.remove("modal-is-active");
    }
  };

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  };

  const stopProgagation = (e) => {
    e.stopPropagation();
  };

  const classes = classNames(
    "modal",
    show && "is-active",
    video && "modal-video",
    className
  );

  return (
    <>
      {show && (
        <div {...props} className={classes} onClick={handleClose}>
          <div className="modal-inner" onClick={stopProgagation}>
            {video ? (
              <div className="responsive-video">
                {videoTag === "iframe" ? (
                  <iframe
                    title="Website trailer"
                    src={video}
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                ) : (
                  <video v-else controls src={video}></video>
                )}
              </div>
            ) : (
              <>
                {!closeHidden && (
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  ></button>
                )}
                <div className="modal-content">{children}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
