function calculateWallTiles() {
    const length = parseFloat(document.getElementById('wallLength').value);
    const height = parseFloat(document.getElementById('wallHeight').value);
    const tileSize = parseInt(document.getElementById('wallTileSize').value);
    const tilesPerBox = (tileSize === 12) ? 10 : (tileSize === 16) ? 6 : 4;

    if (isNaN(length) || isNaN(height)) {
        alert("Please enter valid values for length and height.");
        return;
    }

    const totalSqFt = length * height;
    const totalTiles = totalSqFt / (tileSize * tileSize / 144);
    const totalBoxes = Math.ceil(totalTiles / tilesPerBox);

    document.getElementById('wallResults').innerHTML = `
        Total Area: ${totalSqFt.toFixed(2)} SqFt<br>
        Total Tiles: ${Math.ceil(totalTiles)}<br>
        Total Boxes of Tiles: ${totalBoxes}
    `;
}

function calculateFloorTiles() {
    const length = parseFloat(document.getElementById('floorLength').value);
    const width = parseFloat(document.getElementById('floorWidth').value);
    const tileSize = parseInt(document.getElementById('floorTileSize').value);
    const tilesPerBox = (tileSize === 12) ? 10 : (tileSize === 16) ? 6 : 4;

    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid values for length and width.");
        return;
    }

    const totalSqFt = length * width;
    const totalTiles = totalSqFt / (tileSize * tileSize / 144);
    const totalBoxes = Math.ceil(totalTiles / tilesPerBox);

    document.getElementById('floorResults').innerHTML = `
        Total Area: ${totalSqFt.toFixed(2)} SqFt<br>
        Total Tiles: ${Math.ceil(totalTiles)}<br>
        Total Boxes of Tiles: ${totalBoxes}
    `;
}
