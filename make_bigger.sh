#!/bin/bash
sed -i -E 's/w-\[110%\]/w-[130%]/g' src/components/sections/HeroSection.tsx
sed -i -E 's/scale-125/scale-150/g' src/components/sections/HeroSection.tsx
sed -i -E 's/-translate-x-12 sm:translate-x-0/-translate-x-4 sm:translate-x-0/g' src/components/sections/HeroSection.tsx
