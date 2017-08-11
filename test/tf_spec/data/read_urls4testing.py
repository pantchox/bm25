from pprint import pprint

File = "C:/Users/jjung/Documents/GitHub/bkmark_organizer/chro_extension/model/vsm/spec/BOW_samples.txt"
urlList = open(File, 'r').read().splitlines()
wordsMatr = [row.split(',') for row in urlList]
for elem in wordsMatr:
   print(elem, ',')   

##print(urlList)
# pprint(urlList)
