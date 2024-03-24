import sqlite3 #allows our python program to interact with SQLite DB

#Connection to our database
conn = sqlite3.connect('/Python DB/nowa.db')

cursor = conn.cursor()#Enters the DB and interacts with it.

results = cursor.execute('Select * from categories')

for row in results:
    print(row)

cursor.close()
conn.close()