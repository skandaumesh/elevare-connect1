const fs = require('fs');
const path = require('path');
const dir = 'src/components/home';

const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace any occurrence of `/* ══ SOMETHING ══ */}` with an empty string
    content = content.replace(/\/\* ══.*?══ \*\/\}/g, '');
    
    // Also the Testimonials constants block had an issue? Wait, I will just do this clean up.
    // If it starts with `return (` and then `<section>`, we are good.
    // Sometimes there are multiple top-level elements without a fragment now if I just removed the comment?
    // Let's ensure top level is wrapped in <> </> just in case.
    
    // The safest is just replacing the broken comment tail.
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
  }
});
console.log('Fixed comments in JSX files');
