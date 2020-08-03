from google.cloud import pubsub_v1
import os

credential_path = "C:/Users/wutti/Documents/GitHub/try_30_pubsub_order_send/pubsub_key_01.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
# TODO(developer)
project_id = "main-project-01-279302"
topic_name = "my_topic"

publisher = pubsub_v1.PublisherClient()
# The `topic_path` method creates a fully qualified identifier
# in the form `projects/{project_id}/topics/{topic_name}`
topic_path = publisher.topic_path(project_id, topic_name)

for n in range(1, 10):
    data = u"Message number {}".format(n)
    # Data must be a bytestring
    data = data.encode("utf-8")
    # When you publish a message, the client returns a future.
    future = publisher.publish(topic_path, data=data)
    print(future.result())

print("Published messages.")
