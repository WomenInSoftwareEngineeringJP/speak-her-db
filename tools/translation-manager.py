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
  """Handles import and export of locale files into the translation spreadsheet"""
  def exportJSON(self, locale="en"):
    """"""
    with open(f'../web/src/i18n/locales/{locale}.json') as json_file: 
      input = json.load(json_file) 

    output = open(f"{locale}.csv", 'w')
    
    # create the csv writer object 
    csv_writer = csv.writer(output) 
    
    pairs = flatten(input)

    csv_writer.writerow(["key", locale])
    for p in pairs:
      csv_writer.writerow(p)
    
    output.close()
    
  def importCSV(self, file):
    #data = {}

    with open(file, encoding='utf-8') as csv_file:
      csvReader = csv.DictReader(csv_file) 
          
      # Convert each row into a dictionary  
      # and add it to data 
      for rows in csvReader: 
              
        print(rows)

if __name__ == '__main__':
  fire.Fire(TranslationManager)
