from flask import Flask, request

app = Flask(__name__)

@app.route('/process_image', methods=['POST'])
def process_image():
    file = request.files['image']
    # do something with the image file
    return 'Image processed successfully.'

if __name__ == '__main__':
    app.run()
