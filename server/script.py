import face_recognition
import numpy as np
import cv2
import sys
import subprocess
from PIL import Image
import numpy as np
import io
import json
import base64

data = sys.stdin.buffer.read()
print(f'{len(data)}')

try:
    jsonData = json.loads(data)
    upload_file_data, photo_file_data = jsonData['uploadFile'], jsonData['photoFile']
    print(f"Length of image_bytes1: {len(upload_file_data)}")
    print(f"Length of image_bytes2: {len(photo_file_data)}")

    image1 = base64.b64decode(upload_file_data.encode('utf-8'))
    image2 = base64.b64decode(photo_file_data.encode('utf-8'))


    image_np1 = np.frombuffer(image1, dtype=np.uint8)
    image_np2 = np.frombuffer(image2, dtype=np.uint8)
    print(f"Shape of image_np1: {image_np1.shape}")
    print(f"Shape of image_np2: {image_np2.shape}")

    image1 = cv2.imdecode(image_np1, cv2.IMREAD_COLOR)
    image2 = cv2.imdecode(image_np2, cv2.IMREAD_COLOR)

    print(image1)
    print(image2)

    image1 = cv2.cvtColor(image1, cv2.COLOR_BGR2RGB)
    image2 = cv2.cvtColor(image2, cv2.COLOR_BGR2RGB)
    print(image1)
    print(image2)
    face_locations1 = face_recognition.face_locations(image1)
    face_locations2 = face_recognition.face_locations(image2)

    print(face_locations1)
    print(face_locations2)

    encodings1 = face_recognition.face_encodings(image1)[0]
    encodings2 = face_recognition.face_encodings(image2)[0]

    print(encodings1)
    print(encodings2)
    results = face_recognition.compare_faces([encodings1], encodings2, tolerance=0.4)

    if results[0]:
            print("The person in the frame is the same as in the reference image.")

    else:
            print("The person in the frame is not the same as in the reference image.")
except Exception as e:
    print(f"Error: {e}")
