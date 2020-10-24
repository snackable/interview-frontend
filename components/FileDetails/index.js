import { useEffect, useRef } from "react";

import { toSeconds, toHMS } from "./utils";
import Dt from "./Dt";
import "./FileDetails.css";

const activeClass = "text-green-400";

/**
 * Finds the segment that's currently being played and highlights it.
 */
function timeUpdateListener(event) {
  const { currentTime } = event.target;

  Array.from(document.getElementsByClassName(activeClass)).forEach((e) =>
    e.classList.remove(activeClass)
  );

  const headings = document.querySelectorAll("h3");

  for (let index = 0; index < headings.length; index++) {
    const heading = headings[index];
    const startTime = toSeconds(parseInt(heading.dataset.start, 10));
    const endTime = toSeconds(parseInt(heading.dataset.end, 10));

    if (startTime < currentTime && currentTime < endTime) {
      heading.classList.add(activeClass);
      break;
    }
  }
}

export default ({ details, segments }) => {
  const playerRef = useRef();

  useEffect(() => {
    playerRef.current.addEventListener("timeupdate", timeUpdateListener);

    return () =>
      playerRef.current.removeEventListener("timeupdate", timeUpdateListener);
  }, [playerRef]);

  return (
    <article className="p-8">
      <h1 className="text-3xl">{details.fileName}</h1>
      <dl className="detailsGrid">
        <Dt>Series:</Dt>
        <dd>{details.seriesTitle}</dd>
        <Dt>MP3:</Dt>
        <dd>{details.mp3Path}</dd>
        <Dt>Original file:</Dt>
        <dd>{details.originalFilePath}</dd>
      </dl>
      {details.mp3Path && (
        <audio controls src={details.mp3Path} ref={playerRef} />
      )}
      {segments.length > 0 && (
        <>
          <h2 className="text-2xl mt-2 mb-1">File segments:</h2>
          <ol className="h-64 overflow-y-scroll">
            {segments.map((segment) => (
              <li key={segment.fileSegmentId}>
                <h3
                  className="text-xl mt-3 mb-1"
                  data-start={segment.startTime}
                  data-end={segment.endTime}
                >
                  <button
                    className="rounded-full p-1 bg-gray-300 h-10 w-10 inline-flex justify-center align-center mr-2"
                    onClick={() => {
                      playerRef.current.currentTime = toSeconds(
                        segment.startTime
                      );
                      playerRef.current.play();
                    }}
                  >
                    ➤
                  </button>
                  {toHMS(segment.startTime)} - {toHMS(segment.endTime)}
                </h3>
                <p>{segment.segmentText}</p>
              </li>
            ))}
          </ol>
        </>
      )}
    </article>
  );
};
