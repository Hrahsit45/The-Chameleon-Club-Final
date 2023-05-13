import sys
import json
import pandas as pd
import pickle
import warnings
warnings.filterwarnings('ignore')

# Read the data from stdin
data = sys.stdin.read()

df=pd.DataFrame()

# Parse the JSON data
selectedButtonText = json.loads(data)
print(selectedButtonText)

df=pd.DataFrame([0],columns=['index'])

choices1=["Solo Backpacking","Luxury Getaways","Adventure Sports","Road Trips","Beach Bumming","Cultural Immersion","Nature Trails","Food Exploration","Historical Sites","Music Festivals"]

choices2=["Yoga Enthusiast","Weight Training","Cardio Junkie","Healthy Eating","Outdoor Activities","Endurance Sports","Group Fitness","Home Workouts","Mindfulness Practice","Recovery & Relaxation"]

choices3=["Painting & Drawing","Photography","Musician & Singing","Writing & Blogging","Fashion & Style","DIY & Crafting","Interior Design","Film & Cinema","Performing Arts","Graphic Designing"]

choices4=["Entrepreneurship","Freelancer","Techie","Social Impact","Marketing & Advertising","Finance & Investment","Educational","Healthcare & Wellness","Law & Politics","Creative Industries"]

choices5=["Vegan","Meat Lover","Seafood Enthusiast","Healthy Eating","Gourmet Foodie","Snack Junkie","Dessert Lover","Home Cook","Global Cuisine","Comfort Food Lover"]

for i in choices1:
    df['TravelPreferences_'+i]=0
    if i+' ' in selectedButtonText:df['TravelPreferences_'+i][0]=1


for i in choices2:
    df['Fitness & Health_'+i]=0
    if i+' ' in selectedButtonText:df['Fitness & Health_'+i][0]=1


for i in choices3:
    df['Creative Interests_'+i]=0
    if i+' ' in selectedButtonText:df['Creative Interests_'+i][0]=1


for i in choices4:
    df['Career Interests_'+i]=0
    if i+' ' in selectedButtonText:df['Career Interests_'+i][0]=1


for i in choices5:
    df['Food Preferences_'+i]=0
    if i+' ' in selectedButtonText:df['Food Preferences_'+i][0]=1

# load the saved KMeans model from the file
filename = 'kmeans_model.sav'
kmeans = pickle.load(open(filename, 'rb'))  
df=df.iloc[:,1:]
cluster_labels = kmeans.predict(df.values)
print(cluster_labels)