import { useEffect } from "react";

export default function useOutsideClick(ref, exeptElement, cb) {
  return useEffect(() => {
    function handleOutsideClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== exeptElement
      ) {
        console.log(e.target);
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, cb]);
}
