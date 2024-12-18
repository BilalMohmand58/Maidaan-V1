import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "../public/images/404.png";

export default function Error() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image src={errorImg} alt="error" width={440} height={244} />

                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <Link href="/" className="default-btn-one">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
