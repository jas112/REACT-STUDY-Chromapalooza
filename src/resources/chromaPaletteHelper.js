import chroma from 'chroma-js';

const levels = [50, 100, 200, 300,400, 500, 600, 700, 800, 900];

function generateColorPalette(starterPalette){
    let newColorPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

    for (const level of levels) {
        newColorPalette.colors[level] = [];
    }

    for (const color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse();
        for (let i in scale) {
            newColorPalette.colors[levels[i]].push({
                name:`${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g,'-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            });
        }
    }
    return newColorPalette;
}

function generateSingleColorPalette(paletteId, colorId, paletteLibrary){

    let palette = generateScaledPaletteById(paletteId, paletteLibrary);

    let colorIdCheck = colorId;
    // console.log(`colorIdCheck = ${colorIdCheck}`);

    let singleColorPalette = {
        paletteName: palette.paletteName,
        id: palette.id,
        emoji: palette.emoji,
        colors: []
    };

    for (const level of levels) {
        let colorArr = palette.colors[level];
        colorArr.forEach(color => {
            if (colorIdCheck === color.id) {
                if (level > 50) {
                    singleColorPalette.colors.push(color);
                }
            } 
        });

    }

    return singleColorPalette;
}

function getColorShadesFromPalette(palette, colorId){

    let colorShades = [];
    let fullPaletteColors = palette.colors;

    for (let key in fullPaletteColors) {
        colorShades = colorShades.concat(
            fullPaletteColors[key].filter(color => color.id === colorId)
        );
    }

    palette.colors = colorShades
    // console.log(`colorShades-palette: ${JSON.stringify(palette)}`);

    return palette;
}

function getRange(colorHexValue){
    const end = '#ffffff';

    let range = [
        chroma(colorHexValue).darken(1.4).hex(),
        colorHexValue,
        end
    ];

    // console.log(`range: ${range}`);

    return range;
}

function generateScale(colorHexValue, numOfColors){
    let newScale = chroma.scale(getRange(colorHexValue)).mode('lab').colors(numOfColors);

    // console.log(`newScale: ${newScale}`);

    return newScale;
}

function retreivePalette(id, paletteLibrary){

    // console.log(`id: ${id}`);

    let targetPalette = paletteLibrary.find(function(palette){
        return palette.id === id
    });

    // console.log(`${JSON.stringify(targetPalette)}`);

    return targetPalette;

}

function generateScaledPaletteById(id, paletteLibrary){

    let rootPalette = retreivePalette(id, paletteLibrary);
    // console.log(`rootPalette: ${JSON.stringify(rootPalette)}`);

    let generatedScaledPalette = generateColorPalette(rootPalette);
    // console.log(`generatedScaledPalette: ${JSON.stringify(generatedScaledPalette)}`);

    return generatedScaledPalette;
}

export { generateScaledPaletteById, generateSingleColorPalette};