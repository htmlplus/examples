import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/tooltip.js';

const TooltipTrigger = () => {
  return (
    <plus-grid justify-content="evenly">
      <plus-grid-item>
        <button>
          Hover
          <plus-tooltip trigger="hover">Tooltip</plus-tooltip>
        </button>
      </plus-grid-item>
      <plus-grid-item>
        <button>
          Focus
          <plus-tooltip trigger="focus">Tooltip</plus-tooltip>
        </button>
      </plus-grid-item>
      <plus-grid-item>
        <button>
          Click
          <plus-tooltip trigger="click">Tooltip</plus-tooltip>
        </button>
      </plus-grid-item>
    </plus-grid>
  );
};

export default TooltipTrigger;
