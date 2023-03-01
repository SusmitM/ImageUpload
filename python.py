from flask import *
import json,time
import pytesseract as tess
tess.pytesseract.tesseract_cmd= r'C:\Users\ADMIN\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'
from PIL import Image



app = Flask(__name__)


@app.route('/', methods=['GET'])
def home_page():
    data_set={'Page': 'Home', 'Message': 'Successfully loaded the home page', 'Time': time.time()}
    json_dump= json.dumps(data_set)

    return json_dump


@app.route('/user/', methods=['GET'])
def user_page():
    user_query=str(request.args.get('user')) #/user/?user=''
    
    #acesssing the image
    img=Image.open(f'uploads/{user_query}')
    text=tess.image_to_string(img)
    print(text)

    data_set={'Text': f'{text}'}
    # 'Message': f'uploads/{user_query}', 'Time': time.time()
    json_dump= json.dumps(data_set)

    return json_dump



if __name__ == '__main__':
    app.run(port=7777)

## function('C:\Users\ADMIN\Desktop\Images\tt.png')
