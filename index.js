const boxes = document.querySelectorAll('.boxes div');

let tooltipWithBtn = false; // tooltip with btn, exist check

const createTooltip = (e) => {
    const tooltipState = e.target.dataset.tooltipState;
    if (!tooltipWithBtn) {
        const tooltipParent = e.target;
        const tooltipText = e.target.dataset.tooltip;
        const tooltipPosition = e.target.dataset.tooltipPosition;

        const newTooltip = document.createElement('span');
        newTooltip.innerHTML = tooltipText;
        newTooltip.className = `tooltip ${tooltipPosition || 'top'}`;

        tooltipParent.appendChild(newTooltip);

        if (tooltipState == 'static') {
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = 'x';
            closeBtn.className = 'close-btn';

            closeBtn.addEventListener('click', removeTooltipByBtn);

            newTooltip.appendChild(closeBtn);

            tooltipWithBtn = true;
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

    tooltipWithBtn = false;
}

boxes.forEach((box) => box.addEventListener('mouseover', createTooltip));
boxes.forEach((box) => box.addEventListener('mouseleave', removeTooltip));