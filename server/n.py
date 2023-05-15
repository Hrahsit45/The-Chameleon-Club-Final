import nltk
from nltk.stem import WordNetLemmatizer
import numpy as np
import tensorflow as tf
import json
import random
import os
import sys
import json


with open('intents.json') as file:
    data = json.load(file)

lemmatizer = WordNetLemmatizer()

words = []
labels = []
docs_x = []
docs_y = []

for intent in data['intents']:
    for pattern in intent['patterns']:
        wrds = nltk.word_tokenize(pattern)
        words.extend(wrds)
        docs_x.append(wrds)
        docs_y.append(intent['tag'])

    if intent['tag'] not in labels:
        labels.append(intent['tag'])

words = [lemmatizer.lemmatize(w.lower()) for w in words if w not in '?']
words = sorted(list(set(words)))

labels = sorted(labels)

training = []
output = []

out_empty = [0] * len(labels)

for x, doc in enumerate(docs_x):
    bag = []
    wrds = [lemmatizer.lemmatize(w.lower()) for w in doc]

    for w in words:
        bag.append(1) if w in wrds else bag.append(0)

    output_row = out_empty[:]
    output_row[labels.index(docs_y[x])] = 1

    training.append(bag)
    output.append(output_row)

training = np.array(training)
output = np.array(output)


model = tf.keras.models.load_model('bot_model.h5',compile=False)

def predict_tag(text):
    wrds = nltk.word_tokenize(text)
    wrds = [lemmatizer.lemmatize(w.lower()) for w in wrds]

    bag = [0] * len(words)
    for w in wrds:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1

    res = model.predict(np.array([bag]),verbose=None)[0]
    thresh = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > thresh]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': labels[r[0]], 'probability': str(r[1])})
    return return_list


def run_bot(input_str):
    # process the input
    results = predict_tag(input_str)

    # write the output to stdout
    if input_str.lower() == 'quit':
        return "Goodbye!"

    if results:
        for r in data['intents']:
            if r['tag'] == results[0]['intent']:
                return  random.choice(r['responses'])
    else:
        return "I'm sorry, I don't understand. Please try again."
