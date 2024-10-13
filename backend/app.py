from flask import Flask, request, jsonify
import PyPDF2
import openai
from io import BytesIO
import config
import json

app = Flask(__name__)

# Initialize OpenAI API Key from config.py
openai.api_key = config.OPENAI_API_KEY

def extract_text_from_pdf(pdf_file):
    """
    Extract text from a PDF file using PyPDF2.
    """
    try:
        pdf_reader = PyPDF2.PdfReader(BytesIO(pdf_file.read()))
        pdf_text = ""
        for page_num in range(len(pdf_reader.pages)):
            pdf_text += pdf_reader.pages[page_num].extract_text()
        return pdf_text
    except PyPDF2.errors.PdfReadError:
        return None

def read_from_file(fileName):
    """
    Read JSON data from a file and return the parsed object.
    """
    with open(fileName, 'r') as json_data:  # Use 'r' mode to open the file for reading
        d = json.load(json_data)  # Load JSON directly from the file
    return d  # Return the parsed JSON object

def generate_mind_map(content, fileName='', call_gpt=False):
    """
    Call the OpenAI API to generate a mind map based on the content.
    """
    if call_gpt:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0125",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that generates mind maps."},
                {"role": "user", "content": f"Generate a mind map for the following content:\n\n{content}"}
            ],
            max_tokens=500
        )
        return response['choices'][0]['message']['content']  # Return generated mind map

    # Return static mind map data from JSON file based on filename
    if 'lung' in fileName:
        return read_from_file('static/lung_cancer.json')
    elif 'structures' in fileName:
        return read_from_file('static/data_structures.json')
    elif 'distributed' in fileName:
        return read_from_file('static/distributed_systems.json')

    return None  # In case no condition matched

@app.route('/upload_pdf', methods=['POST'])
def upload_pdf():
    """
    API endpoint to upload a PDF, extract text, and generate a mock mind map.
    """
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and file.filename.endswith('.pdf'):
        try:
            # Extract text from the uploaded PDF
            pdf_text = extract_text_from_pdf(file)
            if not pdf_text:
                return jsonify({"error": "Failed to extract text from PDF"}), 500

            # Generate a mind map using the extracted text
            mind_map = generate_mind_map(pdf_text, file.filename)

            return jsonify({"status": "success", "mind_map": mind_map})
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Invalid file format. Please upload a PDF."}), 400

@app.route('/upload_json', methods=['POST'])
def upload_json():
    """
    API endpoint to take JSON as input and return the data.
    """
    try:
        # Get JSON data from request
        json_data = request.json

        if not json_data:
            return jsonify({"error": "No JSON data provided"}), 400

        # Return received JSON data for demo purposes
        return jsonify({"success": True, "received_data": json_data}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
