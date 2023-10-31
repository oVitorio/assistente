from flask import Flask
from flask_assistant import Assistant, ask

app = Flask(__name__)
assist = Assistant(app)

@assist.action('input.welcome')
def welcome():
    speech = "Bem-vindo! Como posso ajudá-lo hoje?"
    return ask(speech)

@assist.action('input.hello')
def hello():
    speech = "Olá! Como posso ajudá-lo?"
    return ask(speech)

@assist.action('input.goodbye')
def goodbye():
    speech = "Até logo! Tenha um ótimo dia!"
    return ask(speech)

if __name__ == '__main__':
    app.run(debug=True)
