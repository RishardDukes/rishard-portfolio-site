"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

type Props = {
  photos: Photo[];
};

export default function LifePhotoGallery({ photos }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [activeIndex]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <figure className={`photo-card ${photo.className}`} key={photo.src}>
            <button
              type="button"
              className="photo-trigger"
              aria-label={`Open full image: ${photo.label}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
            </button>
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>

      {activePhoto ? (
        <div className="life-modal" role="dialog" aria-modal="true" aria-label="Expanded life photo">
          <button
            type="button"
            className="life-modal-backdrop"
            aria-label="Close image viewer"
            onClick={() => setActiveIndex(null)}
          />
          <div className="life-modal-card">
            <button type="button" className="life-modal-close" onClick={() => setActiveIndex(null)}>
              Close
            </button>
            <div className="life-modal-image-wrap">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={1800}
                height={1200}
                className="life-modal-image"
              />
            </div>
            <p className="life-modal-label">{activePhoto.label}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
