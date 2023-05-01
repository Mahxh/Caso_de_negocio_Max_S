from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app)

# MySQL Connection
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='csvsensor'
mysql=MySQL(app)


@app.route('/', methods=['POST','GET'])
def Data():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM csvdata')
    data = cur.fetchall()
    even_list = []
    for element in data:
        dictionarydata={
            "id":element[0],
            "name_sensor": element[1],
            "value": element[2],
            "unit": element[3],
            "timestamp": element[4]
        }
        even_list.append(dictionarydata)

    print(even_list)
    return jsonify(even_list)
    


            
    

if __name__ == '__main__':
    app.run(port=5000, debug=True)