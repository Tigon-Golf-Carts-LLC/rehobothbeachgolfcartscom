#!/bin/bash
for file in *.tsx; do
  if [ -f "$file" ]; then
    # Fix all internal links that have wrong closing tags
    sed -i 's|href="/[^"]*">\([^<]*<Button[^>]*>[^<]*</Button>\s*\)</a>|href="/contact">\1</Link>|g' "$file"
    # Specifically fix /contact links
    sed -i 's|<Link href="/contact">\([^<]*<Button[^>]*>[^<]*</Button>\s*\)</a>|<Link href="/contact">\1</Link>|g' "$file"
  fi
done
