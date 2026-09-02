// tsc's declaration emit preserves side-effect imports verbatim (e.g.
// `import './Button.css';`), because it can't prove they're safe to drop.
// Those lines carry no type information and there's no `Button.css` file
// shipped in dist/types for them to resolve against, so every consumer's
// editor/tsc flags them (TS2882/TS7016) the moment they open our types.
// Strip them out of the generated .d.ts files as a postbuild step.
const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '..', 'dist', 'types');
const cssImportLine = /^import\s+['"].*\.css['"];?\s*$/;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.d.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const stripped = content
        .split('\n')
        .filter(line => !cssImportLine.test(line))
        .join('\n');
      if (stripped !== content) {
        fs.writeFileSync(full, stripped);
      }
    }
  }
}

if (fs.existsSync(typesDir)) {
  walk(typesDir);
}
