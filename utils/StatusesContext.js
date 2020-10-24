import { createContext, useEffect, useState } from "react";

export const processingStatuses = ["FINISHED", "FAILED", "PROCESSING"];

const storageKey = "snackableStatusesStorage";

export const Context = createContext({
  statuses: processingStatuses,
  toggle: () => null,
});

/**
 * Returns a function that can be used to toggle an item in an array held in state.
 *
 * @param {Function} setter function that sets a React state
 * @returns {Function} Function that toggles the passed item in the array managed by the setter function
 */
const toggleArrayItem = (setter) => (item) =>
  setter((items) => {
    if (items.includes(item)) {
      return items.filter((i) => i !== item);
    } else {
      return [...items, item];
    }
  });

export default ({ children }) => {
  const [visibleStatuses, setVisibleStatuses] = useState(["FINISHED"]);
  const [initialized, setInitialized] = useState(false);
  const toggleStatus = toggleArrayItem(setVisibleStatuses);

  // cache state to localstorage when it's changed
  useEffect(() => {
    if (initialized) {
      localStorage.setItem(storageKey, JSON.stringify(visibleStatuses));
    }
  }, [visibleStatuses]);

  // Retrieve state from localstorage
  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem(storageKey));

    if (cached) {
      setVisibleStatuses(cached);
    }

    setInitialized(true);
  }, []);

  // Prevent jump
  if (!initialized) return null;

  return (
    <Context.Provider
      value={{ statuses: visibleStatuses, toggle: toggleStatus }}
    >
      {children}
    </Context.Provider>
  );
};
