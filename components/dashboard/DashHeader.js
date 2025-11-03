"use client";
import { useEffect, useState, forwardRef } from "react";
import Image from "next/image";

import { changeHexGlobal, fetchHex } from "@/lib/data";

function DashHeaderInner(
  {
    title = "Dashboard",
    defaultHex = "#00502F",
    alpha = 0.65,
    specPage,
    uid,
    editModeOn = false,
    openColor,
    heightPx = 100,
    className,
  },
  ref
) {
  const [hex, setHex] = useState(null);

  const fixTitle = (title) => {
    return title
      .replace(/-/g, " ") // replace dashes with spaces
      .replace(/^([a-z])/, (c) => c.toUpperCase()); // capitalize first letter
  };

  const titleFixed = fixTitle(title);

  const findHex = async (uid, saved) => {
    // Fetch the global hex from the server or database
    // For demonstration, we'll just return a hardcoded value

    try {
      const fetchedHex = await fetchHex(uid);
      setHex(fetchedHex);
      return;
    } catch (e) {
      console.error("Error fetching hex:", e);
      if (saved) {
        setHex(saved);
      } else {
        setHex(defaultHex);
      }

      return;
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("headerHex");
    console.log("use Effect");
    findHex(uid, saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("headerHex", hex);
  }, [hex]);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const setHexGlobal = (newHex) => {
    setHex(newHex);
    changeHexGlobal(uid, newHex);
  };

  const combinedClassName = `backdrop-blur-md  ${className || ""}`;

  return (
    <div
      ref={ref}
      role="banner"
      className={combinedClassName}
      // Merge default styles with custom styles from props.
      // Note that `position` is NOT defined here. It's controlled by the parent.
      style={{
        backgroundColor: hex
          ? hexToRgba(hex, alpha)
          : hexToRgba("#000000", 0.2),
        // This allows the parent component to pass in styles like `position`, etc.
      }}
    >
      {(editModeOn || openColor) && (
        <input
          type="color"
          className="mr-3 h-9 w-9  block cursor-pointer absolute right-6 top-7 rounded-md border border-white/50 bg-transparent p-1 shadow"
          value={hex}
          onChange={(e) => setHexGlobal(e.target.value)}
        />
      )}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8  ">
        <div
          className="flex items-center justify-between gap-4"
          style={{ height: `${heightPx}px` }}
        >
          <div className="flex items-center gap-6 min-w-0">
            {/* {specPage === "the-lotus-seed" && (
              <Image
                src="/logo-lotus.png" // <- file in public/
                alt="Logo"
                width={75}
                height={75}
              />
            )} */}
            <h1 className="truncate text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow ">
              {titleFixed}
            </h1>
          </div>

          {/* {true && (
            <Image
              src="/med-logo.png" // <- file in public/
              alt="Meditation soc logo"
              className="hidden sm:block"
              width={70}
              height={70}
            />
          )} */}
          <div className="flex  items-center gap-3">
            {specPage === "the-lotus-seed" && (
              <>
                <label className="hidden sm:block font-extrabold text-md text-right text-white/90 ">
                  The University of Leeds <br />
                  Meditation Society
                </label>
                {/* <div className="hidden sm:block">
                  <Image
                    src="/Leeds-logo.png" // <- file in public/
                    alt="Leeds Uni Clocktower"
                    width={60}
                    height={60}
                  />
                </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(DashHeaderInner);
