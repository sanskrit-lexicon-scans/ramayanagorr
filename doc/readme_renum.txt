Extraction of pages for Ramayana

Extract all pages with Adobe Acrobat 9
google/ukpages  from Bayer/uk.pdf
file names 'uk N.pdf'  N = 1 to 513


============================================================
gorresio vol. 1
rgorr1
google/1pages  from Ramayana1Google.pdf
file names 'Ramayana1Google N.pdf' N = 1 to 519
Renamed files in pdfpages
pdfpages/rgorr_V.X.pdf
V = Volume (1,2,3,4,5,uk)
pdfpages/rgorr_1.X.pdf
note N - X = 149 for 150 <= N <= 501
N    X     Description
2    000a  Title page of volume
150  001   page 1 internal Sanskrit Title (rAmAyaRaM vAlmIkIyaM)
151  002   blank
152  003   invocation and first kanda 
153  004   page 4 internal
... first kanda continues
456  307   last page of first kanda
457  308   blank
458  309   ayoDyAkARqaM title page 2nd kanda
459  310   blank
460  311   2nd kanda sarga 1 begins
...
501  352   end of 9th sarga of 2nd kARqa. Last extracted page
-----------
rest of pages not used:
502  353   Annotazioni
505  356   End of Annotazioni
506  357   sargasaMgrahapatraM  index to sargas (kanda 1: 1-80, kanda 2: 1-9)

 python renum.py 1 renum_1.sh
353 lines written to renum_1.sh
sh renum_1.sh

============================================================
gorresio vol. 2
rgorr2
google/2pages from dli_vol2.pdf
file names 'dli_vol2 N.pdf' N = 1 to 514
Renamed files in pdfpages
pdfpages/rgorr_2.X.pdf
note N - X = 49 for 50 <= N <= 284
     N - X = 21 for 285 <= N <= 488
N    X     Description
8    000a  Title page of volume
50   001   page 1 internal Sanskrit Title (ayoDyAkARqaM)
51   002   blank
52   003   sarga 10 of ayoDyAkARqaM begins
53   004   page 4 internal
...
284  235
(- 284 235) = 49   pages 236-263 missing
   kanda 2, Sarga 66, verses 40-49 (page 236).
285  264  (- 285 264) 21
...
488  467  (- 488 467) 21  last page of ayoDyAkARqaM
-----------------------------
rest of pages unused
489  468  blank
490  469  Annotazioni
...
498 477  Supplement to annotations of volume 1
...
500 479  sargasaMgrahapatraM for ayoDyAkARqaM sarga 10-127
...
506 485  end of sargasaMgrahapatraM
507 486  SudDipatraM
...
509 488  aggiunte alle correzioni del volume primo and all'introduzione
and some more stuff in a few pages
...
554  527  sargasaMgrahapatraM begins for kizkinDyAkARqaM (sargas 34-63)
          sundarakARqaM (sargas 1-95)
(- 654 597) 27 check
-----------------
missing pages
285  236  (- 285 236) 49
312  263  (- 312 263) 49
28 pages extracted from Bayer version
(- 468 442)
------------------
This is more complicated, due to the missing pages.
python renum.py 2 renum_2.sh
    lines written to renum_2.sh
sh renum_2.sh
cp pdfpages/rgorr_2*.pdf /e/sanskrit-lexicon-scans/ramayanagorr/pdfpages/
============================================================
gorresio vol. 3
rgorr3
google/3pages from Ramayana3Google.pdf
file names 'Ramayana3Google N.pdf' N = 1 to 511
Renamed files in pdfpages
pdfpages/rgorr_3.X.pdf
note N - X = 47 for 48 <= N <= 511
N    X     Description
8    000a  Title page of volume
48   001   page 1 internal Sanskrit Title (ayoDyAkARqaM)
49   002   blank
50   003   10th sarga of ayoDyAkARqaM begins
51   004   page 4 internal
...
511  464   page 464 internal last page of Sanskrit verses
(- 511 464)
-------------
rest of pages unused
517  468  blank
518  469  Annotazioni

