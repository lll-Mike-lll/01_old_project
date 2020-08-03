from google.cloud import bigquery

# Construct a BigQuery client object.
client = bigquery.Client()

query = """
    select * from test_01.table_02
"""
query_job = client.query(query)

print(type(query_job))

# for row in query_job:
#     print(row["name"])
# print(query_job)
