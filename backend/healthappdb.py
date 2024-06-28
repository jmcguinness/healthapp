import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = '1T^17pHL920DwleTR'
)

cursorObject = dataBase.cursor()