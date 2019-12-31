import React from "react";
import { Tooltip as ReactstrapTooltip } from "reactstrap";

export const Tooltip = () => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const targetRef = React.useRef(null);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <button ref={targetRef} type="button">
        Button text
      </button>
      <ReactstrapTooltip
        target={targetRef}
        isOpen={tooltipOpen}
        toggle={toggle}
        modifiers={{
          computeStyle: {
            // "true" causes blurriness.
            // See https://github.com/reactstrap/reactstrap/issues/1303
            gpuAcceleration: false,
          },
        }}
      >
        Tooltip text
      </ReactstrapTooltip>
    </>
  );
};
