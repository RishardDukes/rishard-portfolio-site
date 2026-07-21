"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ModalImage = "mac" | "timeclock" | null;

type Hotspot = {
  id: string;
  label: string;
  title: string;
  description: string;
  top: number;
  left: number;
};

const timeclockHotspots: Hotspot[] = [
  {
    id: "employee",
    label: "Employee # field",
    title: "Employee Number Input",
    description:
      "The employee number field identifies who is logging work. It keeps each entry tied to the right person for clean daily reporting.",
    top: 26,
    left: 8,
  },
  {
    id: "task",
    label: "Task # field",
    title: "Task Number Input",
    description:
      "The task number field maps work to a specific operation. This makes report summaries easier to filter by task and client workflow.",
    top: 33,
    left: 8,
  },
  {
    id: "time",
    label: "Date and time selectors",
    title: "Date and Time Selection",
    description:
      "Date and time selectors capture when work starts and ends. This supports accurate billable tracking and reduces manual correction later.",
    top: 30,
    left: 32,
  },
  {
    id: "add",
    label: "Add button",
    title: "Add Entry Button",
    description:
      "Add stores the current entry in the running list so multiple tasks can be logged quickly before sending a final report.",
    top: 33,
    left: 49,
  },
  {
    id: "send",
    label: "Send report button",
    title: "Send Report Button",
    description:
      "Send Report generates and outputs an email-ready summary, turning raw entries into a clean daily update for billing or operations.",
    top: 33,
    left: 58,
  },
];

export default function ExperienceMedia() {
  const [openImage, setOpenImage] = useState<ModalImage>(null);
  const [activeHotspotId, setActiveHotspotId] = useState<string>(timeclockHotspots[0].id);

  useEffect(() => {
    if (!openImage) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenImage(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [openImage]);

  const activeHotspot = useMemo(
    () => timeclockHotspots.find((spot) => spot.id === activeHotspotId) ?? timeclockHotspots[0],
    [activeHotspotId]
  );

  return (
    <>
      <div className="ops-media-grid">
        <figure className="ops-image-card">
          <button
            type="button"
            className="ops-image-button"
            aria-label="Open full image for Device Wipe and Assessment"
            onClick={() => setOpenImage("mac")}
          >
            <div className="ops-image">
              <Image
                src="/images/mac-wipe.webp"
                alt="A MacBook being wiped and prepared with macOS"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </button>
          <figcaption>Device Wipe and Assessment</figcaption>
        </figure>

        <figure className="ops-image-card ops-image-card-app">
          <button
            type="button"
            className="ops-image-button"
            aria-label="Open full image for Employee Time Tracker App"
            onClick={() => {
              setActiveHotspotId(timeclockHotspots[0].id);
              setOpenImage("timeclock");
            }}
          >
            <div className="ops-image ops-image-app">
              <Image
                src="/images/timeclockapp.webp"
                alt="Employee Time Tracker desktop app interface"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </button>
          <figcaption>Employee Time Tracker App</figcaption>
          <p className="ops-caption-detail">Click to view full image and feature highlights.</p>
        </figure>
      </div>

      {openImage ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Expanded experience image">
          <button
            type="button"
            className="image-modal-backdrop"
            aria-label="Close expanded image"
            onClick={() => setOpenImage(null)}
          />
          <div className="image-modal-card">
            <button type="button" className="image-modal-close" onClick={() => setOpenImage(null)}>
              Close
            </button>

            {openImage === "mac" ? (
              <div className="image-modal-image-only">
                <Image
                  src="/images/mac-wipe.webp"
                  alt="A MacBook being wiped and prepared with macOS"
                  width={1800}
                  height={1200}
                  className="image-modal-full"
                />
              </div>
            ) : (
              <div className="timeclock-modal-layout">
                <div className="timeclock-image-wrap">
                  <Image
                    src="/images/timeclockapp.webp"
                    alt="Employee Time Tracker desktop app interface with annotated feature hotspots"
                    width={1800}
                    height={1200}
                    className="image-modal-full"
                  />

                  {timeclockHotspots.map((spot, index) => (
                    <button
                      key={spot.id}
                      type="button"
                      className={`timeclock-hotspot ${spot.id === activeHotspot.id ? "active" : ""}`}
                      style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
                      aria-label={spot.label}
                      onClick={() => setActiveHotspotId(spot.id)}
                    >
                      <span>{index + 1}</span>
                    </button>
                  ))}
                </div>

                <aside className="timeclock-panel">
                  <p className="eyebrow">Main Features</p>
                  <h4>{activeHotspot.title}</h4>
                  <p>{activeHotspot.description}</p>

                  <div className="timeclock-feature-list">
                    {timeclockHotspots.map((spot, index) => (
                      <button
                        key={spot.id}
                        type="button"
                        className={spot.id === activeHotspot.id ? "active" : ""}
                        onClick={() => setActiveHotspotId(spot.id)}
                      >
                        <span>{index + 1}</span>
                        {spot.label}
                      </button>
                    ))}
                  </div>
                </aside>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}