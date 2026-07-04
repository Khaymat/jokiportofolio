from PIL import Image
import numpy as np

img = Image.open(r'D:\projek\wordpress-0626020\jokiportofolio\public\assets\media\0e5a349d6e1e74b1c26a0f0e7be5ec6a.png')
arr = np.array(img)
alpha = arr[:,:,3]

# Find full content bounds
col_has = (alpha > 10).any(axis=0)
row_has = (alpha > 10).any(axis=1)
col_start = np.where(col_has)[0][0]
col_end = np.where(col_has)[0][-1]
row_start = np.where(row_has)[0][0]
row_end = np.where(row_has)[0][-1]

print(f"Content bounds: x={col_start}-{col_end}, y={row_start}-{row_end}")
print(f"Content size: {col_end-col_start+1} x {row_end-row_start+1}")

# Logo area = exclude decorative bands top & bottom
# Find first and last rows where segments > 1 (gaps appear)
logo_start = None
logo_end = None
for y in range(row_start, row_end+1):
    col_has_y = (alpha[y] > 10)
    trans = np.diff(col_has_y.astype(int))
    starts = np.where(trans == 1)[0] + 1
    ends = np.where(trans == -1)[0]
    if col_has_y[0]:
        starts = np.insert(starts, 0, 0)
    if col_has_y[-1]:
        ends = np.append(ends, len(col_has_y)-1)
    n_seg = len(starts)
    if n_seg > 1:
        if logo_start is None:
            logo_start = y
        logo_end = y

print(f"Logo grid area: y={logo_start}-{logo_end}")
print(f"Logo grid height: {logo_end-logo_start+1}")

# 5 rows in logo area
row_h = (logo_end - logo_start + 1) / 5
print(f"Each row height: ~{row_h:.1f}px")

# Row 3 (middle): 0-indexed = row 2
r3_start = int(logo_start + 2 * row_h)
r3_end = int(logo_start + 3 * row_h) - 1
print(f"Row 3 (middle): y={r3_start}-{r3_end} (height={r3_end-r3_start+1})")

# Crop row 3 as single image
row3 = img.crop((col_start, r3_start, col_end+1, r3_end+1))
row3.save(r'D:\projek\wordpress-0626020\jokiportofolio\public\assets\media\univ_row_middle.png')
print(f"Saved: univ_row_middle.png ({row3.size[0]}x{row3.size[1]})")

# Also crop with tighter x-bounds (trim horizontal padding)
trimmed = img.crop((col_start, r3_start, col_end+1, r3_end+1))
trim_arr = np.array(trimmed)
trim_alpha = trim_arr[:,:,3]
trim_col_has = (trim_alpha > 10).any(axis=0)
if trim_col_has.any():
    tc_start = np.where(trim_col_has)[0][0]
    tc_end = np.where(trim_col_has)[0][-1]
    trimmed2 = trimmed.crop((tc_start, 0, tc_end+1, trimmed.size[1]))
    trimmed2.save(r'D:\projek\wordpress-0626020\jokiportofolio\public\assets\media\univ_row_middle_trimmed.png')
    print(f"Saved trimmed: univ_row_middle_trimmed.png ({trimmed2.size[0]}x{trimmed2.size[1]})")

# Also try scanning for 13 segments within the row to find sub-separations
row_arr = arr[r3_start:r3_end+1, col_start:col_end+1, :]
row_alpha = row_arr[:,:,3]
# Find columns where the entire row height has no content
col_empty = ~(row_alpha > 10).any(axis=0)
# Find gaps (empty columns)
gap_starts = []
in_gap = False
for x in range(len(col_empty)):
    if col_empty[x] and not in_gap:
        gap_starts.append(x)
        in_gap = True
    elif not col_empty[x] and in_gap:
        in_gap = False
print(f"Gaps within row 3: {len(gap_starts)} (if 12 gaps = 13 segments)")
if gap_starts:
    print(f"  Gap positions (relative to crop): {gap_starts[:20]}")
