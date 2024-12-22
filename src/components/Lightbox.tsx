import { useState } from "react";

interface LightboxProps {
  src: string;
}

export const Lightbox: React.FC<LightboxProps> = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cleanSrc = src.replace(/\//g, "-").replace(/\s+/g, "").slice(0, -4);

  const openLightbox = () => {
    document.startViewTransition(() => {
      setIsOpen(true);
    });
  };

  const closeLightbox = () => {
    document.startViewTransition(() => {
      setIsOpen(false);
    });
  };

  return (
    <>
      {/* Thumbnail Image */}
      <img
        src={src}
        alt="Gallery Thumbnail"
        className="cursor-pointer rounded-md hover:scale-105 transition-transform"
        onClick={() => openLightbox()}
        style={{
          viewTransitionName: isOpen
            ? `thumbnail-${cleanSrc}`
            : `thumbnail-${cleanSrc}`, // Assign viewTransitionName
        }}
      />

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
          style={{
            viewTransitionName: `thumbnail-${cleanSrc}`, // Match viewTransitionName
          }}
        >
          <div className="relative">
            <img
              src={src}
              alt="Fullscreen Image"
              className="max-h-[90vh] max-w-[90vw] rounded-md"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};
