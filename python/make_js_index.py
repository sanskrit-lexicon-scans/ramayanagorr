# coding=utf-8
""" make_js_index.py
"""
from __future__ import print_function
import sys, re,codecs
import json

class Pagerec(object):
 def __init__(self,line,iline):
  line = line.rstrip('\r\n')
  parts = line.split('\t')
  assert len(parts) == 6
  self.line = line
  self.iline = iline
  partsnum = []
  flagnum = True
  for ipart,part in enumerate(parts):
   if ipart == 0:
    assert part in ['1','2','3','4','5','UK']
    partsnum.append(part)
    continue
   # other items treated as numbers
   m = re.search(r'^([0-9]+)',part)
   if m == None:
    part = None
    flagnum = False
   else:
    part = m.group(1)
   partsnum.append(part)
  self.flagnum = flagnum
  self.vol = partsnum[0]
  self.page = partsnum[1]
  self.kanda = partsnum[2]
  self.sarga = partsnum[3]
  self.verse1 = partsnum[4]
  self.verse2 = partsnum[5]
  # remove 'a','b', etc. 
  
 def todict(self):
  e = {
   'v':self.vol, 'page':int(self.page), 'k':int(self.kanda),
   's':int(self.sarga),
   'v1':int(self.verse1), 'v2':int(self.verse2)
  }
  return e
def init_pagerecs(filein):
 """ filein is a csv file, with tab-delimiter and with first line as fieldnames
 """
 recs = []
 with codecs.open(filein,"r","utf-8") as f:
  for iline,line in enumerate(f):
   if (iline == 0):
    assert line.startswith('Volume') # skip column-title line
    continue
   pagerec = Pagerec(line,iline)
   if pagerec.flagnum:
    # skip some records
    recs.append(pagerec)
 print(len(recs),'Page records read from',filein)
 return recs

def init_kandasargadict(pagerecs):
 d = {}
 for rec in pagerecs:
  key = "%s.%s" %(rec.kanda,rec.sarga)
  #assert 1 <= key <= 18
  if key not in d:
   d[key] = []
  recobj = rec.todict()
  d[key].append(recobj)
 return d

def init_kandadict(pagerecs):
 d = {}
 kold = None
 for rec in pagerecs:
  k = rec.kanda;
  s = rec.sarga
  key = "%s.%s" %(rec.kanda,rec.sarga)
  if k not in d:
   d[k] = {}
  if s not in d[k]:
   d[k][s] = []
  recobj = rec.todict()
  d[k][s].append(recobj)
 return d

def write_kanda(fileout,d):
 # d is a dictionary of kandas,
 # and each value is a dictionary
 # Generate a javascript file setting value of a global indexdata
 outarr = []
 outarr.append('indexdata = {')
 for k in d:
  # key has form k  (1 to 7)
  outarr.append(' %s: {' % k)
  sd = d[k] # dictionary of sargas
  for s in sd:
   outarr.append('  %s: [' % s)
   pagerecs = sd[s]  # array of dictionaries
   for pagerec in pagerecs:
    # pagerec is a dict
    jsonstring = json.dumps(pagerec)
    outarr.append('    %s,' % jsonstring)
   outarr.append(' ], ') # end of pagerecs
  outarr.append(' },') # end of sarga dictionary
 outarr.append('};') # end of kanda dictionary
 with codecs.open(fileout,"w","utf-8") as f:
  for out in outarr:
   f.write(out + '\n')
 print(len(outarr),'lines written to',fileout)

def write_kandasarga(fileout,d):
 # d is a dictionary, and each value is an array of dictionaries
 # Generate a javascript file setting value of a global indexdata
 outarr = []
 outarr.append('indexdata = {')
 for key in d:
  # key has form k.s  (kanda,sarga)
  arr = d[key] # an array
  outarr.append(' "%s": [' % key)
  for a in arr:
   # a is a dict
   jsonstring = json.dumps(a)
   outarr.append('  %s,' % jsonstring)
  outarr.append(' ], ') # end of array arr
 outarr.append('};') 
 with codecs.open(fileout,"w","utf-8") as f:
  for out in outarr:
   f.write(out + '\n')
 print(len(outarr),'lines written to',fileout)

if __name__ == "__main__":
 filein=sys.argv[1]  # tab-delimited index file
 fileout = sys.argv[2]
 pagerecs = init_pagerecs(filein)
 #kandasargadict = init_kandasargadict(pagerecs)
 #write_kandasarga(fileout,kandasargadict)
 kandadict = init_kandadict(pagerecs)
 write_kanda(fileout,kandadict)
 
