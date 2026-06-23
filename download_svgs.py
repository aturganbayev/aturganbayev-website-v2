import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request("https://upload.wikimedia.org/wikipedia/commons/1/15/Minnesota_Golden_Gophers_logo.svg", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx) as response, open('static/assets/icons/umn-logo.svg', 'wb') as out_file:
    out_file.write(response.read())

req2 = urllib.request.Request("https://upload.wikimedia.org/wikipedia/en/c/cd/Nazarbayev_University_logo.svg", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req2, context=ctx) as response, open('static/assets/icons/nu-logo.svg', 'wb') as out_file:
    out_file.write(response.read())

print("Downloaded.")
