function calculate() {
  const length = parseFloat(document.getElementById('length').value) || 0;
  const height = parseFloat(document.getElementById('height').value) || 0;
  const tileLength = parseFloat(document.getElementById('tileLength').value) || 0;
  const tileHeight = parseFloat(document.getElementById('tileHeight').value) || 0;
  const piecesInBox = parseFloat(document.getElementById('piecesInBox').value) || 1;

  const sqft = length * height;
  document.getElementById('sqft').innerText = sqft.toFixed(2);

  if (tileLength > 0 && tileHeight > 0) {
    const ltilePieces = Math.ceil(length / tileLength);
    const htilePieces = Math.ceil(height / tileHeight);
    const totalPieces = ltilePieces * htilePieces;

    document.getElementById('ltilePieces').innerText = ltilePieces;
    document.getElementById('htilePieces').innerText = htilePieces;
    document.getElementById('totalPieces').innerText = totalPieces;

    const totalBoxes = Math.ceil(totalPieces / piecesInBox);
    document.getElementById('totalBoxes').innerText = totalBoxes;
  }
}
