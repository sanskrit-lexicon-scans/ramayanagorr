https://github.com/sanskrit-lexicon-scans/ramayanagorr

Ref: https://github.com/sanskrit-lexicon/PWK/issues/83

How pdfpages was constructed.


PDF sources
- vol 1: https://www.google.com/books/edition/Ramayana/zBoXAAAAQAAJ?hl=en
- vol 2: https://archive.org/details/in.ernet.dli.2015.292735
- vol 3: https://www.google.com/books/edition/Ramayana/YSgXAAAAQAAJ?hl=en
- vol 4: https://archive.org/details/bub_gb_rZcse9Ud6iwC
- vol 5: https://www.google.com/books/edition/Ramayana/Q2UXAAAAQAAJ?hl=en
- vol 6(uk): https://www.digitale-sammlungen.de/en/view/bsb10219770

6 pdfs were downloaded from these sources. The pdfs renamed as:

- vol 1: google/Ramayana1Google.pdf
- vol 2: google/dli_vol2.pdf
- vol 3: google/Ramayana3Google.pdf
- vol 4: google/bubprint.pdf
  bub_vol4.pdf was downloaded. Then
  opened in Edge browser, and printed to a file, bubprint.pdf
- vol 5: google/Ramayana5Google.pdf
- vol 6: Bayer/uk.pdf

For each pdf, all pages were extracted to 1-page pdfs using Adobe Acrobat.

- vol 1: google/1pages/
- vol 2: google/2pages/
- vol 3: google/3pages/
- vol 4: google/4pages/
- vol 5: google/5pages/
- vol 6: Bayer/ukpages/

For each volume, run  a script which copies and renames
selected 1-page pdfs to pdfpages folder.
- sh renum_1.sh
- sh renum_2.sh
- sh renum_3.sh
- sh renum_4.sh
- sh renum_5.sh
- sh renum_uk.sh

That's the main step.

A few pages were manually replaced.

These scripts constructed by a python program renum.py.
Notes on this (used to construct renum.py)
readme_renum.txt has notes guiding the construction of renum.py

 For example from renum_1.sh
cp 'google/1pages/Ramayana1Google 150.pdf' pdfpages/rgorr_1.001.pdf

