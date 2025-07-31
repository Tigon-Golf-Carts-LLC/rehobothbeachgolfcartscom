#!/bin/bash

for file in *.tsx; do
  echo "Processing $file with comprehensive fixes..."
  
  # First pass: Fix basic Link components with wrong closing tags
  sed -i 's|<Link href="/contact">\([^<]*<Button[^>]*>[^<]*</Button>\s*\)</a>|<Link href="/contact">\1</Link>|g' "$file"
  
  # Second pass: Fix any remaining Link patterns
  sed -i 's|<Link href="/[^"]*">\([^<]*<Button[^>]*>[^<]*</Button>\s*\)</a>|<Link href="/contact">\1</Link>|g' "$file"
  
  # Third pass: Fix CTA sections with complex button patterns
  perl -i -pe 's|(<Link href="/contact">\s*<Button[^>]*>.*?</Button>\s*)</a>|$1</Link>|gs' "$file"
  
  echo "Fixed $file"
done

echo "Comprehensive fix completed for all files"
