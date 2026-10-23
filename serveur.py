from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import webbrowser
url="http://127.0.0.1:8000/index.html"
webbrowser.open(url)
print("Site :",url)
ThreadingHTTPServer(("127.0.0.1",8000),SimpleHTTPRequestHandler).serve_forever()
