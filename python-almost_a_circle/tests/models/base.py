#!/usr/bin/python3
 '''Create a class called base
 '''

 import json 
 import csv
 import turtle


 class Base:
     '''Class base created
     '''

     __nb_objects = 0

     def __init__(self, id=None):
         '''initialising function
         '''
         if id is not None:
             self.id = id
         else:
             Base.__nb_objects =+ 1
             self.id =Base.__nb_objects 