-----------------
(page 424 bad scan, also 434, 448, 460, 466,
bad pages in annotazioni  470)
------------------
python renum.py 3 renum_3.sh
465 lines written to renum_3.sh
sh renum_3.sh
cp pdfpages/rgorr_3.???.pdf /e/sanskrit-lexicon-scans/ramayanagorr/pdfpages

============================================================
gorresio vol. 4
rgorr4
google/4pages from bubprint.pdf
file names 'Pages from bubprint N.pdf' N = 1 to 567
Renamed files in pdfpages
pdfpages/rgorr_4.X.pdf
note N - X = 27 for 29 <= N <= ?
N    X     Description
7    000a  Title page of volume
29   002   page 2 internal Sanskrit Title (kizkinDyAkARqaM)
           NOTE: there is no blank page  here.
	   So prior page is numbered 'X=2'
30   003   sarga 34 of kizkinDyAkARqaM begins
31   004   page 4 internal
...
551  524   page 524 internal last page of sundarakARqaM
(- 551 524) 27:  Thus, there are no missing pages
-------------
rest of pages unused
552  525  Annotazioni
...
554  527  sargasaMgrahapatraM begins for kizkinDyAkARqaM (sargas 34-63)
          sundarakARqaM (sargas 1-95)
(- 654 597) 27 check
-----------------
bad pages ?
------------------
python renum.py 4 renum_4.sh
524 lines written to renum_4.sh
sh renum_4.sh
cp pdfpages/rgorr_4*.pdf /e/sanskrit-lexicon-scans/ramayanagorr/pdfpages/

============================================================
gorresio vol. 5
rgorr5
google/5pages from Ramayana5Google.pdf
file names 'Ramayana5Google N.pdf' N = 1 to 667
Renamed files in pdfpages
pdfpages/rgorr_5.X.pdf
note N - X = 57 for 58 <= N <= 648
N    X     Description
8    000a  Title page of volume
58   001   page 1 internal Sanskrit Title (yudDakARqaM)
59   002   blank
60   003   1st sarga of yudDakARqaM begins
61   004   page 4 internal
...
648  591   page 591 internal last page of rAmAyaRaM
(- 648 591)
-------------
rest of pages unused
649  592  blank
650  593  Annotazioni
...
654  597  sargasaMgrahapatraM begins for yudDakARqam
(- 654 597)
-----------------
bad pages ?
------------------
python renum.py 5 renum_5.sh
592 lines written to renum_5.sh
sh renum_5.sh
cp pdfpages/rgorr_5*.pdf /e/sanskrit-lexicon-scans/ramayanagorr/pdfpages/
============================================================
============================================================
gorresio uttarakanda

Bayer/uk.pdf
pages in Bayer/ukpages/ directory
file names 'uk N.pdf' N = 1 to 513
Renamed files in pdfpages
pdfpages/rgorr_uk.X.pdf
note N - X = 29  for 30 <= N <= 476 
N    X     Description
8    000a  Title page of volume
30   001   page 1 internal Sanskrit Title (uttarakARqaM)
31   002   blank
32   003   1st sarga of uttarakARqaM begins
33   004   page 4 internal
...
476  447   page 447 internal last page of uttarakARqaM
(- 476 447) = 29. So, no missing pages!
-------------
rest of pages unused

