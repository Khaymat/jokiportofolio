from PIL import Image
import numpy as np

img = Image.open(r'D:\projek\wordpress-0626020\jokiportofolio\public\assets\media\0e5a349d6e1e74b1c26a0f0e7be5ec6a.png')
arr = np.array(img)
alpha = arr[:,:,3]

content_rows = np.where((alpha > 10).any(axis=1))[0]
print('Rows with content and their column segments:')
for y in range(content_rows[0], content_rows[-1]+1, 3):
    col_has = (alpha[y] > 10)
    transitions = np.diff(col_has.astype(int))
    starts = np.where(transitions == 1)[0] + 1
    ends = np.where(transitions == -1)[0]
    if col_has[0]:
        starts = np.insert(starts, 0, 0)
    if col_has[-1]:
        ends = np.append(ends, len(col_has)-1)
    n_seg = len(starts)
    seg_str = " | ".join([f"{s}-{e}" for s, e in zip(starts, ends)])
    print(f"y={y:3d}: {n_seg} seg: {seg_str}")
