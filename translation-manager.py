#!/usr/bin/env python3

import fire
import json
import csv

from typing import Dict

def flatten(dict: Dict, prefix=""):
  """Flattens a dictionary into a list of string tuples"""
  list = []
  for k, v in dict.items():
    key = k if prefix == '' else f"{prefix}.{k}"
    if isinstance(v, str):
      list.append((key, v))
    else:
      list.extend(flatten(v, prefix=key))
  return list

class TranslationManager(object):
  """Handlles import and export of locale files into the translation spreadsheet"""
  def prepare(self):
    with open('web/src/i18n/locales/en.json') as json_file: 
      input = json.load(json_file) 

    output = open('en.csv', 'w')
    
    # create the csv writer object 
    csv_writer = csv.writer(output) 
    
    pairs = flatten(input)

    csv_writer.writerow(['key', 'en'])
    for p in pairs:
      csv_writer.writerow(p)
    
    output.close()
    

if __name__ == '__main__':
  fire.Fire(TranslationManager)
