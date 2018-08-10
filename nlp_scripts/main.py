# import requests
import json

# def _get_results(search_term, acc, start):
# 	#search_term is term to be searched
# 	#acc is array that accumulates IDs
# 	#start is where the request should start
# 	#QA: tested boundary cases with retmax
# 	retmax = 100000
# 	payload = {
# 		"db":"pubmed",
# 		"term":search_term,
# 		"retstart":start,
# 		"retmax":retmax,
# 		"retmode":"json"
# 		}
# 	response = requests.get("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi", params=payload).json()
# 	acc += response["esearchresult"]["idlist"]
# 	if (start + retmax) < int(response["esearchresult"]["count"]): #if end of query is still less than total
# 		return _get_results(search_term, acc, start+retmax)
# 	else:
# 		return acc
# def get_results(search_term):
# 	return _get_results(search_term, [], 0)
# def get_url(pmid):
# 	return "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&id=%s&retmode=ref&cmd=prlinks" %str(pmid)
# results = get_results("elotuzumab")
# payload = {
# 	"search": "id:c60443d0-b482-44d2-9479-4b7998dd7eed"
# }
# response = requests.get("https://api.fda.gov/drug/label.json", params=payload)
# bs = json.loads(response.text)
# print(bs["results"][0]["openfda"]["application_number"])
# print(requests.get("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4183226/x").text)
num_of_records = 5000
output = []
for j in range(1,7):
	with open('./drugMe/seed_files/drug-label-000'+ str(j) +'-of-0006.json', 'r') as file:
		a = json.load(file)
		for i in range(0, len(a["results"]), num_of_records):
			for item in a["results"][i:i+num_of_records]:
				try:
					output.append({
						"id": item["id"],
						"brand_name": item["openfda"]["brand_name"][0],
						"generic_name": item["openfda"]["generic_name"][0],
						"indications": item["indications_and_usage"][0]})
				except:
					continue
				# 	print(item)
				# 	import pdb; pdb.set_trace()
with open('./drugMe/seed_files/drug-label.json', 'w') as outfile:
	outfile.write(json.dumps(output))