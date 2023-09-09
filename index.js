const boxes = document.querySelectorAll('.boxes div');

const createTooltip = (e) => {
    const tooltipExist = e.target.querySelector('.tooltip');
    const eventTarget = e.target.tagName;

    if (!tooltipExist && eventTarget == 'DIV') {
        const tooltipParent = e.target;
        const tooltipText = e.target.dataset.tooltip;
        const tooltipPosition = e.target.dataset.tooltipPosition;
        const tooltipState = e.target.dataset.tooltipState;

        const newTooltip = document.createElement('span');
        newTooltip.innerHTML = tooltipText;
        newTooltip.className = `tooltip ${tooltipPosition || 'top'}`;

        tooltipParent.appendChild(newTooltip);

        if (tooltipState) {
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = 'x';
            closeBtn.className = 'close-btn';

            closeBtn.addEventListener('click', removeTooltipByBtn);

            newTooltip.appendChild(closeBtn);
        }
    }
};

const removeTooltip = (e) => {
    const tooltip = e.target.querySelector('.tooltip');
    const tooltipState = e.target.dataset.tooltipState;
    if (!tooltipState && tooltip) { tooltip.remove(); }
};

const removeTooltipByBtn = (e) => {
    const tooltip = e.target.parentNode;
    tooltip.remove();
};

boxes.forEach((box) => box.addEventListener('mouseover', createTooltip));
boxes.forEach((box) => box.addEventListener('mouseleave', removeTooltip));