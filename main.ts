import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `My mother pours tea at the kitchen table.
The mug is chipped on one side.
She holds it with both hands.
'That light,' she says, 'left two and a half million years ago.'
The clock ticks.
The porch bulb hums.
She looks at the window, then back at me.
'It only just got here.'`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
