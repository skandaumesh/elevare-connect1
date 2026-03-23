const fs = require('fs');
const path = require('path');
const dir = 'src/components/home';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.jsx')) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');

        // Find the return block
        let retIndex = content.indexOf('return (');
        if (retIndex === -1) return;

        let innerJSXStart = retIndex + 'return ('.length;
        let innerJSXEnd = content.lastIndexOf(');');

        let jsx = content.substring(innerJSXStart, innerJSXEnd);

        // Trim leading trash: find the first '<'
        let firstTagIndex = jsx.indexOf('<');
        if (firstTagIndex !== -1) {
            jsx = jsx.substring(firstTagIndex);
        }

        // Trim trailing trash: find the last '>'
        let lastTagIndex = jsx.lastIndexOf('>');
        if (lastTagIndex !== -1) {
            jsx = jsx.substring(0, lastTagIndex + 1);
        }

        // Reconstruct with React fragment to capture potential sibling nodes purely
        content = content.substring(0, innerJSXStart) + '\n      <>\n        ' + jsx + '\n      </>\n    ' + content.substring(innerJSXEnd);

        fs.writeFileSync(path.join(dir, file), content, 'utf8');
    }
});
console.log('Successfully fixed JSX syntax errors securely.');
