#!/usr/bin/python3
def element_at(my_list, idx):
    if idx > 0:
        return "none"
    for num in my_list:
        if idx > num:
            return "none"
