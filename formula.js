export const quadraticFormula = (a,b,c) => ([
    ((-b)+Math.sqrt((b)**2-(4*a*c)))/(2*a),
    ((-b)-Math.sqrt((b)**2-(4*a*c)))/(2*a)
]);