-----------------
bad pages ?
------------------
python renum.py uk renum_uk.sh
448 lines written to renum_uk.sh
sh renum_uk.sh
cp pdfpages/rgorr_uk*.pdf /e/sanskrit-lexicon-scans/ramayanagorr/pdfpages/
=============================================================
error uploading!
jimfu@DESKTOP-6PTUC6R MINGW64 /e/sanskrit-lexicon-scans/ramayanagorr (main)
$ git push
Enumerating objects: 453, done.
Counting objects: 100% (453/453), done.
Delta compression using up to 16 threads
Compressing objects: 100% (451/451), done.
error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)
Writing objects:  20% (93/451)fatal: the remote end hung up unexpectedly
Writing objects: 100% (451/451), 198.22 MiB | 1.44 MiB/s, done.
Total 451 (delta 2), reused 0 (delta 0), pack-reused 0
fatal: the remote end hung up unexpectedly
Everything up-to-date
-----------------------------------------------------------
Second try also failed.
jimfu@DESKTOP-6PTUC6R MINGW64 /e/sanskrit-lexicon-scans/ramayanagorr (main)
$ git push
Enumerating objects: 453, done.
Counting objects: 100% (453/453), done.
Delta compression using up to 16 threads
Compressing objects: 100% (451/451), done.
error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)
Writing objects:   6% (28/451fatal: the remote end hung up unexpectedly
Writing objects: 100% (451/451), 198.22 MiB | 3.99 MiB/s, done.
Total 451 (delta 2), reused 0 (delta 0), pack-reused 0
fatal: the remote end hung up unexpectedly
Everything up-to-date

"""
When using git to update or submit a project, “fatal: the remote end hung up unexpectedly” appears because the pushed file is too large That’s simple, either the cache is not enough, or the network is not good, or the wall is the reason Especially when the resource pool is abroad.
"""

https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git#:~:text=%20Undo%20a%20commit%20%26%20redo%20%201,head%20to%20.git%2FORIG_HEAD%3B%20commit%20with%20-c...%20More%20

git reset HEAD~

Do smaller number of pages
$ git add pdfpages/rgorr_uk.0*.pdf
git commit -m "..."  44 MB
git push
commit 9dafad5e9c8c0631e8caa6258ed5a23a34d871fc

git add pdfpages/rgorr_uk.1*.pdf
git commit ...  and git push  (47 MB)
commit 46bd8b6a0684db46633bd56a2f39bf49a7651828

git add pdfpages/rgorr_uk.2*.pdf
git commit ...  and git push  (44 MB)
commit 98aed90618e79517cc215eabf5769498b4149835

git add pdfpages/rgorr_uk.3[0-4]*.pdf
git commit ...  and git push  (21 MB)
commit 1f35d84db820fcdae40b43e28294e0c6f3abb233

git add pdfpages/rgorr_uk.3[5-9]*.pdf
git commit ...  and git push  (21 MB)
commit b40b9fc915ea12e326b663f8e04b0a9175639286

git add pdfpages/rgorr_uk.4[0-2]*.pdf
git commit ...  and git push  (13 MB)
commit f1955c604873760b348961d94a2fec7112e4d87d

git add pdfpages/rgorr_uk.4[3-9]*.pdf
git commit ...  and git push  (8 MB)
commit 43c0b74e0eb2b7e0dea50239e3c53d2215da3c0c
This finishes (finally) the upload of uttarkanda pdf pages.
============================================================


============================================================
volume 4 difficulties
============================================================
google/4pages from bub_vol4.pdf FAILED
#filenames 'bub_vol4 N.pdf' N = 1 to 567
 'You are viewing document in pdf/a mode'  Could not extract
 edit/preferences document change 'pdf/a' mode to 'never'
 Now Extract menu available: 'Wrong type parameter supplied to a PDS procedure'
 Page extraction failed.

 FURTHER
google/4pages from bubprint.pdf  192MB
  open bub_vol4.pdf in Edge broswer, print to bubprint.pdf, then
  open bubprint.pdf in adobe acrobat, extract pages. SUCCESS!
  Note bubprint.pdf is much larger: 192MB vs. 15MB of bub_vol4.pdf.
filenames 'Pages from bubprint N.pdf' N = 1 to 567.

https://archive.org/download/bub_gb_rZcse9Ud6iwC/bub_gb_rZcse9Ud6iwC.pdf
(national central library of rome  )

bub_vol4.pdf
Could not extract
  open bub_vol4.pdf in Edge broswer, print to bubprint.pdf, then
  open bubprint.pdf in adobe acrobat 9, extract pages. SUCCESS!
  Note bubprint.pdf is much larger: 192MB vs. 15MB of bub_vol4.pdf.
filenames 'Pages from bubprint N.pdf' N = 1 to 567.

====================================================================


====================================================================
selecting and renaming
output file names k_sss_ppp.pdf
  k = kanda (1-7 or 8 = uk)
  sss = sarga (001, 002, etc.)
  ppp = page page within kanda
  Alternately:
  k_ppp.pdf
Renumber pages for volume 1
 python renum.py 1 renum_1.sh

google/1pages  from Ramayana1Google.pdf
file names 'Ramayana1Google N.pdf' N = 1 to 519

