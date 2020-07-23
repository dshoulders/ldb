(() => {
    const setStyle = (ratios, row) => {
        if (ratios.every(r => r !== undefined)) {
            rowStyle = '';
            ratios.forEach(r => rowStyle = rowStyle + r + 'fr ');
            row.style.gridTemplateColumns = rowStyle;
        }
    }

    document.querySelectorAll('.img-row').forEach(
        row => {
            const ratios = [];
            row.querySelectorAll('img').forEach(
                (img, i, arr) => {
                    if (img && img.complete) {
                        ratios[i] = img.naturalWidth / img.naturalHeight;
                    } else {
                        img && img.addEventListener('load', e => {
                            ratios[i] = img.naturalWidth / img.naturalHeight;
                            setStyle(ratios, row);
                        });
                    }
                }
            );
            setStyle(ratios, row);
        });
})();