import { useContext } from "react";

import { processingStatuses, Context } from "../utils/StatusesContext";

export default () => {
  const { statuses, toggle } = useContext(Context);

  return (
    <>
      {processingStatuses.map((status) => (
        <label className="mr-2 cursor-pointer" key={status}>
          <input
            type="checkbox"
            checked={statuses.includes(status)}
            onChange={() => toggle(status)}
            className="mr-1"
          />
          {status}
        </label>
      ))}
    </>
  );
};
