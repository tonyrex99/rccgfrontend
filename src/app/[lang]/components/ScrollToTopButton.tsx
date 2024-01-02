"use client";
import { useEffect } from "react";

interface ScrollToTopProps {
  data: {
    show: boolean;
    rounded: boolean;
  } | null;
}

export default function ScrollToTop({ data }: ScrollToTopProps) {
  if (!data) return null;
  const { show, rounded } = data;

  if (!show) return null;

  // components/ScrollToTopButton.js

  useEffect(() => {
    const myButton: any = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Cleanup on component unmount
    };
  }, []);

  const topFunction = () => {
    // For modern browsers that support smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="myBtn"
      className={`fixed bottom-7 left-7 p-3 z-50 ${rounded && "rounded"}`}
      style={{ backgroundColor: "var(--primary-color)" }} // Assuming you have a CSS variable for primary color
      onClick={topFunction}
    >
      <svg
        aria-hidden="true"
        className="kadence-svg-icon kadence-arrow-up2-svg"
        fill="var(--secondary-color)"
        strokeWidth="2"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="28"
        viewBox="0 0 26 28"
      >
        <path d="M25.172 15.172c0 0.531-0.219 1.031-0.578 1.406l-1.172 1.172c-0.375 0.375-0.891 0.594-1.422 0.594s-1.047-0.219-1.406-0.594l-4.594-4.578v11c0 1.125-0.938 1.828-2 1.828h-2c-1.062 0-2-0.703-2-1.828v-11l-4.594 4.578c-0.359 0.375-0.875 0.594-1.406 0.594s-1.047-0.219-1.406-0.594l-1.172-1.172c-0.375-0.375-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.422l10.172-10.172c0.359-0.375 0.875-0.578 1.406-0.578s1.047 0.203 1.422 0.578l10.172 10.172c0.359 0.375 0.578 0.891 0.578 1.422z"></path>
      </svg>
    </div>
  );
}
