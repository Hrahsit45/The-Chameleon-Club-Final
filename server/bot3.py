import sys
import json
from n import run_bot


def respond_to_message(message):
    output_str = run_bot(message)
    response = output_str

    return response

while True:
    line = sys.stdin.readline()
    if not line:
        break
    message = json.loads(line)['message']
    response = respond_to_message(message)

    sys.stdout.write(json.dumps({'response': response}) + '\n')
    sys.stdout.flush()
