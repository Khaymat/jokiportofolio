#!/bin/bash
POS=$1
sed -i -E 's/-translate-x-[0-9]+ sm:translate-x-0|translate-x-[0-9]+ sm:translate-x-0|translate-x-2 sm:translate-x-0/'"$POS"' sm:translate-x-0/' src/components/sections/HeroSection.tsx
npm run build > /dev/null 2>&1
kill $(lsof -t -i :3000) 2>/dev/null || true
npm run start > /dev/null 2>&1 &
sleep 5
node screenshot.js
