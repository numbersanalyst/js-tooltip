const boxes = document.querySelectorAll('.boxes div');

const createTooltip = (e) => {
    const tooltipExist = e.target.querySelector('.tooltip');
    const eventTarget = e.target.tagName;

    if (!tooltipExist && eventTarget == 'DIV') {
        const tooltipParent = e.target;
        const tooltipText = e.target.dataset.tooltip;
        const tooltipPosition = e.target.dataset.tooltipPosition;
        const tooltipStatic = e.target.dataset.tooltipStatic;

        const newTooltip = document.createElement('span');
        newTooltip.innerHTML = tooltipText;
        newTooltip.className = `tooltip ${tooltipPosition || 'top'}`;

        tooltipParent.appendChild(newTooltip);

        if (tooltipStatic) {
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
    const tooltipStatic = e.target.dataset.tooltipStatic;
    if (!tooltipStatic && tooltip) { tooltip.remove(); }
};

const removeTooltipByBtn = (e) => {
    const tooltip = e.target.parentNode;
    tooltip.remove();
};

boxes.forEach((box) => box.addEventListener('mouseover', createTooltip));
boxes.forEach((box) => box.addEventListener('mouseleave', removeTooltip));