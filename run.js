const secretVars = [
    'NON_CRITICAL',
    'CRITICAL',
];

secretVars.forEach(v => {
    const secretVar = process.env[v];

    const arrayConverted = secretVar.split('')
    arrayConverted.splice(-1, 0, '-')

    console.log(`The content of \$${v} (skip reading "-" between the last 2 chars): ` + arrayConverted.join(''))
});
