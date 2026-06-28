import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SectionWrapper } from "../../hoc";
import { certifications } from "../../constants";
import { config } from "../../constants/config";
import type { TCertification } from "../../types";

const Certifications = () => {
  const [selected, setSelected] = useState<TCertification | null>(null);

  // Prevent background scrolling when a certificate is being viewed
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        {config.sections.certifications.p}
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {config.sections.certifications.h2}
      </h2>

      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-tertiary p-5 rounded-2xl w-full sm:w-[300px] border border-white/10"
          >
            <h3 className="text-white font-bold text-[18px]">{cert.title}</h3>
            <p className="text-secondary text-[14px] mt-1">{cert.issuer}</p>
            <p className="text-secondary text-[12px] mt-1">{cert.date}</p>
            {cert.credentialId && (
              <p className="text-secondary text-[11px] mt-1 font-mono">
                ID: {cert.credentialId}
              </p>
            )}
            {cert.link && (
              cert.type === "link" ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[13px] text-blue-400 hover:underline"
                >
                  View Certificate ↗
                </a>
              ) : (
                <button
                  onClick={() => setSelected(cert)}
                  className="mt-3 inline-block text-[13px] text-blue-400 hover:underline"
                >
                  View Certificate →
                </button>
              )
            )}
          </div>
        ))}
      </div>

      {/* Modal rendered at document body root using Portal to avoid stacking context issues */}
      {selected && createPortal(
        <div
          className="fixed inset-0 bg-black/75 z-[999] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-tertiary rounded-2xl w-full max-w-3xl h-[80vh] overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <h3 className="text-white font-semibold text-[15px] truncate pr-4">
                {selected.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selected.credentialUrl || (selected.link.includes("drive.google.com")
                    ? selected.link.replace("/preview", "/view")
                    : selected.link)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-[12px] hover:underline"
                >
                  Open ↗
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white text-xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto">
              {selected.type === "image" ? (
                <img
                  src={selected.link.includes("drive.google.com")
                    ? selected.link.replace("/preview", "/uc?export=view")
                    : selected.link
                  }
                  alt={selected.title}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <iframe
                  src={selected.link}
                  className="w-full h-full border-0"
                  title={selected.title}
                  allow="autoplay"
                />
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
