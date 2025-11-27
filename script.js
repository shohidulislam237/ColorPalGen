function generatePalette() {
    const baseColor = document.getElementById("baseColor").value;
    const paletteDiv = document.getElementById("palette");
    paletteDiv.innerHTML = "";
    
    for(let i=0; i<5; i++){
        const box = document.createElement("div");
        box.className = "color-box";
        // Simple random color generator for demo
        box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        paletteDiv.appendChild(box);
    }
}
