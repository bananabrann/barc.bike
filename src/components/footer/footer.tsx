// boilerplate for a new component for Next.js app
//

import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} bg-green-700 w-full text-white p-4 flex flex-row justify-around`}
    >
      <p>
        Made by{" "}
        <a
          target="_blank"
          className="text-yellow-200 transition-all"
          href="https://github.com/bananabrann"
        >
          bananabrann
        </a>
      </p>

      <p>All rights reserved</p>

      <p>
        <a
          target="_blank"
          className="text-yellow-200"
          href="https://github.com/bananabrann/barc.bike/tree/bananabrann/nextjs"
        >
          View source code
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          className="text-yellow-200"
          href="https://github.com/bananabrann/barc.bike/issues"
        >
          Report an issue
        </a>
      </p>
    </footer>
  );
};

export default Footer;
