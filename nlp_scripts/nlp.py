
import nltk
from nltk.corpus import stopwords
import string
import pickle
from functools import reduce
import json

def calculate_cost(ngram, key):
    cost = 0
    for w in [k.lower() for k in ngram]:
        if w in [k.lower() for k in key]:
            cost += 1
    return cost - (abs(len(ngram) - len(key)) / len(key))

def clean_text(text):
    # print("processing text: " + text)
    return [w.lower() for w in nltk.word_tokenize(text) if w.lower() not in stopwords.words('english') and w not in string.punctuation and w not in ["blood", "pressure"]]
def pos_clean(text):
    pos = nltk.pos_tag([w.lower() for w in nltk.word_tokenize(text) if w not in string.punctuation])
    important_spots = []
    for i in range(len(pos)):
        if pos[i][0] in ["for", "of"]:
            important_spots.append(i)
    output = []
    for spot in important_spots:
        o = []
        i = 1
        while spot+i < len(pos) and pos[spot+i][1] in ["JJ", "NN"]:
            o.append(pos[spot+i][0])
            i += 1
        if len(o) > 0:
            output.append(tuple(o))
    return output

#prep ICD
# icd_codes = {}
# with open('icd10cm_codes_2017.txt', 'r') as file:
#     for line in file:
#         icd_codes[tuple(clean_text(line[8:].rstrip()))] = line[:8].rstrip()
# with open('icd_codes', 'wb') as file:
#     try:
#         pickle.dump(icd_codes, file)
#     except:
#         import pdb; pdb.set_trace()
with open('icd_codes', 'rb') as file:
    icd_codes = pickle.load(file)
indications_to_seed = []
with open('./drugMe/seed_files/drug-label.json', 'r') as file:
    drug_label = json.load(file)
    for item in drug_label:
        print("processing: " + item["brand_name"])
        codes_that_apply = []
        indication = item["indications"].split(".")[0]
        normalized = pos_clean(indication)
        for key in icd_codes.keys():
            for t in normalized:
                if reduce(lambda x, y: x and y in key, [True] + list(t)):
                    codes_that_apply.append(icd_codes[key])
        indications_to_seed.append({"id":item["id"], "indication": codes_that_apply})
with open('./drugMe/seed_files/test_indications.json', 'w') as file:
    file.write(json.dumps(indications_to_seed))


# for i in range(6, 1, -1):
#     for ngram in nltk.ngrams(normalized, i):
#         for key in icd_codes.keys():
#             if icd_codes[key] not in codes_that_apply.keys() or codes_that_apply[icd_codes[key]] < calculate_cost(ngram, key):
#                 codes_that_apply[icd_codes[key]] = calculate_cost(ngram, key)
## need to think about how ICD tags are put together...? why are some "hypertensive heart disease" vs "essential hypertension"
# print([item[0] for item in sorted(codes_that_apply.items(), key=lambda x: codes_that_apply[x[0]], reverse=True) if item[1] >= 0.8])
